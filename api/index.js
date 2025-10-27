import express from "express";
import cors from "cors";
import aiRoutes from "./ai/aiRoute.js";

const app = express();

// ✅ Add this middleware so Express can read JSON from the request body
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
