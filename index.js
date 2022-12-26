import express from "express";
const app = new express();
import routes from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//middleware.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
//Routes
app.use("/api", routes);

const port = 8888;

app.listen(port, () => {
  console.log(`Connected database successfully to ${port} !!!`);
});
