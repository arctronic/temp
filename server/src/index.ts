import express, { Request, Response, Express } from "express";
import { env } from "./config";
import cors from "cors";
import { apiRouter } from "../src/api/routes/api.route";

const app: Express = express();

app.set("port", env.port);

//
app.use(cors());
app.use(express.json());

// Routes
app.use(apiRouter);

// Default route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world! I am a server.");
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
