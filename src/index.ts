import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const server = app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
  console.log("Debugger should remain attached");
});
// Keep the process alive
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  server.close(() => {
    process.exit(1);
  });
});
