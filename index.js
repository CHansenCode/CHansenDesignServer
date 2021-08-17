import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//base 8
import authRoutes from "./mcr/auth.routes.js";
import userRoutes from "./mcr/users.routes.js";
import mediaRoutes from "./mcr/media.routes.js";
import contactRoutes from "./mcr/contact.routes.js";
import textRoutes from "./mcr/text.routes.js";
import statisticsRoutes from "./mcr/statistics.routes.js";
import intercomRoutes from "./mcr/intercom.routes.js";
import planningRoutes from "./mcr/planning.routes.js";
//domain
import architectureProjectsRoutes from "./mcr-domain/architectureProjects.routes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

////base 8
app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);
app.use("/intercom", intercomRoutes);
app.use("/media", mediaRoutes);
app.use("/planning", planningRoutes);
app.use("/statistics", statisticsRoutes);
app.use("/text", textRoutes);
app.use("/users", userRoutes);
////domain
app.use("/architecture/projects", architectureProjectsRoutes);

app.get("/", (req, res) => {
  res.send("Server: ChansenDesign, up and running");
});

const MONGOUSER = process.env.MONGO_USERNAME;
const MONGOPASS = process.env.MONGO_PASSWORD;
const MONGODB = process.env.MONGO_DB;
const MONGO_URL = `mongodb+srv://${MONGOUSER}:${MONGOPASS}@cluster0.fjwvs.mongodb.net/${MONGODB}?retryWrites=true&w=majority`;

const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
