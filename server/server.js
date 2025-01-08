import express from 'express'
import cors from 'cors'
import langflowRouter from "./routes/apiRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", langflowRouter);

const PORT = process.env.PORT || 3000; // Use Render's port or fallback to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});