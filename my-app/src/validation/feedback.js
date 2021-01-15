function validateFeedback(feedback) {
    if(feedback.length>50){
        return "Please do not exceed more than 50 character";
    }
}
export default validateFeedback;