import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { getDeals, createDeal, updateDeal, deleteDeal } from "../controllers/dealController.js";

const router = express.Router();

router.route("/")
  .get(protect, getDeals)
  .post(protect, authorizeRoles("Admin", "Agent"), createDeal);

router.route("/:id")
  .put(protect, authorizeRoles("Admin"), updateDeal)
  .delete(protect, authorizeRoles("Admin"), deleteDeal);

export default router;
