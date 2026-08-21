var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var dotenv = __toESM(require("dotenv"), 1);
dotenv.config();
var ai = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
var SAGE_SYSTEM_PROMPT = `
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
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
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
        ]
      });
      res.json({ answer: response.text });
    } catch (error) {
      console.error("Error from Sage:", error);
      res.status(500).json({ error: "The Sage is currently meditating and cannot answer." });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
