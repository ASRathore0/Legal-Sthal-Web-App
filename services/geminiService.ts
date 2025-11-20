import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLegalAdvice = async (query: string, context: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are a helpful legal assistant for "Legal Sthal", an Indian online business registration platform. 
    The user is asking about ${context}. 
    Provide concise, accurate, and professional advice regarding Indian business laws, registration processes, and compliance. 
    Do not give binding legal advice, but provide general guidance. Keep answers under 150 words.`;

    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
      }
    });

    return response.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, our AI assistant is currently unavailable. Please try again later.";
  }
};