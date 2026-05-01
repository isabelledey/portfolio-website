import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "isabelledey";
const buildPath = path.join(__dirname, "../dist");

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

app.get("/api/projects", async (req, res) => {
  const username = req.query.username || GITHUB_USERNAME;
  const url = `https://api.github.com/users/${username}/repos?per_page=12&sort=updated`;
  const headers = {
    Accept: "application/vnd.github.mercy-preview+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        message: errorText || "Failed to retrieve GitHub repositories.",
      });
    }

    const repositories = await response.json();
    const projectList = repositories.map((repo) => ({
      id: repo.id,
      full_name: repo.full_name,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      topics: repo.topics || [],
      html_url: repo.html_url,
      homepage: repo.homepage,
    }));

    return res.json(projectList);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Unable to fetch repositories from GitHub." });
  }
});

if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
