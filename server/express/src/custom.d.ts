import "express-session";

declare module "express-session" {
  interface SessionData {
    user?: { id: ObjectId; username: string; role: string };
  }
}
