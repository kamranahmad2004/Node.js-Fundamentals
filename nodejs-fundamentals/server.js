import http from "http";
import fs from "fs/promises";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename)
console.log(__dirname)

const PORT = process.env.PORT;
const server = http.createServer(async (req, res) => {
  //   res.write("Hello to everyone guys!");
  //   res.setHeader('Content-Type', 'text/html')
  //   res.statusCode = 404;

  //   res.writeHead(300, { 'Content-Type' : 'application/json' });
  //   res.end(JSON.stringify({ message: 'Hello to everyone!' }));

  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Page not found");
      }

      const data = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message || "Server Error!");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
