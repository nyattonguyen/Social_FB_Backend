import express from "express";
const app = new express();
import routes from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});
//Routes
app.use("/api", routes);

const port = 8888;

app.listen(port, () => {
  console.log(`Connected database successfully to ${port} !!!`);
});
