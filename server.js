const express = require("express");
const morgan = require("morgan");
const donateRouter = require("./routes/donateRouter");
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/donate", donateRouter);
// app.use("/login", loginRouter);
// app.use("/register", registerRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
