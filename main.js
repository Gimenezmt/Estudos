// main.js

import databaseQuestions from './databaseQuiz.js';
import oopQuestions from './oopQuiz.js';
import webDevQuestions from './webDevQuiz.js';

const databaseQuizContainer = document.getElementById('database-questions');
const oopQuizContainer = document.getElementById('oop-questions');
const webDevQuizContainer = document.getElementById('webdev-questions');

function loadQuiz(questions, container) {
  questions.forEach((question, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${index + 1}. ${question.question}</p>
      <select id="question-${index}">
        ${question.options.map(option => `<option value="${option}">${option}</option>`).join('')}
      </
