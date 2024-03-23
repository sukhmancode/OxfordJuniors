import React from 'react';

interface Answer {
    text: string;
    isCorrect: boolean;
}

interface Question {
    img: string;
    questions: string;
    answers: Answer[];
}

interface ResultProps {
    userAns: Answer[];
    questions: Question[];
    resetQuiz?: () => void;
}

const Result: React.FC<ResultProps> = ({ userAns, questions, resetQuiz = () => {} }) => {
    const correctAnswers = userAns.filter(answer => answer.isCorrect).length;

    return (
        <div className="quiz-result">
            <h2>Results</h2>
            <p>You answered {correctAnswers} out of {questions.length} correctly.</p>
            <button onClick={resetQuiz}>Reset Quiz</button>
        </div>
    );
}

export default Result;
