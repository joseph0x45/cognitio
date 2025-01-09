import postgres from "postgres"

export default class AdminRepository {
  sql: postgres.Sql<{}>
  constructor(sql: postgres.Sql) {
    this.sql = sql
  }

  async getAdminByUsername(username: string) {
  }
}
