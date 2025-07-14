import inquirer from "inquirer";
import fs from "fs";

const questions = [
  { type: "input", name: "name", message: "What is your name?" },
  { type: "input", name: "location", message: "Where are you located?" },
  { type: "input", name: "bio", message: "Write a short bio about yourself:" },
  { type: "input", name: "linkedin", message: "Enter your LinkedIn URL:" },
  { type: "input", name: "github", message: "Enter your GitHub URL:" },
];

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${answers.name}'s Portfolio</title>
  <link rel="stylesheet" href="../templates/style.css">
</head>
<body>
  <h1>Hello, I'm ${answers.name}!</h1>
  <p><strong>Location:</strong> ${answers.location}</p>
  <p><strong>Bio:</strong> ${answers.bio}</p>
  <p><strong>LinkedIn:</strong> <a href="${answers.linkedin}">${answers.linkedin}</a></p>
  <p><strong>GitHub:</strong> <a href="${answers.github}">${answers.github}</a></p>
</body>
</html>
`;
}

inquirer.prompt(questions).then((answers) => {
  const htmlContent = generateHTML(answers);

  // Write to file
  fs.writeFile("./output/portfolio.html", htmlContent, (err) => {
    if (err) {
      console.error("❌ Failed to write file:", err);
    } else {
      console.log("\n✅ Player card saved to output/portfolio.html\n");
    }
  });
});
