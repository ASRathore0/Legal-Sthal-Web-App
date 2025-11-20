import React, { useEffect, useState } from 'react';

// Simple client-side admin PIN flow.
// - Admin PIN hash is stored in localStorage under 'admin_pin_hash'.
// - Successful login sets sessionStorage 'admin_authenticated' = '1'.
// Note: This is client-side only and not cryptographically secure for sensitive data.

async function sha256(str: string) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const AdminAuth: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [pinConfirm, setPinConfirm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasPin, setHasPin] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('admin_authenticated') === '1');
    setHasPin(!!localStorage.getItem('admin_pin_hash'));
  }, []);

  const openModal = () => setOpen(true);

  const logout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  const handleSetPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin || !pinConfirm) return alert('Enter and confirm PIN');
    if (pin !== pinConfirm) return alert('PINs do not match');
    setLoading(true);
    try {
      const h = await sha256(pin);
      localStorage.setItem('admin_pin_hash', h);
      sessionStorage.setItem('admin_authenticated', '1');
      setIsAuthenticated(true);
      setHasPin(true);
      setOpen(false);
      setPin('');
      setPinConfirm('');
      alert('Admin PIN set. You are now authenticated for this session.');
    } catch (err) {
      console.error(err);
      alert('Failed to set PIN');
    } finally {
      setLoading(false);
    }
  };

  const handleEnterPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return alert('Enter PIN');
    setLoading(true);
    try {
      const h = await sha256(pin);
      const stored = localStorage.getItem('admin_pin_hash');
      if (stored === h) {
        sessionStorage.setItem('admin_authenticated', '1');
        setIsAuthenticated(true);
        setOpen(false);
        setPin('');
        alert('Authenticated for this session.');
      } else {
        alert('Incorrect PIN');
      }
    } catch (err) {
      console.error(err);
      alert('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const doExport = () => {
    try {
      const raw = localStorage.getItem('inquiries');
      if (!raw) return alert('No saved inquiries found in localStorage.');
      const data = JSON.parse(raw);
      if (!Array.isArray(data) || data.length === 0) return alert('No saved inquiries found in localStorage.');

      const headers = ['submittedAt', 'serviceType', 'name', 'email', 'phone', 'message'];
      const escapeCell = (v: any) => {
        if (v === null || v === undefined) return '';
        const s = String(v).replace(/"/g, '""');
        return `"${s}"`;
      };

      const rows = data.map((row: any) => headers.map(h => escapeCell(row[h])).join(','));
      const csv = [headers.join(','), ...rows].join('\n');

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `inquiries_${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert('Failed to export inquiries. See console for details.');
    }
  };

  return (
    <div className="ml-4 inline-flex items-center gap-2">
      {!isAuthenticated && (
        <>
          <button onClick={openModal} className="inline-flex items-center gap-2 bg-white text-blue-900 px-3 py-2 rounded-md shadow hover:shadow-md text-sm font-semibold">
            Admin Login
          </button>

          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                <h3 className="text-lg font-semibold mb-3">{hasPin ? 'Enter Admin PIN' : 'Set Admin PIN'}</h3>
                <form onSubmit={hasPin ? handleEnterPin : handleSetPin} className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-700">PIN</label>
                    <input type="password" value={pin} onChange={e => setPin(e.target.value)} className="mt-1 block w-full rounded-md border p-2" />
                  </div>
                  {!hasPin && (
                    <div>
                      <label className="text-sm text-gray-700">Confirm PIN</label>
                      <input type="password" value={pinConfirm} onChange={e => setPinConfirm(e.target.value)} className="mt-1 block w-full rounded-md border p-2" />
                    </div>
                  )}

                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => { setOpen(false); setPin(''); setPinConfirm(''); }} className="px-3 py-2 rounded-md bg-gray-100">Cancel</button>
                    <button type="submit" disabled={loading} className="px-3 py-2 rounded-md bg-blue-900 text-white">{hasPin ? 'Unlock' : 'Set PIN'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}

      {isAuthenticated && (
        <>
          <button onClick={doExport} className="inline-flex items-center gap-2 bg-white text-blue-900 px-3 py-2 rounded-md shadow hover:shadow-md text-sm font-semibold">Export Inquiries</button>
          <button onClick={logout} className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white px-3 py-2 rounded-md shadow text-sm ml-2">Logout</button>
        </>
      )}
    </div>
  );
};

export default AdminAuth;
