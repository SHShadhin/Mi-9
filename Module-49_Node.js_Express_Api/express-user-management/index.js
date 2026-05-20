const express = require("express")
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/about", (req, res) => {
    res.send("This is the About Page")
})
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" }
]
app.get("/users", (req, res) => {
  res.send(users)
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})