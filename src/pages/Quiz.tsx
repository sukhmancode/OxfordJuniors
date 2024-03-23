import { useState } from 'react';
import Question from '../components/Question';
import Result from '../components/Result';
import questions from '../constants/questions.json';

interface Answer {
    text: string;
    isCorrect: boolean;
}

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAns, setUserAns] = useState<Answer[]>([]);

    const handleNextQuestion = (selectedAnswer: Answer) => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAns([...userAns, selectedAnswer]);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAns([]);
    };

    return (
        <div className='quiz'>
            <div className="quiz-heading">
                <img src="https://www.edustoke.com/assets/uploads-new/oxford-juniors-1504671925-1.png" alt="Oxford Logo" width={100} />
            </div>

            <div>
                {currentQuestion < questions.length ? (
                    <Question 
                        question={questions[currentQuestion]}
                        onAnswerClick={handleNextQuestion}
                    />
                ) : (
                    <Result
                        userAns={userAns} 
                        questions={questions}
                        resetQuiz={resetQuiz}
                    />
                )}
            </div>
        </div>
    );
}

export default Quiz;
