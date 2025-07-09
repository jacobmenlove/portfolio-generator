import inquirer from "inquirer";

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?',
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Write a short bio about yourself:',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub URL:',
  }
];
