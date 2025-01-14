import { Express, Response, Request } from "express";
import AdminRepository from "../repository/admin";

export default class AdminController {
  adminRepo: AdminRepository
  constructor(adminRepo: AdminRepository) {
    this.adminRepo = adminRepo
  }

  login(req: Request, res: Response) {
    try {

    } catch (error) {
      console.log("Error while logging in", error)
    }
  }

  registerRoutes(app: Express) {
    app.post("/admin/login", this.login)
  }
}
