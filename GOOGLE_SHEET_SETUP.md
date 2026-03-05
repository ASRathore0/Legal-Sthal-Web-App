# Google Sheet & Email Integration Setup

To receive form submissions in a Google Sheet and via Email, follow these steps:

## Step 1: Create the Google Sheet and Script

1.  Go to [Google Sheets](https://sheets.google.com) and create a new **Blank Spreadsheet**.
2.  Name the spreadsheet (e.g., "Legal Sthal Inquiries").
3.  Rename the first tab (at the bottom) to `Inquiries`.
4.  Set up the header row (Row 1) with these exact columns:
    *   **A1**: Date
    *   **B1**: Source
    *   **C1**: Name
    *   **D1**: Email
    *   **E1**: Phone
    *   **F1**: Service Type
    *   **G1**: Message
    *   **H1**: Title
    *   **I1**: City
    *   **J1**: WhatsApp Opt-in

## Step 2: Add the App Script

1.  In your Google Sheet, click on **Extensions** > **Apps Script**.
2.  Delete any code in the `Code.gs` file and paste the following code:

```javascript
// CONFIGURATION
const EMAIL_RECIPIENT = "your-email@example.com"; // CHANGE THIS to your email address
const EMAIL_SUBJECT = "New Legal Sthal Inquiry";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName('Inquiries');

    // Parse the data sent from the website
    const data = JSON.parse(e.postData.contents);

    // Prepare row data
    const row = [
      new Date(),                // Date
      data.source || 'Unknown',  // Source
      data.name,                 // Name
      data.email,                // Email
      "'" + data.phone,          // Phone (quote to prevent scientific notation)
      data.serviceType,          // Service Type
      data.message,              // Message
      data.title || '',          // Title
      data.city || '',           // City
      data.whatsapp ? 'Yes' : 'No' // WhatsApp
    ];

    // Append to sheet
    sheet.appendRow(row);

    // Send Email Notification
    sendEmailNotification(data);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function sendEmailNotification(data) {
  if (!EMAIL_RECIPIENT || EMAIL_RECIPIENT === "your-email@example.com") {
    // Skip email if not configured
    return;
  }
  
  const body = `
    New Inquiry Received!
    
    Source: ${data.source}
    Name: ${data.title ? data.title + ' ' : ''}${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Service: ${data.serviceType}
    City: ${data.city || 'N/A'}
    Message: ${data.message || 'N/A'}
    
    Spreadsheet: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
  `;
  
  MailApp.sendEmail({
    to: EMAIL_RECIPIENT,
    subject: `${EMAIL_SUBJECT} - ${data.name}`,
    body: body
  });
}
```

3.  **IMPORTANT**: Change the `EMAIL_RECIPIENT` variable at the top to your actual email address.
4.  Press `Ctrl + S` (or Cmd + S) to save the script.

## Step 3: Deploy the Web App

1.  Click the blue **Deploy** button (top right) > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  Fill in the details:
    *   **Description**: "Legal Inquiries API" (or anything)
    *   **Execute as**: **Me** (your google account)
    *   **Who has access**: **Anyone** (This is crucial, otherwise your website cannot send data).
4.  Click **Deploy**.
5.  You will be asked to **Authorize access**. Click "Review permissions", verify it's your account.
    *   *Note: You might see a "Google hasn't verified this app" warning. Click "Advanced" > "Go to ... (unsafe)" to proceed. It is safe since it's your own code.*
6.  Copy the **Web App URL** (it ends in `/exec`).

## Step 4: Connect to Your Website

1.  Open the file `services/formService.ts` in your project.
2.  Find the line:
    ```typescript
    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE';
    ```
3.  Replace the placeholder string with your copied Web App URL.
4.  Save the file.

Now, all forms on your website will send data to your Google Sheet and email you!
