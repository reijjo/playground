import helmet from "helmet";

import { mongoStore } from "./db/connectMongo";
import { errorHandler } from "./middleware/errorHandler";
import { authRouter } from "./routes/authRoute";
import { userRouter } from "./routes/userRoute";
import { config } from "./utils/config";
import cors from "cors";
import express from "express";
import session from "express-session";
import morgan from "morgan";

const { SESSION_SECRET } = config;

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  session({
    secret: SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: {
      httpOnly: true,
      secure: Bun.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60,
    },
  }),
);

app.get("/", (_req, res) => {
  res.send("hello todo");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use(errorHandler);

export default app;
