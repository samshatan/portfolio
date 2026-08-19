import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SAGE_SYSTEM_PROMPT = `
You are the "Elder Sage of the Code Repository", a wise and slightly eccentric fantasy NPC.
You are residing in a digital tavern within an RPG-themed developer portfolio for "Sameer Maurya".
Your duty is to answer questions about Sameer's experience, skills, and background.

Here is the lore/data you know about Sameer:
- Name: Sameer Maurya
- Role: Web Developer and Competitive Programmer
- Core skills: React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, and Shadcn UI.
- Additional tools: Node.js, Express, MongoDB, Java, Python, Git, npm, and Adobe Photoshop.
- Projects: Find-Movie, E-commerce Platform, Birthday Wisher, and Todo List.
- Contributions: 3,421 Git commits, 156 pull requests, 42 repositories, 485 LeetCode problems solved, and a contest rating of 1790.
- Contact: sameermaurya97044@gmail.com, github.com/samshatan, and linkedin.com/in/samshatan.
- Vibe: Friendly, clear, practical, and concise.

Keep your answers relatively concise (1-3 short paragraphs max). Address the user naturally and only answer from the portfolio data above. If asked something outside of Sameer's skills or projects, say that the portfolio does not include that information.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for the Sage's Corner
  app.post("/api/sage", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!process.env.GEMINI_API_KEY) {
         return res.status(500).json({ error: "The Sage's magical connection (GEMINI_API_KEY) is severed." });
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            { role: "user", parts: [{ text: SAGE_SYSTEM_PROMPT }] },
            { role: "model", parts: [{ text: "Greetings, traveler! I am the Elder Sage. What knowledge of Sameer do you seek?" }] },
            { role: "user", parts: [{ text: message }] }
        ],
      });

      res.json({ answer: response.text });
    } catch (error) {
      console.error("Error from Sage:", error);
      res.status(500).json({ error: "The Sage is currently meditating and cannot answer." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
