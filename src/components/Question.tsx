import React from 'react'


interface Answer {
    text: string;
    isCorrect: boolean;
  }
  
  interface QuestionProps {
    question: {
      img: string;
      questions: string;
      answers: Answer[];
    };
    onAnswerClick: (answer: Answer) => void;
  }

const Question:React.FC<QuestionProps>= ({question,onAnswerClick}) => {
  return (
    <div className='questions-area'>
        <img src={question.img} alt="" width={400}/>
        <h2>{question.questions}</h2>
        <ul>
            {
                question.answers.map((option)=>(
                    <li key={option.text}>
                        <button onClick={()=>onAnswerClick(option)}>
                            {option.text}
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Question