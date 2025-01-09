import { Express, Response, Request } from "express";
import AdminRepository from "../repository/admin";

export default class AdminController {
  adminRepo: AdminRepository
  constructor(adminRepo: AdminRepository) {
    this.adminRepo = adminRepo
  }

  testHandler(_: Request, res: Response){
    res.send("Hello")
  }

  register_routes(app: Express) {
    app.get("/test", this.testHandler)
  }
}
