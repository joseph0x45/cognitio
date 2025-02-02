import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import postgres from "postgres";
import AdminRepository from "./repository/admin";
import AdminController from "./controllers/admin";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER || "postgres"
const dbPassword = process.env.DB_USER || "password"
const dbName = process.env.DB_USER || "db"

app.use(express.json({ limit: '10kb' }))

app.get("/", (_: Request, res: Response) => {
  res.send("Hello bozo")
})

let db = postgres({
  user: dbUser,
  password: dbPassword,
  database: dbName,
})

//repositories
let adminRepo = new AdminRepository(db)

//controllers
let adminControllers = new AdminController(adminRepo)

adminControllers.registerRoutes(app)

app.listen(port, async () => {
  let version = await db`select version()`
  console.log("Connected to", version[0].version)
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
