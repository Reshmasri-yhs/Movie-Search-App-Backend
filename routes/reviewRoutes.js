import express from "express";

import {
    getReviews,
    addReview,
    updateReview,
    deleteReview
} from "../controllers/reviewController.js";

const router=express.Router();


router.get("/:movieId",getReviews);

router.post("/",addReview);

router.put("/:id",updateReview);

router.delete("/:id",deleteReview);


export default router;