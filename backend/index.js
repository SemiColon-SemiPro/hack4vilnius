import express from "express";
import applicationsRouter from "./routes/applications/applications.js";
import applicantsRouter from "./routes/applicants/applicants.js";
import housesRouter from "./routes/houses/houses.js";

const app = express();

// for getting form values
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/v1/applications', applicationsRouter);
app.use('/api/v1/applicants', applicantsRouter);
app.use('/api/v1/houses', housesRouter);
=======
// override CORS
app.use((req, res, next) => {
	res.append("Access-Control-Allow-Origin", ["*"]);
	res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.append("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use("/api/v1/applications", applicationsRouter);
app.use("/api/v1/applicants", applicantsRouter);
app.use("/api/v1/houses", housesRouter);
>>>>>>> master

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.info(`Server listening on port ${port}...`);
});
