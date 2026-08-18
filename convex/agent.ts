import { action } from "./_generated/server";
import { v } from "convex/values";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const chat = action({
  args: { prompt: v.string(), context: v.string() },
  handler: async (ctx, args) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
      You are a fashion assistant. 
      Context of user's day: ${args.context}
      User question: ${args.prompt}
      Give a specific clothing recommendation.
    `;

    const result = await model.generateContent(fullPrompt);
    return result.response.text();
  },
});
