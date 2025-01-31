import React, { useState } from 'react';
import './QuizesPagecss.css';

const HtmlQuize = () => {
  const quiz = {
    title: 'HTML Basics',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
        correctAnswer: 0,
      },
      {
        question: 'Which HTML tag is used to define an unordered list?',
        options: ['<ul>', '<ol>', '<li>'],
        correctAnswer: 0,
      },
      {
        question: 'Which attribute specifies a unique identifier for an HTML element?',
        options: ['class', 'id', 'name'],
        correctAnswer: 1,
      },
      {
        question: 'Which tag is used to define a hyperlink in HTML?',
        options: ['<a>', '<link>', '<href>'],
        correctAnswer: 0,
      },
      {
        question: 'Which HTML tag is used to define the largest heading?',
        options: ['<h1>', '<h6>', '<header>'],
        correctAnswer: 0,
      },
    ],
  };

  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerClick = (questionIndex, optionIndex) => {
    if (submitted) return;
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const submitQuiz = () => {
    if (answers.includes(null)) {
      alert('Please answer all questions before submitting!');
      return;
    }
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers(Array(quiz.questions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <div className="quizzes-page">
      <h1 className="page-title">HTML Basics Quiz</h1>
      <p className="page-description">Sharpen your skills with interactive quizzes and track your progress!</p>

      <div className="quiz-questions">
        {quiz.questions.map((q, index) => (
          <div key={index} className="question-block">
            <p className="question">{q.question}</p>
            <div className="options">
              {q.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`option-button ${
                    submitted
                      ? optionIndex === q.correctAnswer
                        ? 'correct'
                        : answers[index] === optionIndex
                        ? 'incorrect'
                        : ''
                      : answers[index] === optionIndex
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => handleAnswerClick(index, optionIndex)}
                  disabled={submitted}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        {!submitted && (
          <button className="submit-btn" onClick={submitQuiz}>
            Submit Quiz
          </button>
        )}
        {submitted && (
          <div className="quiz-result">
            <p>
              You answered {answers.filter((ans, idx) => ans === quiz.questions[idx].correctAnswer).length} out of{' '}
              {quiz.questions.length} questions correctly.
            </p>
            <button className="back-btn" onClick={resetQuiz}>
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HtmlQuize;