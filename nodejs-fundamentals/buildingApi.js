import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Kamran" },
  { id: 2, name: "Dev" },
  { id: 3, name: "John" },
];

// middleware for logging
const logger = (req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
};

// JSON middleware
const jsonMiddleWare = (req, res, next) => {
  res.setHeader("Content-Type", "application/json"); // Set header without status code
  next();
};

// route handle for GET /api/users
const getUsers = (req, res) => {
  res.end(JSON.stringify(users));
};

// route handle for GET /api/users/:id
const getUserById = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found!" }));
  }
};

// route handle for POST /api/users

const createUserHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk); // body += chunk.toString()
  });

  req.on("end", () => {
    try {
      const newUser = JSON.parse(Buffer.concat(body).toString());
      users.push(newUser);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid JSON format" }));
    }
  });
};

// not found handler
const notFoundHandler = (req, res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found!" }));
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleWare(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsers(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserById(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
