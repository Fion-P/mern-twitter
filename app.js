const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`listening on port ${port}`)});

//mongodb+srv://admin:<password>@mern-8ccu3.mongodb.net/test?retryWrites=true&w=majority
