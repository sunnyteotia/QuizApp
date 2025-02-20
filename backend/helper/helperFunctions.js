const calculateScore = (answers) => {
    let score = 0;

    answers.forEach(answer => {
        if (answer.isCorrect) {
            score += 1; // Increment score for each correct answer
        }
    });

    return score;
};

module.exports ={calculateScore};