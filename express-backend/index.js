import express from "express";

const app = express();
const port = 3000;

// localhost:3000/hello
// req = request
// res = response
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/todos", (req, res) => {
  res.json([
    { id: 1, todo: "learn express", done: false },
    { id: 2, todo: "learn js", done: true },
    { id: 3, todo: "learn react", done: false },
  ]);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
