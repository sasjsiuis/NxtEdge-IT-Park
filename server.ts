import express from "express";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL || "https://sbeuvjwmpkbrbvbsqhnb.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiZXV2andtcGticmJ2YnNxaG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDEwMDksImV4cCI6MjA4NzYxNzAwOX0.yzMwEOjf3l0inBiEWvMVVkiOBo2-Fao3ZZn1Gf-zcD0";
const supabase = createClient(supabaseUrl, supabaseKey);

// Default content
const defaultContent = {
  // Home Page
  "home.hero.title": "Empowering Global Growth Through Digital Innovation 🌍",
  "home.hero.subtitle": "NxtEdge IT Park is a global digital marketing company helping brands, artists, and entrepreneurs achieve organic and paid growth through data-driven strategies and creative excellence.",
  "home.hero.video": "", // Empty means no video
  "home.about.title": "A Global Hub of Digital Excellence",
  "home.about.text1": "Founded by Ahmed Al Marjan, NxtEdge IT Park started in Sylhet, Bangladesh, and expanded to New York, USA — becoming a trusted global agency delivering innovative digital marketing solutions, creative campaigns, and long-term brand growth.",
  "home.about.text2": "We believe in innovation, transparency, and client success. Every project is handled with passion, precision, and purpose.",
  "home.about.image": "https://picsum.photos/seed/teamwork/800/600",
  "home.services.title": "Powerful Digital Solutions, Tailored for Your Growth",
  "home.services.subtitle": "We provide end-to-end digital marketing and creative services for brands, businesses, and artists worldwide.",
  "home.projects.title": "See How We Deliver Impact",
  "home.projects.subtitle": "From small startups to global enterprises, we've helped hundreds of clients grow online with measurable results.",
  "home.testimonials.title": "Real Feedback. Real Results.",
  "home.leadership.title": "Meet the Vision Behind NxtEdge IT Park",
  "home.leadership.name": "Ahmed Al Marjan",
  "home.leadership.role": "Entrepreneur | CEO | Speaker | Freelancer",
  "home.leadership.text": "Ahmed Al Marjan founded NxtEdge IT Park with a vision to connect creativity and global innovation. Under his leadership, the company has expanded from Sylhet to New York, building a global network of digital experts in SEO, Ads, Design, and Tech.",
  "home.leadership.image": "https://picsum.photos/seed/ceo/600/800",
  "home.cta.title": "Let's Build Your Digital Success Story 🚀",
  "home.cta.subtitle": "Talk with our expert team and discover how we can take your brand, business, or music career to the next level.",
  
  // Global Settings
  "global.logo": "https://image2url.com/r2/default/images/1771974469010-eee12edd-7b5e-49ad-b30c-4730d2efa965.jpg",

  // Global Images
  "image.hero.bg": "https://picsum.photos/seed/tech/1920/1080?blur=10",
  "image.project1": "https://picsum.photos/seed/graph/600/400",
  "image.project2": "https://picsum.photos/seed/music/600/400",
  "image.project3": "https://picsum.photos/seed/brand/600/400",
  "image.about.office1": "https://picsum.photos/seed/office1/400/400",
  "image.about.office2": "https://picsum.photos/seed/office2/400/400",

  // Social Media Links
  "social.facebook": "https://facebook.com/nxtedgeitpark0",
  "social.instagram": "https://instagram.com/nxtedgeitpark",
  "social.linkedin": "https://linkedin.com",
  "social.twitter": "https://twitter.com/NxtedgeItPark",
  "social.messenger": "https://wa.me/13474003355",

  // Testimonials (Stored as JSON string)
  "home.testimonials.list": JSON.stringify([
    { quote: "Our brand went international thanks to NxtEdge's campaign.", author: "Anna R.", location: "Germany", rating: 5, image: "https://picsum.photos/seed/anna/100/100" },
    { quote: "They helped my Spotify music reach real audiences.", author: "David K.", location: "UK", rating: 5, image: "https://picsum.photos/seed/david/100/100" },
    { quote: "Professional, transparent, and results-driven.", author: "Sarah M.", location: "USA", rating: 5, image: "https://picsum.photos/seed/sarah/100/100" },
    { quote: "I've worked with many agencies — NxtEdge stands out!", author: "Rohit P.", location: "UAE", rating: 5, image: "https://picsum.photos/seed/rohit/100/100" }
  ]),

  // Icons & Global Images
  "icon.service.1": "",
  "icon.service.2": "",
  "icon.service.3": "",
  "icon.service.4": "",
  "icon.service.5": "",
  "icon.service.6": "",
  "icon.service.7": "",
  "icon.service.8": "",

  // Team Data
  "team.newYork": JSON.stringify([
    { "id": "01", "name": "Sahadot Hossain", "role": "Executive Director", "email": "", "image": "" },
    { "id": "02", "name": "Hasan Md Kajim", "role": "Managing Director", "email": "", "image": "" },
    { "id": "03", "name": "Minhajul Islam", "role": "Chairman", "email": "", "image": "" },
    { "id": "09", "name": "Ethan Carter", "role": "Web Developer", "email": "ethancarter.nip@gmail.com", "image": "" },
    { "id": "10", "name": "Liam Anderson", "role": "Video Editor", "email": "liamanderson.nip@gmail.com", "image": "" },
    { "id": "11", "name": "Noah Bennett", "role": "Graphics Designer", "email": "noahbennett.nip@gmail.com", "image": "" },
    { "id": "16", "name": "Harper Johnson", "role": "Ai Specialist", "email": "harperjohnson.nip@gmail.com", "image": "" },
    { "id": "18", "name": "Scarlet Lewis", "role": "Google & Meta ads Expert", "email": "scarletlewis.nip@gmail.com", "image": "" },
    { "id": "20", "name": "James Mitchell", "role": "SEO Specialist", "email": "jamesmitchell.nip@gmail.com", "image": "" },
    { "id": "21", "name": "Elijah Brooks", "role": "Social Media Manager", "email": "elijahbrooks.nip@gmail.com", "image": "" },
    { "id": "15", "name": "Mia Anderson", "role": "Content Writer", "email": "miaanderson.nip@gmail.com", "image": "" },
    { "id": "14", "name": "Charlotte Brooks", "role": "E-commerce Specialist", "email": "charlottebrooks.nip@gmail.com", "image": "" },
    { "id": "19", "name": "Natalie Morgan", "role": "Branding Specialist", "email": "nataliemorgan.nip@gmail.com", "image": "" },
    { "id": "06", "name": "Olivia Rivera", "role": "Artist Growth Specialist", "email": "oliviarivera.nip@gmail.com", "image": "" },
    { "id": "07", "name": "Isabella Martinez", "role": "Artist Growth Specialist", "email": "isabellamartinez.nip@gmail.com", "image": "" },
    { "id": "08", "name": "Amelia Carter", "role": "Artist Growth Specialist", "email": "ameliacarter.nip@gmail.com", "image": "" },
    { "id": "04", "name": "Ava Collins", "role": "Artist Growth Specialist", "email": "avacollins.nip@gmail.com", "image": "" },
    { "id": "05", "name": "Sophia Bennett", "role": "Marketing Specialist", "email": "sophiabennett.nip@gmail.com", "image": "" },
    { "id": "12", "name": "Mason Rivera", "role": "Marketing Specialist", "email": "masonrivera.nip@gmail.com", "image": "" },
    { "id": "13", "name": "Aiden Collins", "role": "Marketing Specialist", "email": "aidencollins.nip@gmail.com", "image": "" },
    { "id": "17", "name": "Ella Thompson", "role": "Marketing Specialist", "email": "ellathompson.nip@gmail.com", "image": "" }
  ]),
  "team.sylhet": JSON.stringify([
    { "id": "01", "name": "Ahmed Al Marjan", "role": "Owner & CEO", "email": "", "image": "" },
    { "id": "02", "name": "Ismail Husain Didar", "role": "Executive Director", "email": "", "image": "" },
    { "id": "03", "name": "Md Nadim Ahmed", "role": "Managing Director", "email": "", "image": "" },
    { "id": "04", "name": "Shahjahan Saju", "role": "Chairman", "email": "", "image": "" },
    { "id": "21", "name": "Maruf Al Marwan", "role": "Web Developer", "email": "marufalmarwan.nip@gmail.com", "image": "" },
    { "id": "05", "name": "Nusrat Jahan Eva", "role": "Video Editor", "email": "nusratjahaneva.nip@gmail.com", "image": "" },
    { "id": "07", "name": "Tania Akther Tanu", "role": "Graphics Designer", "email": "taniaakthertanu@gmail.com", "image": "" },
    { "id": "08", "name": "Afrin Akther Chy", "role": "AI Specialist", "email": "afrinaktherchy@gmail.com", "image": "" },
    { "id": "09", "name": "Arman Hossain Chy", "role": "Google & Meta ads Expert", "email": "armanhossainchy.nip@gmail.com", "image": "" },
    { "id": "16", "name": "Anika Tasnim Anu", "role": "SEO Specialist", "email": "anikatasnimanu.nip@gmail.com", "image": "" },
    { "id": "06", "name": "Mehjaben Chowdhury", "role": "Social Media Manager", "email": "mehjabenchowdhury.nip@gmail.com", "image": "" },
    { "id": "10", "name": "Sabrina Akther Sabu", "role": "Content Writer", "email": "sabrinaakthersabu.nip@gmail.com", "image": "" },
    { "id": "14", "name": "Sadia Chowdhury", "role": "E-commerce Specialist", "email": "sadiachowdhury.nip@gmail.com", "image": "" },
    { "id": "17", "name": "Labonno Sultana", "role": "Branding Specialist", "email": "labonnosultana.nip@gmail.com", "image": "" },
    { "id": "18", "name": "Fariha Akther Fari", "role": "Artist Growth Specialist", "email": "farihaaktherfari.nip@gmail.com", "image": "" },
    { "id": "19", "name": "Rayna Akther Ranu", "role": "Artist Growth Specialist", "email": "raynaaktherranu.nip@gmail.com", "image": "" },
    { "id": "22", "name": "Zarin Chowdhury", "role": "Artist Growth Specialist", "email": "zarinchowdhury.nip@gmail.com", "image": "" },
    { "id": "20", "name": "Rakib Hasan", "role": "Artist Growth Specialist", "email": "rakibhasan.nip@gmail.com", "image": "" },
    { "id": "15", "name": "Abu Jafor Marjan", "role": "Marketing Specialist", "email": "abujaformarjan.nip@gmail.com", "image": "" },
    { "id": "13", "name": "Sayedur Rahman", "role": "Marketing Specialist", "email": "sayedurrahman.nip@gmail.com", "image": "" },
    { "id": "12", "name": "Saifur Rahman", "role": "Marketing Specialist", "email": "saifurrahman.nip@gmail.com", "image": "" },
    { "id": "11", "name": "Tauhidur Rahman", "role": "Marketing Specialist", "email": "tauhidurrahman.nip@gmail.com", "image": "" }
  ]),

  // Visibility toggles
  "show.home.hero": "true",
  "show.home.about": "true",
  "show.home.services": "true",
  "show.home.projects": "true",
  "show.home.testimonials": "true",
  "show.home.leadership": "true",
  "show.home.cta": "true",
};

// Ensure all default keys exist
async function initializeContent() {
  try {
    const { data: existingRows, error } = await supabase.from("content").select("key");
    if (error) {
      console.warn("Supabase error (table might not exist or RLS is blocking):", error.message);
      return;
    }

    const existingKeys = new Set(existingRows?.map((row) => row.key) || []);
    const missingContent = [];

    for (const [key, value] of Object.entries(defaultContent)) {
      if (!existingKeys.has(key)) {
        missingContent.push({ key, value });
      }
    }

    if (missingContent.length > 0) {
      await supabase.from("content").insert(missingContent);
    }
  } catch (err) {
    console.error("Failed to initialize Supabase content:", err);
  }
}

initializeContent();

// Auth Middleware
const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key-change-me";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    (req as any).user = user;
    next();
  });
};

// API Routes
app.post("/api/login", (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid password" });
  }
});

app.get("/api/content", async (req, res) => {
  try {
    const { data, error } = await supabase.from("content").select("key, value");
    if (error) throw error;

    const content = (data || []).reduce((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {} as Record<string, string>);

    res.json({ ...defaultContent, ...content });
  } catch (err: any) {
    if (err?.code === '42P01') {
      console.error("\n❌ SUPABASE ERROR: The 'content' table does not exist in your Supabase database.");
      console.error("👉 Please go to your Supabase SQL Editor and run the following command:\n");
      console.error("CREATE TABLE content ( key TEXT PRIMARY KEY, value TEXT NOT NULL );");
      console.error("ALTER TABLE content DISABLE ROW LEVEL SECURITY;\n");
    } else {
      console.error("Error fetching content from Supabase:", err?.message || err);
    }
    res.json(defaultContent);
  }
});

app.post("/api/content", authenticateToken, async (req, res) => {
  const updates = req.body;
  
  try {
    const upsertData = Object.entries(updates).map(([key, value]) => ({
      key,
      value: String(value),
    }));

    const { error } = await supabase.from("content").upsert(upsertData, { onConflict: "key" });
    if (error) throw error;

    res.json({ success: true });
  } catch (err) {
    console.error("Failed to update content in Supabase:", err);
    res.status(500).json({ error: "Failed to update content" });
  }
});

async function startServer() {
  console.log("Starting server...");
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Initializing Vite in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static files in production mode...");
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
