import { Router } from "express";
import db from "../../database/index.js";

const applicantsRouter = Router();

applicantsRouter.route("/").get((req, res) => {
	res.send("applicants list");
});

export default applicantsRouter;
