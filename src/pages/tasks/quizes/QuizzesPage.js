import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './QuizesPage.css';
const QuizzesPage = () => {
  // Quiz data
  const quizzes = [
    {
      id: 1,
      title: 'HTML Basics',
      description: 'Test your knowledge of HTML elements, attributes, and structure.',
      path:'HtmlQuize',
    },
    {
      id: 2,
      title: 'CSS Fundamentals',
      description: 'Assess your skills in CSS properties, selectors, and layouts.',
      path:'CssQuize'
    },
    // Add more quizzes as needed
  ];

  const [selectedQuiz, setSelectedQuiz] = useState(0);
  // const [answers, setAnswers] = useState([]);
  // const [submitted, setSubmitted] = useState(false);

  // Handle quiz attempt
  // const attemptQuiz = (quiz) => {
  //   setSelectedQuiz(quiz);
  //   setAnswers(Array(quiz.questions.length).fill(null)); // Reset answers
  //   setResult(null); // Reset result
  // };

  // Handle answer selection
  // const handleAnswerChange = (questionIndex, optionIndex) => {
  //   if (submitted) return;
  //   const updatedAnswers = [...answers];
  //   updatedAnswers[questionIndex] = optionIndex;
  //   setAnswers(updatedAnswers);
  // };

  // // Calculate and show the result
  // const submitQuiz = () => {
  //   if (answers.includes(null)) {
  //     alert('Please answer all questions before submitting!');
  //     return;
  //   }
  //   setSubmitted(true);
  // };

  // const resetQuiz = () => {
  //   setAnswers(Array(quiz.questions.length).fill(null));
  //   setSubmitted(false);
  // };

  return (
    <div className="quizzes-page" style={{ backgroundColor: '#f4f4f9', minHeight: '100vh', padding: '63px' }}>
      <h1 className="page-title">Quizzes</h1>
      <p className="page-description">Sharpen your skills with interactive quizzes and track your progress!</p>

      {!selectedQuiz && (
        <div className="quizzes-container">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card">
              <h3 className="quiz-title">{quiz.title}</h3>
              <p className="quiz-description">{quiz.description}</p>
              <Link to={`/${quiz.path || '#'}`} className="button-link">Attempt Quiz</Link>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default QuizzesPage;
