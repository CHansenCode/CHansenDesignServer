import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import archProjectRoutes from "./mcr/archProject.routes.js";
import contactRoutes from "./mcr/contactForm.routes.js";
import galleryRoutes from "./mcr/gallery.routes.js";
import projectPlanRoutes from "./mcr/projectPlan.routes.js";
import budgetRoutes from "./mcr/budget.routes.js";

const app = express();
dotenv.config();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/archProjects", archProjectRoutes);
app.use("/contact", contactRoutes);
app.use("/gallery", galleryRoutes);
app.use("/projectPlan", projectPlanRoutes);
app.use("/budget", budgetRoutes);

app.get("/", (req, res) => {
  res.send("Server: ChansenDesign, up and running");
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
