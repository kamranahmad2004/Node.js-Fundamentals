import { createServer } from "http";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const PORT = process.env.PORT;

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@me.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@me.com",
  },
  {
    id: 3,
    name: "Umar doe",
    email: "umardoe@me.com",
  },
];

const sendPostData = () => {
  fs.writeFile("users.json", JSON.stringify(users), (error) => {
    if (error) {
      throw error;
    }
  });
};

const server = createServer((req, res) => {
  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>Welcome to Home Page</h1>`);
        res.end();
        break;
      case "/users":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
        break;

      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`<h1>Page Not Found</h1>`);
        res.end();
        break;
    }
  } else if (req.method === "POST") {
    switch (req.url) {
      case "/users":
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          try {
            const newUser = JSON.parse(body);
            users.push(newUser);
            sendPostData();
            res.end(JSON.stringify(newUser));
          } catch (error) {
            res.end(JSON.stringify({ message: error.message }));
          }
        });
    }
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
