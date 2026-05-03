import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res) => {
  try {
    const { message, accessibility, userName } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are Accessora AI, an accessibility-first assistant.

User name: ${userName || "User"}

Accessibility profile:
${JSON.stringify(accessibility || {}, null, 2)}

User message:
${message}

Instructions:
- Be helpful
- Be concise
- Suggest accessible solutions
- If relevant, mention accessibility accommodations
- If user asks learning help, explain simply
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    res.json({
      reply,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "AI response failed",
    });
  }
};
