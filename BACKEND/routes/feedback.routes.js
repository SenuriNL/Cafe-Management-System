const express = require("express");
const FeedbackRouter = express.Router();
const{
    addFeedback,
    getAllFeedbacks,
    getOneFeedback,
    updateFeedback,
    deleteFeedback,
} = require("../controller/feedback.controller");

FeedbackRouter.post('/create', addFeedback);
FeedbackRouter.get('/feedbacks', getAllFeedbacks);
FeedbackRouter.get('/feedback/:id', getOneFeedback);
FeedbackRouter.patch('/feedbackUpdate/:id', updateFeedback);
FeedbackRouter.delete('/feedbackDelete/:id', deleteFeedback);

module.exports = FeedbackRouter;
