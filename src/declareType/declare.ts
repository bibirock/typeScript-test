import express from "express";

const app = express();

const router = express.Router();

router.get("/api", (req, res) => {
  res.json({
    code: 200,
  });
});

app.use("./api", router);

app.listen(9001, () => {
  console.log("9001");
});
