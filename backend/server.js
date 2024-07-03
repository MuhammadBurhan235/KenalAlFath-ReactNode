import express from "express";
import cors from "cors";

import DepPusatRoute from "./routes/DepPusatRoute.js";
import KabinetRoute from "./routes/KabinetRoute.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(DepPusatRoute);
app.use(KabinetRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
