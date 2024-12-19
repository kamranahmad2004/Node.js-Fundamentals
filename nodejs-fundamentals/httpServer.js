import url from "url";
import path from "path";
import fs from "fs";
import { createServer } from "http";

const PORT = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(async (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] ||
      req.headers["x-real-ip"] ||
      req.socket.remoteAddress;
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = new URLSearchParams(requestUrl.search);
    const logMessage = `[${new Date().toISOString()}] IP: ${ip} | Path: ${
      requestUrl.pathname
    } | Query Params: ${JSON.stringify(
      Object.fromEntries(searchParams.entries())
    )}`;

    fs.appendFile("log.txt", logMessage + "\n", (err) => {
      if (err) console.error("Failed to write to log file:", err);
    });
    console.log(req.headers);

    let filePath;
    if (req.method === "GET") {
      switch (req.url) {
        case "/":
          filePath = path.join(__dirname, "public", "index.html");
          break;
        case "/about":
          filePath = path.join(__dirname, "public", "about.html");
          break;
        default:
          res.end("404 Page Not Found!");
          return;
      }
    }

    const data = await fs.promises.readFile(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(error.message || "An error occurred!");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
