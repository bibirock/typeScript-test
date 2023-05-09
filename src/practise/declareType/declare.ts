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

/**
 * interface Express {
 *  (): App,
 *  Router(): Router
 * }
 * 
 * interface App {
 *  use(path: string, router: any): void,
 *  listen(port: number, cd?: () => void): void
 * }
 * 
 * interface Router {
 * get(path: string, cd: (req: any, res: any) => void: void
 */