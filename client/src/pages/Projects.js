// import { minWidth, width } from "@mui/system";
// import React, { useState } from "react";
// import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

// // Sample steps for each project
// const projectSteps = {
//   1: [
//     { id: 1, title: "Set up the project structure", description: "Create a new directory for your project and set up the basic HTML, CSS, and JavaScript files." },
//     { id: 2, title: "Design the homepage", description: "Create a homepage with a header, navigation bar, and a brief introduction about yourself." },
//     { id: 3, title: "Add a project gallery", description: "Create a section to display your projects with images and descriptions." },
//     { id: 4, title: "Implement a contact form", description: "Add a contact form with fields for name, email, and message." },
//     { id: 5, title: "Add interactivity", description: "Use JavaScript to add interactivity, such as form validation and smooth scrolling." },
//     { id: 6, title: "Test and deploy", description: "Test your website on different devices and deploy it using a hosting service like GitHub Pages." },
//     { id: 7, title: "Final review", description: "Review your website for any bugs or improvements and make final adjustments." },
//   ],
//   2: [
//     { id: 1, title: "Set up Python environment", description: "Install Python and set up a virtual environment for your project." },
//     { id: 2, title: "Create the main app file", description: "Create a Python file to handle the core logic of the To-Do List app." },
//     { id: 3, title: "Design the user interface", description: "Use a library like Tkinter to create a simple GUI for the app." },
//     { id: 4, title: "Implement task management", description: "Add functionality to add, delete, and mark tasks as completed." },
//     { id: 5, title: "Add file storage", description: "Implement saving and loading tasks to/from a local file." },
//     { id: 6, title: "Test the app", description: "Test the app to ensure all features work as expected." },
//     { id: 7, title: "Polish and finalize", description: "Add any final touches, such as styling improvements, and finalize the app." },
//     { id: 8, title: "Create a simple UI", description: "Design a basic interface for users to interact with the app." },
//     { id: 9, title: "Implement task addition", description: "Add functionality to allow users to add new tasks." },
//     { id: 10, title: "Implement task deletion", description: "Add functionality to allow users to delete tasks." },
//     { id: 11, title: "Implement task completion", description: "Add functionality to mark tasks as completed." },
//     { id: 12, title: "Add file saving", description: "Implement saving tasks to a local file." },
//     { id: 13, title: "Add file loading", description: "Implement loading tasks from a local file." },
//     { id: 14, title: "Add error handling", description: "Add error handling for file operations and user inputs." },
//     { id: 15, title: "Test the app thoroughly", description: "Test the app on different scenarios to ensure reliability." },
//     { id: 16, title: "Final review and deployment", description: "Review the app for any issues and prepare it for deployment." },
//   ],
//   3: [
//     { id: 1, title: "Set up Python environment", description: "Install Python and necessary libraries like NLTK or spaCy for NLP." },
//     { id: 2, title: "Create the chatbot logic", description: "Write the core logic for the chatbot to respond to basic queries." },
//     { id: 3, title: "Implement file storage", description: "Add functionality to save and load financial data to/from a local file." },
//     { id: 4, title: "Design a simple UI", description: "Create a basic interface for users to interact with the chatbot." },
//     { id: 5, title: "Test the chatbot", description: "Test the chatbot with various queries to ensure it responds correctly." },
//     { id: 6, title: "Add error handling", description: "Implement error handling for invalid inputs and file operations." },
//     { id: 7, title: "Polish and finalize", description: "Add any final touches, such as improving responses, and finalize the chatbot." },
//     { id: 8, title: "Create a simple UI", description: "Design a basic interface for users to interact with the chatbot." },
//     { id: 9, title: "Implement basic responses", description: "Add functionality for the chatbot to respond to basic queries." },
//     { id: 10, title: "Add file saving", description: "Implement saving financial data to a local file." },
//     { id: 11, title: "Add file loading", description: "Implement loading financial data from a local file." },
//     { id: 12, title: "Add error handling", description: "Add error handling for file operations and user inputs." },
//     { id: 13, title: "Test the chatbot thoroughly", description: "Test the chatbot on different scenarios to ensure reliability." },
//   ],
// };

// const projectsData = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     description: "Build a personal portfolio website showcasing your skills, projects, and contact information. Include interactive elements like a project gallery and contact form.",
//     type: "Free",
//     techStack: ["Web Development"],
//     steps: 7,
//     difficulty: "Basic",
//     views: 109,
//     width:"110%",
//     // minWidth: "100%", // Fixed width for better visibility
//     height:"300px",
//     padding: "10px",
//     tasks: 36,
//     learningOutcomes: ["HTML/CSS", "JavaScript", "Responsive Design"],
//     progress: 21,
//   },
//   {
//     id: 2,
//     title: "Task Manager App",
//     description: "Create a simple To-Do List App where users can add, delete, and mark tasks as completed. The app should have a user-friendly interface and store data in a local file.",
//     type: "Free",
//     techStack: ["Python"],
//     steps: 16,
//     difficulty: "Basic",
//     views: 233,
//     width:"100%",
//     // minWidth: "100%", // Fixed width for better visibility
//     padding: "10px",
//     height:"300px",
//     tasks: 96,
//     learningOutcomes: ["Python syntax", "Object-Oriented Programming", "File input/output", "Basic arithmetic operations"],
//     progress: 21,
//   },
//   {
//     id: 3,
//     title: "AI Chatbot",
//     description: "Create a simple Chatbot that responds to basic user queries. The chatbot should be able to save and load their financial data.",
//     type: "Pro",
//     techStack: ["Python"],
//     steps: 13,
//     difficulty: "Basic",
//     views: 309,
//     width:"130%",
//     // minWidth: "100%", // Fixed width for better visibility
//     padding: "10px",
//     height:"300px",
//     tasks: 46,
//     learningOutcomes: ["Python syntax", "NLP Basics", "File input/output"],
//     progress: 21,
//   },
// ];

// // Projects List Page
// export const Projects = () => {
//   return (
//     <div className="min-h-screen py-16" >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-black mb-12">CodeRecall</h2>
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           style={{ display: "flex", gap: "30px", padding: "20px", flexWrap: "wrap", minWidth:"60%"}}
//         >
//           {projectsData.map((project) => (
//             <Link
//               to={`/project/${project.id}`}
//               key={project.id}
//               style={{ textDecoration: "none", color: "inherit" }} // Prevent default link styles
//             >
//               <div
//                 className="relative bg-[#1A1A2E] p-6 rounded-2xl border border-gray-700/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
//                 style={{
//                   width: project.width,
//                   padding: project.padding,
//                   height:project.height,
//                 }}
//               >
//                 <span
//                   className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
//                     project.type === "Free"
//                       ? "bg-blue-600 text-white"
//                       : "bg-pink-600 text-white"
//                   }`}
//                 >
//                   {project.type.toUpperCase()}
//                 </span>

//                 <h3 className="text-lg font-semibold mb-2 text-black">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//                   {project.description}
//                 </p>

//                 <div className="flex justify-between items-center text-gray-400 text-xs">
//                   <div className="flex gap-2 items-center">
//                     {project.techStack.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="flex items-center gap-1 text-gray-300"
//                       >
//                         {tech === "Python" && (
//                           <img
//                             src="https://www.python.org/static/favicon.ico"
//                             alt="Python"
//                             style={{ height: "10px", width: "10px" }}
//                           />
//                         )}
//                         {tech === "Web Development" && (
//                           <span className="text-orange-500">🌐</span>
//                         )}
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <span className="flex items-center gap-1">
//                     <span className="text-gray-400">👁️</span> {project.views}
//                   </span>
//                 </div>

//                 <div className="flex justify-between items-center mt-3 text-gray-400 text-xs">
//                   <span>📋 {project.steps} Steps</span>
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       project.difficulty === "Basic"
//                         ? "bg-purple-600/20 text-purple-300"
//                         : "bg-red-600/20 text-red-300"
//                     }`}
//                   >
//                     {project.difficulty}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>

//   );
// };

// // Project Detail Page
// export const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = projectsData.find((p) => p.id === parseInt(id));
//   const steps = projectSteps[id] || [];
//   const [currentStep, setCurrentStep] = useState(null);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   const handleStartProject = () => {
//     setCurrentStep(1); // Start with the first step
//   };

//   const handleNextStep = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePreviousStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   return (
//     <div className="min-h-screen py-8" >
//       <div className="max-w-4xl mx-auto px-6">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="text-gray-400 mb-4 flex items-center gap-2 hover:text-gray-200 transition-colors duration-300"
//         >
//           ← Back
//         </button>

//         {/* Project Header */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-3xl font-bold text-black">{project.title}</h2>
//             <span
//               className={`px-4 py-1 rounded-full text-sm font-medium ${
//                 project.type === "Free" ? "bg-blue-600 text-white" : "bg-pink-600 text-white"
//               }`}
//             >
//               {project.type.toUpperCase()}
//             </span>
//           </div>
//           <p className="text-gray-300 text-sm mt-2">{project.description}</p>
//         </div>

//         {/* Project Info */}
//         <div className="flex gap-4 mb-6">
//           <span className="flex items-center gap-2 text-gray-300">
//             {project.techStack.includes("Python") && (
//               <img
//                 src="https://www.python.org/static/favicon.ico"
//                 alt="Python"
//                 style={{ height: "16px", width: "16px" }}
//               />
//             )}
//             {project.techStack[0]}
//           </span>
//           <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300">
//             {project.difficulty}
//           </span>
//           <span className="flex items-center gap-2 text-gray-300">
//             <span className="text-green-400">✔</span> {project.tasks} tasks
//           </span>
//         </div>

//         {/* Learning Outcomes */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold text-black mb-2">Learning Outcomes</h3>
//           <div className="flex flex-wrap gap-2">
//             {project.learningOutcomes.map((outcome, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700/50 text-gray-300"
//               >
//                 {outcome}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Resume Project Button and Progress */}
//         <div className="flex justify-between items-center mb-8">
//           <button
//             onClick={handleStartProject}
//             className="px-6 py-2 bg-purple-600 text-black rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
//           >
//             <span className="text-yellow-400">★</span> Start Project
//           </button>
//           <div className="flex items-center gap-2">
//             <div className="w-48 h-2 bg-gray-700 rounded-full">
//               <div
//                 className="h-2 bg-purple-600 rounded-full"
//                 style={{ width: `${project.progress}%` }}
//               ></div>
//             </div>
//             <span className="text-gray-400 text-sm">{project.progress}% Complete</span>
//           </div>
//         </div>

//         {/* Steps Section */}
//         {!currentStep ? (
//           <div>
//             <h3 className="text-lg font-semibold text-black mb-4">Steps</h3>
//             <div className="space-y-4">
//               {steps.map((step) => (
//                 <div
//                   key={step.id}
//                   className="p-4 bg-[#252542]/80 rounded-lg border border-gray-700/50"
//                 >
//                   <h4 className="text-black font-medium">{step.id}. {step.title}</h4>
//                   <p className="text-gray-400 text-sm mt-1">{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Step {currentStep}: {steps[currentStep - 1].title}
//             </h3>
//             <div className="p-6 bg-[#252542]/80 rounded-lg border border-gray-700/50">
//               <p className="text-gray-300">{steps[currentStep - 1].description}</p>
//               <div className="flex justify-between mt-6">
//                 <button
//                   onClick={handlePreviousStep}
//                   disabled={currentStep === 1}
//                   className={`px-4 py-2 rounded-full text-sm ${
//                     currentStep === 1
//                       ? "bg-gray-600 text-gray-400 cursor-not-allowed"
//                       : "bg-blue-600 text-black hover:bg-blue-700"
//                   } transition-colors duration-300`}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextStep}
//                   disabled={currentStep === steps.length}
//                   className={`px-4 py-2 rounded-full text-sm ${
//                     currentStep === steps.length
//                       ? "bg-gray-600 text-gray-400 cursor-not-allowed"
//                       : "bg-blue-600 text-white hover:bg-blue-700"
//                   } transition-colors duration-300`}
//                 >
//                   {currentStep === steps.length ? "Finish" : "Next"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Main App Component (without Router)
// // const App = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Projects />} />
// //       <Route path="/project/:id" element={<ProjectDetail />} />
// //     </Routes>
// //   );
// // };

// export default Projects;
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
const projectSteps = {
  1: [
    {
      id: 1,
      title: "Set up the project structure",
      description: "Create a new directory for your project and set up the basic HTML, CSS, and JavaScript files.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Setting up the project structure is the foundation of your portfolio website. This step involves creating a new directory and initializing the essential files: `index.html` for the structure, `styles.css` for styling, and `script.js` for interactivity. A well-organized structure ensures your project is easy to manage as it grows.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Create a folder named `portfolio-website` on your computer.</li>
            <li>Inside this folder, create three files: `index.html`, `styles.css`, and `script.js`.</li>
            <li>Set up a basic HTML boilerplate with links to your CSS and JavaScript files.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="html" style={dark}>
            {`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>Welcome to My Portfolio</h1>\n  <script src="script.js"></script>\n</body>\n</html>`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The <code>{`<!DOCTYPE html>`}</code> declaration ensures the browser interprets the file as HTML5.<br />
            - The <code>{`<meta charset="UTF-8">`}</code> tag supports a wide range of characters.<br />
            - The <code>{`<meta name="viewport">`}</code> tag makes your site responsive on mobile devices by setting the viewport width to the device’s width.<br />
            - The <code>{`<link>`}</code> tag connects your CSS, and the <code>{`<script>`}</code> tag links your JavaScript.
          </p>
          <h4>Tips</h4>
          <p>
            Open `index.html` in a browser to confirm it loads correctly. If you see "Welcome to My Portfolio," your setup is working! You can also use a code editor like VS Code for better file management.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Design the homepage",
      description: "Create a homepage with a header, navigation bar, and a brief introduction about yourself.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            The homepage is the first impression visitors get of your portfolio. It should include a header with your name or logo, a navigation bar for easy access to other sections, and a short introduction to who you are and what you do. This step focuses on both structure (HTML) and styling (CSS).
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>In `index.html`, add a <code>{`<header>`}</code> with your name and navigation links.</li>
            <li>Add a <code>{`<section>`}</code> below the header for your introduction.</li>
            <li>Style these elements in `styles.css` to make them visually appealing.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="html" style={dark}>
            {`<header class="main-header">\n  <h1>Jane Doe</h1>\n  <nav class="nav-bar">\n    <a href="#home">Home</a>\n    <a href="#about">About</a>\n    <a href="#projects">Projects</a>\n    <a href="#contact">Contact</a>\n  </nav>\n</header>\n<section id="home">\n  <h2>Hello!</h2>\n  <p>I'm Jane, a web developer passionate about creating user-friendly websites.</p>\n</section>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={dark}>
            {`.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: #f4f4f4;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n.nav-bar a {\n  margin: 0 15px;\n  text-decoration: none;\n  color: #333;\n  font-weight: bold;\n}\n#home {\n  padding: 40px 20px;\n  text-align: center;\n}\n#home h2 {\n  font-size: 2rem;\n  color: #333;\n}\n#home p {\n  font-size: 1.1rem;\n  color: #666;\n}`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The header uses Flexbox (<code>{`display: flex`}</code>) to align the name and navigation horizontally.<br />
            - Navigation links are styled with spacing and no underlines for a clean look.<br />
            - The introduction section is centered and padded for readability.
          </p>
          <h4>Tips</h4>
          <p>
            Test the layout in a browser. Adjust colors and fonts in `styles.css` to reflect your personal brand. Consider adding a sticky header (<code>{`position: sticky; top: 0;`}</code>) to keep navigation always visible.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Add a project gallery",
      description: "Create a section to display your projects with images and descriptions.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            A project gallery showcases your work and skills, making it a key part of your portfolio. This section will display multiple projects, each with an image, title, and description. CSS Grid is used here for a responsive layout that adapts to different screen sizes.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a <code>{`<section>`}</code> with an ID of `projects` in `index.html`.</li>
            <li>Create a container for project items using a <code>{`<div>`}</code> with a class like `gallery`.</li>
            <li>Add individual project items with images and text, then style them in `styles.css`.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="html" style={dark}>
            {`<section id="projects">\n  <h2>My Projects</h2>\n  <div class="gallery">\n    <div class="project-item">\n      <img src="https://via.placeholder.com/300x200" alt="Project 1">\n      <h3>Project 1</h3>\n      <p>A web app built with React and Node.js.</p>\n    </div>\n    <div class="project-item">\n      <img src="https://via.placeholder.com/300x200" alt="Project 2">\n      <h3>Project 2</h3>\n      <p>A Python automation script.</p>\n    </div>\n  </div>\n</section>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={dark}>
            {`#projects {\n  padding: 40px 20px;\n  text-align: center;\n}\n#projects h2 {\n  font-size: 2rem;\n  margin-bottom: 20px;\n  color: #333;\n}\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.project-item {\n  background: #fff;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n.project-item img {\n  max-width: 100%;\n  border-radius: 5px;\n}\n.project-item h3 {\n  font-size: 1.2rem;\n  margin: 10px 0;\n}\n.project-item p {\n  font-size: 0.9rem;\n  color: #666;\n}`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - <code>{`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`}</code> creates a responsive grid that adjusts the number of columns based on screen size.<br />
            - Each project item is styled with a card-like appearance using shadows and rounded corners.<br />
            - Images are set to <code>{`max-width: 100%`}</code> to ensure they scale properly.
          </p>
          <h4>Tips</h4>
          <p>
            Use real project images instead of placeholders when available. Test responsiveness by resizing your browser or using developer tools (F12). Add hover effects (e.g., <code>{`.project-item:hover { transform: scale(1.05); }`}</code>) for interactivity.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Implement a contact form",
      description: "Add a contact form with fields for name, email, and message.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            A contact form allows visitors to reach out to you directly from your website. This step creates a static form with fields for name, email, and a message, styled for usability. Functionality (e.g., sending emails) will be added later in Step 5.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a <code>{`<section>`}</code> with an ID of `contact` in `index.html`.</li>
            <li>Inside it, create a <code>{`<form>`}</code> with input fields and a submit button.</li>
            <li>Style the form in `styles.css` to ensure it’s clean and responsive.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="html" style={dark}>
            {`<section id="contact">\n  <h2>Contact Me</h2>\n  <form id="contact-form">\n    <div class="form-group">\n      <label for="name">Name</label>\n      <input type="text" id="name" name="name" required>\n    </div>\n    <div class="form-group">\n      <label for="email">Email</label>\n      <input type="email" id="email" name="email" required>\n    </div>\n    <div class="form-group">\n      <label for="message">Message</label>\n      <textarea id="message" name="message" rows="5" required></textarea>\n    </div>\n    <button type="submit">Send Message</button>\n  </form>\n</section>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={dark}>
            {`#contact {\n  padding: 40px 20px;\n  text-align: center;\n}\n#contact h2 {\n  font-size: 2rem;\n  margin-bottom: 20px;\n  color: #333;\n}\n#contact-form {\n  max-width: 500px;\n  margin: 0 auto;\n  text-align: left;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.form-group label {\n  display: block;\n  font-size: 1rem;\n  color: #333;\n  margin-bottom: 5px;\n}\n.form-group input, .form-group textarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.form-group textarea {\n  resize: vertical;\n}\n#contact-form button {\n  display: block;\n  width: 100%;\n  padding: 12px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n#contact-form button:hover {\n  background-color: #0056b3;\n}`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - Each field is wrapped in a <code>{`.form-group`}</code> div for consistent spacing.<br />
            - The <code>{`required`}</code> attribute ensures users can’t submit empty fields (though JavaScript will enforce this later).<br />
            - The button is styled to match a modern design with a hover effect.
          </p>
          <h4>Tips</h4>
          <p>
            Test the form layout on different screen sizes. Add placeholder text (e.g., <code>{`placeholder="Your Name"`}</code>) to guide users. For now, clicking "Send Message" won’t do anything—Step 5 will add functionality.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Add interactivity",
      description: "Use JavaScript to add interactivity, such as form validation and smooth scrolling.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Interactivity enhances user experience by making your website more responsive and functional. In this step, you’ll add JavaScript to validate the contact form and enable smooth scrolling for navigation links, improving navigation and usability.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>In `script.js`, add code to validate the contact form before submission.</li>
            <li>Add smooth scrolling behavior to navigation links.</li>
            <li>Test both features in the browser.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="javascript" style={dark}>
            {`// script.js\n\n// Form Validation\ndocument.getElementById('contact-form').addEventListener('submit', function(e) {\n  e.preventDefault();\n  const name = document.getElementById('name').value.trim();\n  const email = document.getElementById('email').value.trim();\n  const message = document.getElementById('message').value.trim();\n\n  if (!name || !email || !message) {\n    alert('Please fill out all fields.');\n    return;\n  }\n  if (!email.includes('@') || !email.includes('.')) {\n    alert('Please enter a valid email address.');\n    return;\n  }\n\n  alert('Message sent successfully!');\n  this.reset();\n});\n\n// Smooth Scrolling\ndocument.querySelectorAll('.nav-bar a').forEach(link => {\n  link.addEventListener('click', function(e) {\n    e.preventDefault();\n    const targetId = this.getAttribute('href');\n    const targetSection = document.querySelector(targetId);\n    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });\n  });\n});`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - Form validation checks for empty fields and a basic email format using <code>{`includes()`}</code>.<br />
            - <code>{`e.preventDefault()`}</code> stops the form from submitting traditionally (since this is a static demo).<br />
            - Smooth scrolling uses <code>{`scrollIntoView`}</code> with the <code>{`behavior: 'smooth'`}</code> option for a fluid transition.<br />
          </p>
          <h4>Tips</h4>
          <p>
            Test the form by submitting with empty fields or an invalid email to see the alerts. Click navigation links to ensure smooth scrolling works. For a real application, replace the <code>{`alert`}</code> with an API call to send the form data (e.g., using Fetch).
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Test and deploy",
      description: "Test your website on different devices and deploy it using a hosting service like GitHub Pages.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Testing ensures your website works across devices and browsers, while deployment makes it accessible online. This step involves checking responsiveness, fixing issues, and using GitHub Pages to host your site for free.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Test your site in Chrome, Firefox, and on mobile devices using browser developer tools (F12).</li>
            <li>Fix any layout or functionality issues (e.g., overlapping elements, broken links).</li>
            <li>Deploy your site using GitHub Pages by creating a repository and uploading your files.</li>
          </ol>
          <h4>Sample Code (Deployment Commands)</h4>
          <SyntaxHighlighter language="bash" style={dark}>
            {`# In your project folder\n\n# 1. Initialize a Git repository\ngit init\ngit add .\ngit commit -m "Initial portfolio website"\n\n# 2. Create a GitHub repository (e.g., 'my-portfolio') and push\ngit remote add origin https://github.com/yourusername/my-portfolio.git\ngit branch -M main\ngit push -u origin main\n\n# 3. Enable GitHub Pages\n# - Go to your repository on GitHub\n# - Navigate to Settings > Pages\n# - Set the source to 'main' branch and '/ (root)' folder\n# - Save and wait a few minutes for deployment`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - <code>{`git init`}</code> and <code>{`git add .`}</code> prepare your files for version control.<br />
            - <code>{`git push`}</code> uploads your code to GitHub.<br />
            - GitHub Pages hosts your static site at <code>{`https://yourusername.github.io/my-portfolio`}</code>.
          </p>
          <h4>Tips</h4>
          <p>
            Use Chrome’s "Device Toolbar" to simulate mobile screens. Check all links and the form. If deployment fails, ensure your repository is public and the branch is set correctly in GitHub Pages settings.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Final review",
      description: "Review your website for any bugs or improvements and make final adjustments.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            The final review ensures your portfolio is polished and professional. This step involves checking for bugs, enhancing design, and adding finishing touches like a favicon or optimized images to improve load times and branding.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Review all sections for typos, broken links, or layout issues.</li>
            <li>Add a favicon to enhance branding.</li>
            <li>Optimize images and test performance.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="html" style={dark}>
            {`<!-- Add to <head> in index.html -->\n<link rel="icon" href="favicon.ico" type="image/x-icon">`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={dark}>
            {`/* Optimize images in styles.css */\n.gallery img {\n  max-width: 100%;\n  height: auto;\n  loading: "lazy"; /* Lazy-load images */\n  object-fit: cover; /* Ensure images fit nicely */\n}`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The favicon appears in browser tabs and bookmarks, reinforcing your brand.<br />
            - <code>{`loading: "lazy"`}</code> defers image loading until they’re in view, improving performance.<br />
            - <code>{`object-fit: cover`}</code> ensures images maintain aspect ratios without distortion.
          </p>
          <h4>Tips</h4>
          <p>
            Use tools like Lighthouse (in Chrome DevTools) to audit performance and accessibility. Compress images with tools like TinyPNG before uploading. Once satisfied, share your live URL with peers for feedback!
          </p>
        </div>
      ),
    },
  ],
  2: [
    {
      id: 1,
      title: "Set up the project environment",
      description: "Create a new directory for your Task Manager App and ensure Python is installed.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Before building the Task Manager App, you need to set up your development environment. This step ensures you have Python installed and creates a dedicated directory for your project files.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Verify that Python is installed by running <code>{`python --version`}</code> in your terminal. If not installed, download and install Python from <a href="https://www.python.org/downloads/">python.org</a>.</li>
            <li>Create a folder named `task-manager-app` on your computer.</li>
            <li>Open the folder in a code editor like VS Code.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="bash" style={dark}>
            {`# Check Python version\npython --version\n\n# Create project directory\nmkdir task-manager-app\ncd task-manager-app`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The <code>{`python --version`}</code> command confirms Python is installed (you should see something like Python 3.x.x).<br />
            - The `mkdir` command creates a new directory, and `cd` navigates into it.<br />
            - Using a code editor like VS Code provides features like syntax highlighting and debugging support.
          </p>
          <h4>Tips</h4>
          <p>
            Ensure you have Python 3.6 or later, as some features (like f-strings) may not work in older versions. If you encounter issues, try using <code>{`python3 --version`}</code> on macOS/Linux, as some systems use this command.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Create the main script file",
      description: "Set up the main Python script file for the Task Manager App.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            The main script file will serve as the entry point for your Task Manager App. This step creates a basic Python file with a simple print statement to ensure everything is set up correctly.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>In the `task-manager-app` directory, create a file named `task_manager.py`.</li>
            <li>Add a simple print statement to verify the script runs.</li>
            <li>Run the script from the terminal to test it.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nprint("Welcome to the Task Manager App!")`}
          </SyntaxHighlighter>
          <h4>Sample Command</h4>
          <SyntaxHighlighter language="bash" style={dark}>
            {`# Run the script\npython task_manager.py`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `print()` function outputs a message to the console.<br />
            - Running the script with <code>{`python task_manager.py`}</code> executes the code and should display "Welcome to the Task Manager App!" in the terminal.
          </p>
          <h4>Tips</h4>
          <p>
            If you see an error like "python: command not found," ensure Python is added to your system’s PATH. On Windows, you might need to use <code>{`py task_manager.py`}</code> instead.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Define the Task class",
      description: "Create a Task class to represent individual tasks with attributes like description and completion status.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Using Object-Oriented Programming (OOP), you’ll define a `Task` class to model each task in the app. Each task will have a description and a completion status, which will allow you to manage tasks effectively.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>In `task_manager.py`, define a `Task` class with attributes for description and completion status.</li>
            <li>Add a method to display the task details.</li>
            <li>Test the class by creating a sample task.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\n# Test the Task class\nif __name__ == "__main__":\n    task = Task("Buy groceries")\n    print(task)`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `__init__` method initializes a task with a description and sets `completed` to `False` by default.<br />
            - The `__str__` method defines how a task is displayed as a string, using "✔" for completed tasks and "✘" for incomplete ones.<br />
            - The `if __name__ == "__main__":` block ensures the test code only runs if the script is executed directly.
          </p>
          <h4>Tips</h4>
          <p>
            Run the script to see the output: "✘ Buy groceries". This confirms the `Task` class works. You can add more attributes like a due date or priority in later steps if desired.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Create the TaskManager class",
      description: "Create a TaskManager class to manage a list of tasks.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            The `TaskManager` class will handle the collection of tasks, providing methods to add, view, and eventually modify tasks. This class will be the core of your app’s functionality.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Define a `TaskManager` class with a list to store tasks.</li>
            <li>Add a method to add a new task to the list.</li>
            <li>Add a method to display all tasks.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n# Test the TaskManager class\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.add_task("Buy groceries")\n    manager.add_task("Finish homework")\n    manager.view_tasks()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `TaskManager` class initializes with an empty list `self.tasks`.<br />
            - The `add_task` method creates a new `Task` and adds it to the list.<br />
            - The `view_tasks` method displays all tasks with numbered indices, or a message if the list is empty.<br />
            - The test code creates a `TaskManager`, adds two tasks, and displays them.
          </p>
          <h4>Tips</h4>
          <p>
            Run the script to see the output. You should see the tasks listed as "1. ✘ Buy groceries" and "2. ✘ Finish homework". If the list is empty, the "No tasks available" message will appear.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Implement task completion",
      description: "Add functionality to mark tasks as completed.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Users should be able to mark tasks as completed. This step adds a method to the `TaskManager` class to toggle the completion status of a task based on its index.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a `mark_completed` method to the `TaskManager` class.</li>
            <li>Ensure the method validates the task index.</li>
            <li>Test the functionality by marking a task as completed.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n# Test marking a task as completed\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.add_task("Buy groceries")\n    manager.add_task("Finish homework")\n    manager.view_tasks()\n    manager.mark_completed(1)\n    manager.view_tasks()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `mark_completed` method takes a task index (1-based for user input) and sets the `completed` attribute of the corresponding task to `True`.<br />
            - Index validation ensures the input is within the valid range (1 to the number of tasks).<br />
            - The test code marks the first task as completed and displays the updated list.
          </p>
          <h4>Tips</h4>
          <p>
            Run the script to see the first task change from "✘ Buy groceries" to "✔ Buy groceries". Test with an invalid index (e.g., 0 or 3) to see the error message.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Implement task deletion",
      description: "Add functionality to delete tasks from the list.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Users should be able to remove tasks they no longer need. This step adds a method to the `TaskManager` class to delete a task based on its index.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a `delete_task` method to the `TaskManager` class.</li>
            <li>Validate the task index before deletion.</li>
            <li>Test the deletion functionality.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n# Test deleting a task\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.add_task("Buy groceries")\n    manager.add_task("Finish homework")\n    manager.view_tasks()\n    manager.delete_task(1)\n    manager.view_tasks()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `delete_task` method removes a task from the `tasks` list using the `pop()` method.<br />
            - Index validation prevents errors if the user enters an invalid index.<br />
            - The test code deletes the first task and displays the updated list.
          </p>
          <h4>Tips</h4>
          <p>
            After deleting a task, the indices of the remaining tasks shift (e.g., task 2 becomes task 1). Make sure to display the updated list to the user so they know the new indices.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Save tasks to a file",
      description: "Implement functionality to save tasks to a local file.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            To persist tasks between sessions, you’ll save them to a local file. This step introduces file I/O in Python, using a simple text file to store task data.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a `save_tasks` method to the `TaskManager` class.</li>
            <li>Write the tasks to a file named `tasks.txt` in a simple format.</li>
            <li>Test the save functionality.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n# Test saving tasks\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.add_task("Buy groceries")\n    manager.add_task("Finish homework")\n    manager.mark_completed(1)\n    manager.save_tasks()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `save_tasks` method opens `tasks.txt` in write mode ("w") and writes each task’s description and completion status, separated by a pipe (`|`).<br />
            - Each task is written on a new line (`\\n`).<br />
            - The test code adds two tasks, marks one as completed, and saves them to the file.
          </p>
          <h4>Tips</h4>
          <p>
            After running the script, check the `tasks.txt` file in your project directory. It should contain lines like "Buy groceries|True" and "Finish homework|False". If the file doesn’t appear, ensure you have write permissions in the directory.
          </p>
        </div>
      ),
    },
    {
      id: 8,
      title: "Load tasks from a file",
      description: "Implement functionality to load tasks from a local file when the app starts.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            To make the app persistent, you’ll load tasks from the `tasks.txt` file when the `TaskManager` is initialized. This ensures users can pick up where they left off.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Modify the `TaskManager` class to load tasks in the `__init__` method.</li>
            <li>Add a `load_tasks` method to read from `tasks.txt`.</li>
            <li>Test the load functionality.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, completed=False):\n        self.description = description\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, completed = line.strip().split("|")\n                    task = Task(description, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n# Test loading tasks\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.view_tasks()\n    manager.add_task("New task")\n    manager.save_tasks()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `Task` class is updated to accept a `completed` parameter in `__init__`.<br />
            - The `load_tasks` method reads `tasks.txt`, splits each line into description and completion status, and creates a `Task` object.<br />
            - The `try-except` block handles the case where `tasks.txt` doesn’t exist yet.<br />
            - The test code loads existing tasks (if any), adds a new task, and saves the updated list.
          </p>
          <h4>Tips</h4>
          <p>
            If `tasks.txt` exists from the previous step, you should see the tasks loaded when the script runs. Test by deleting `tasks.txt` to see the "Starting fresh" message.
          </p>
        </div>
      ),
    },
    {
      id: 9,
      title: "Create a command-line menu",
      description: "Implement a simple command-line interface (CLI) to interact with the Task Manager.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            A command-line interface allows users to interact with the app by entering commands. This step creates a menu loop where users can choose to add, view, mark, or delete tasks.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a `run` method to the `TaskManager` class to display a menu and handle user input.</li>
            <li>Implement a loop that continues until the user chooses to exit.</li>
            <li>Test the CLI by running the script.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, completed=False):\n        self.description = description\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, completed = line.strip().split("|")\n                    task = Task(description, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Exit")\n            choice = input("Enter your choice (1-5): ")\n\n            if choice == "1":\n                self.view_tasks()\n            elif choice == "2":\n                description = input("Enter task description: ")\n                self.add_task(description)\n            elif choice == "3":\n                self.view_tasks()\n                index = int(input("Enter task number to mark as completed: "))\n                self.mark_completed(index)\n            elif choice == "4":\n                self.view_tasks()\n                index = int(input("Enter task number to delete: "))\n                self.delete_task(index)\n            elif choice == "5":\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please try again.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `run` method displays a menu and uses a `while` loop to keep the app running until the user exits.<br />
            - Each menu option calls the appropriate method based on user input.<br />
            - The app saves tasks to the file when the user exits.<br />
            - The test code starts the CLI, allowing you to interact with the app.
          </p>
          <h4>Tips</h4>
          <p>
            Test each menu option: add a task, view the list, mark a task as completed, delete a task, and exit. If you enter an invalid choice (e.g., "6"), you’ll see an error message. Be careful with input types (e.g., entering a letter for the task number will raise an error—we’ll handle this in the next step).
          </p>
        </div>
      ),
    },
    {
      id: 10,
      title: "Add input validation",
      description: "Add error handling for user inputs in the CLI.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            To make the app more robust, you’ll add input validation to handle invalid user inputs, such as non-numeric inputs for task indices or empty task descriptions.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Modify the `run` method to validate menu choices and task indices.</li>
            <li>Ensure task descriptions are not empty when adding tasks.</li>
            <li>Test the app with invalid inputs.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, completed=False):\n        self.description = description\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, completed = line.strip().split("|")\n                    task = Task(description, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Exit")\n            try:\n                choice = int(input("Enter your choice (1-5): "))\n            except ValueError:\n                print("Please enter a number between 1 and 5.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                self.add_task(description)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 5.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `try-except` blocks catch `ValueError` exceptions when the user enters non-numeric input for the menu choice or task index.<br />
            - The `strip()` method removes whitespace from the task description, and an empty description is rejected.<br />
            - If there are no tasks, the app skips asking for an index to mark or delete.
          </p>
          <h4>Tips</h4>
          <p>
            Test by entering invalid inputs: a letter for the menu choice, an empty task description, or a letter for the task index. The app should handle these gracefully with appropriate error messages.
          </p>
        </div>
      ),
    },
    {
      id: 11,
      title: "Add task editing",
      description: "Allow users to edit the description of existing tasks.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Users may want to update a task’s description if they made a mistake or need to change it. This step adds an "Edit task" option to the menu.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add an `edit_task` method to the `TaskManager` class.</li>
            <li>Add an "Edit task" option to the menu in the `run` method.</li>
            <li>Test the edit functionality.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, completed=False):\n        self.description = description\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def edit_task(self, task_index, new_description):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            old_description = task.description\n            task.description = new_description\n            print(f"Updated task: {old_description} -> {task}")\n        else:\n            print("Invalid task index.")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, completed = line.strip().split("|")\n                    task = Task(description, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Edit task")\n            print("6. Exit")\n            try:\n                choice = int(input("Enter your choice (1-6): "))\n            except ValueError:\n                print("Please enter a number between 1 and 6.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                self.add_task(description)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to edit: "))\n                    if 1 <= index <= len(self.tasks):\n                        new_description = input("Enter new task description: ").strip()\n                        if not new_description:\n                            print("Task description cannot be empty.")\n                            continue\n                        self.edit_task(index, new_description)\n                    else:\n                        print("Invalid task index.")\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 6:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 6.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `edit_task` method updates the description of a task at the given index.<br />
            - The menu now includes an "Edit task" option (5), which prompts for the task number and new description.<br />
            - Input validation ensures the index is valid and the new description isn’t empty.
          </p>
          <h4>Tips</h4>
          <p>
            Test by editing a task’s description. For example, change "Buy groceries" to "Buy groceries and milk". Verify the change by viewing the task list.
          </p>
        </div>
      ),
    },
    {
      id: 12,
      title: "Add task statistics",
      description: "Display basic statistics about the tasks, such as total tasks and completion percentage.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Adding statistics gives users insight into their productivity. This step introduces basic arithmetic operations to calculate the total number of tasks and the percentage of tasks completed.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a `show_stats` method to the `TaskManager` class.</li>
            <li>Add a "Show statistics" option to the menu.</li>
            <li>Test the statistics display.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, completed=False):\n        self.description = description\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description):\n        task = Task(description)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def edit_task(self, task_index, new_description):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            old_description = task.description\n            task.description = new_description\n            print(f"Updated task: {old_description} -> {task}")\n        else:\n            print("Invalid task index.")\n\n    def show_stats(self):\n        total_tasks = len(self.tasks)\n        completed_tasks = sum(1 for task in self.tasks if task.completed)\n        completion_rate = (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0\n        print(f"Total tasks: {total_tasks}")\n        print(f"Completed tasks: {completed_tasks}")\n        print(f"Completion rate: {completion_rate:.2f}%")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, completed = line.strip().split("|")\n                    task = Task(description, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Edit task")\n            print("6. Show statistics")\n            print("7. Exit")\n            try:\n                choice = int(input("Enter your choice (1-7): "))\n            except ValueError:\n                print("Please enter a number between 1 and 7.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                self.add_task(description)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to edit: "))\n                    if 1 <= index <= len(self.tasks):\n                        new_description = input("Enter new task description: ").strip()\n                        if not new_description:\n                            print("Task description cannot be empty.")\n                            continue\n                        self.edit_task(index, new_description)\n                    else:\n                        print("Invalid task index.")\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 6:\n                self.show_stats()\n            elif choice == 7:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 7.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `show_stats` method calculates the total tasks, completed tasks, and completion percentage.<br />
            - The `sum()` function with a generator expression counts completed tasks.<br />
            - The completion rate is calculated as a percentage, with a check to avoid division by zero.<br />
            - The menu now includes a "Show statistics" option (6).
          </p>
          <h4>Tips</h4>
          <p>
            Test by adding a few tasks, marking some as completed, and then viewing the statistics. If there are no tasks, the completion rate should be 0%. You can enhance this later by adding more stats, like the number of tasks added today.
          </p>
        </div>
      ),
    },
    {
      id: 13,
      title: "Add task categories",
      description: "Allow users to categorize tasks (e.g., Work, Personal).",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Categorizing tasks helps users organize their to-do list. This step adds a category attribute to the `Task` class and updates the app to handle categories.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Update the `Task` class to include a category attribute.</li>
            <li>Modify the `add_task`, `save_tasks`, and `load_tasks` methods to handle categories.</li>
            <li>Update the `run` method to prompt for a category when adding a task.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, category="General", completed=False):\n        self.description = description\n        self.category = category\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} [{self.category}] {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description, category):\n        task = Task(description, category)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def edit_task(self, task_index, new_description):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            old_description = task.description\n            task.description = new_description\n            print(f"Updated task: {old_description} -> {task}")\n        else:\n            print("Invalid task index.")\n\n    def show_stats(self):\n        total_tasks = len(self.tasks)\n        completed_tasks = sum(1 for task in self.tasks if task.completed)\n        completion_rate = (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0\n        print(f"Total tasks: {total_tasks}")\n        print(f"Completed tasks: {completed_tasks}")\n        print(f"Completion rate: {completion_rate:.2f}%")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.category}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, category, completed = line.strip().split("|")\n                    task = Task(description, category, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Edit task")\n            print("6. Show statistics")\n            print("7. Exit")\n            try:\n                choice = int(input("Enter your choice (1-7): "))\n            except ValueError:\n                print("Please enter a number between 1 and 7.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                category = input("Enter task category (e.g., Work, Personal, or press Enter for General): ").strip()\n                category = category if category else "General"\n                self.add_task(description, category)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to edit: "))\n                    if 1 <= index <= len(self.tasks):\n                        new_description = input("Enter new task description: ").strip()\n                        if not new_description:\n                            print("Task description cannot be empty.")\n                            continue\n                        self.edit_task(index, new_description)\n                    else:\n                        print("Invalid task index.")\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 6:\n                self.show_stats()\n            elif choice == 7:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 7.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `Task` class now includes a `category` attribute, defaulting to "General".<br />
            - The `add_task` method accepts a category parameter and passes it to the `Task` constructor.<br />
            - The `save_tasks` method now writes the category to the file, using the format `description|category|completed`.<br />
            - The `load_tasks` method reads the category from the file and passes it to the `Task` constructor.<br />
            - The `run` method prompts for a category when adding a task, defaulting to "General" if the user presses Enter.<br />
            - The task display (`__str__`) now includes the category in brackets, e.g., "✘ [Work] Buy groceries".
          </p>
          <h4>Tips</h4>
          <p>
            Test by adding tasks with different categories (e.g., "Work" and "Personal"). Check the `tasks.txt` file to ensure categories are saved correctly. When you restart the app, the categories should load properly.
          </p>
        </div>
      ),
    },
    {
      id: 14,
      title: "Filter tasks by category",
      description: "Add functionality to view tasks filtered by category.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Filtering tasks by category helps users focus on specific types of tasks (e.g., only "Work" tasks). This step adds a new menu option to filter and display tasks based on their category.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Add a `view_tasks_by_category` method to the `TaskManager` class.</li>
            <li>Add a "View tasks by category" option to the menu in the `run` method.</li>
            <li>Test the filtering functionality.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nclass Task:\n    def __init__(self, description, category="General", completed=False):\n        self.description = description\n        self.category = category\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        return f"{status} [{self.category}] {self.description}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description, category):\n        task = Task(description, category)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def view_tasks_by_category(self, category):\n        filtered_tasks = [task for task in self.tasks if task.category.lower() == category.lower()]\n        if not filtered_tasks:\n            print(f"No tasks found in category '{category}'.")\n            return\n        print(f"Tasks in category '{category}':")\n        for i, task in enumerate(filtered_tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def edit_task(self, task_index, new_description):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            old_description = task.description\n            task.description = new_description\n            print(f"Updated task: {old_description} -> {task}")\n        else:\n            print("Invalid task index.")\n\n    def show_stats(self):\n        total_tasks = len(self.tasks)\n        completed_tasks = sum(1 for task in self.tasks if task.completed)\n        completion_rate = (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0\n        print(f"Total tasks: {total_tasks}")\n        print(f"Completed tasks: {completed_tasks}")\n        print(f"Completion rate: {completion_rate:.2f}%")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                file.write(f"{task.description}|{task.category}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, category, completed = line.strip().split("|")\n                    task = Task(description, category, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View all tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Edit task")\n            print("6. Show statistics")\n            print("7. View tasks by category")\n            print("8. Exit")\n            try:\n                choice = int(input("Enter your choice (1-8): "))\n            except ValueError:\n                print("Please enter a number between 1 and 8.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                category = input("Enter task category (e.g., Work, Personal, or press Enter for General): ").strip()\n                category = category if category else "General"\n                self.add_task(description, category)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to edit: "))\n                    if 1 <= index <= len(self.tasks):\n                        new_description = input("Enter new task description: ").strip()\n                        if not new_description:\n                            print("Task description cannot be empty.")\n                            continue\n                        self.edit_task(index, new_description)\n                    else:\n                        print("Invalid task index.")\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 6:\n                self.show_stats()\n            elif choice == 7:\n                category = input("Enter category to filter (e.g., Work, Personal): ").strip()\n                if not category:\n                    print("Category cannot be empty.")\n                    continue\n                self.view_tasks_by_category(category)\n            elif choice == 8:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 8.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `view_tasks_by_category` method filters tasks using a list comprehension, matching the category (case-insensitive).<br />
            - The menu now includes a "View tasks by category" option (7), which prompts for a category and displays matching tasks.<br />
            - If no tasks match the category, a message is displayed.
          </p>
          <h4>Tips</h4>
          <p>
            Test by adding tasks in different categories (e.g., "Work" and "Personal"), then filter by one category. Try filtering with a category that doesn’t exist to see the "No tasks found" message.
          </p>
        </div>
      ),
    },
    {
      id: 15,
      title: "Add due dates for tasks",
      description: "Allow users to set due dates for tasks and display them.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            Adding due dates helps users prioritize tasks. This step introduces the `datetime` module to handle dates and updates the app to include due dates for tasks.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Update the `Task` class to include a due date attribute.</li>
            <li>Modify the `add_task`, `save_tasks`, and `load_tasks` methods to handle due dates.</li>
            <li>Update the `run` method to prompt for a due date when adding a task.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nfrom datetime import datetime\n\nclass Task:\n    def __init__(self, description, category="General", due_date=None, completed=False):\n        self.description = description\n        self.category = category\n        self.due_date = due_date\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        due_date_str = f" (Due: {self.due_date})" if self.due_date else ""\n        return f"{status} [{self.category}] {self.description}{due_date_str}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description, category, due_date=None):\n        task = Task(description, category, due_date)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def view_tasks_by_category(self, category):\n        filtered_tasks = [task for task in self.tasks if task.category.lower() == category.lower()]\n        if not filtered_tasks:\n            print(f"No tasks found in category '{category}'.")\n            return\n        print(f"Tasks in category '{category}':")\n        for i, task in enumerate(filtered_tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def edit_task(self, task_index, new_description):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            old_description = task.description\n            task.description = new_description\n            print(f"Updated task: {old_description} -> {task}")\n        else:\n            print("Invalid task index.")\n\n    def show_stats(self):\n        total_tasks = len(self.tasks)\n        completed_tasks = sum(1 for task in self.tasks if task.completed)\n        completion_rate = (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0\n        print(f"Total tasks: {total_tasks}")\n        print(f"Completed tasks: {completed_tasks}")\n        print(f"Completion rate: {completion_rate:.2f}%")\n\n    def save_tasks(self):\n        with open("tasks.txt", "w") as file:\n            for task in self.tasks:\n                due_date_str = task.due_date if task.due_date else "None"\n                file.write(f"{task.description}|{task.category}|{due_date_str}|{task.completed}\\n")\n        print("Tasks saved to tasks.txt")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, category, due_date, completed = line.strip().split("|")\n                    due_date = due_date if due_date != "None" else None\n                    task = Task(description, category, due_date, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View all tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Edit task")\n            print("6. Show statistics")\n            print("7. View tasks by category")\n            print("8. Exit")\n            try:\n                choice = int(input("Enter your choice (1-8): "))\n            except ValueError:\n                print("Please enter a number between 1 and 8.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                category = input("Enter task category (e.g., Work, Personal, or press Enter for General): ").strip()\n                category = category if category else "General"\n                due_date_input = input("Enter due date (YYYY-MM-DD, or press Enter to skip): ").strip()\n                due_date = None\n                if due_date_input:\n                    try:\n                        due_date = datetime.strptime(due_date_input, "%Y-%m-%d").strftime("%Y-%m-%d")\n                    except ValueError:\n                        print("Invalid date format. Skipping due date.")\n                        due_date = None\n                self.add_task(description, category, due_date)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to edit: "))\n                    if 1 <= index <= len(self.tasks):\n                        new_description = input("Enter new task description: ").strip()\n                        if not new_description:\n                            print("Task description cannot be empty.")\n                            continue\n                        self.edit_task(index, new_description)\n                    else:\n                        print("Invalid task index.")\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 6:\n                self.show_stats()\n            elif choice == 7:\n                category = input("Enter category to filter (e.g., Work, Personal): ").strip()\n                if not category:\n                    print("Category cannot be empty.")\n                    continue\n                self.view_tasks_by_category(category)\n            elif choice == 8:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 8.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - The `Task` class now includes a `due_date` attribute, defaulting to `None`.<br />
            - The `add_task` method accepts a `due_date` parameter.<br />
            - The `save_tasks` method writes the due date to the file, using "None" if no due date is set.<br />
            - The `load_tasks` method reads the due date and converts "None" back to `None`.<br />
            - The `run` method prompts for a due date in YYYY-MM-DD format and validates it using `datetime.strptime`.<br />
            - The task display (`__str__`) includes the due date if set, e.g., "✘ [Work] Buy groceries (Due: 2025-03-25)".
          </p>
          <h4>Tips</h4>
          <p>
            Test by adding tasks with and without due dates. Enter an invalid date (e.g., "2025-13-01") to see the error message. Check the `tasks.txt` file to ensure due dates are saved correctly.
          </p>
        </div>
      ),
    },
    {
      id: 16,
      title: "Final review",
      description: "Review the Task Manager App for bugs, improve code quality, and add finishing touches.",
      detailedDescription: (
        <div>
          <h4>Overview</h4>
          <p>
            The final review ensures your Task Manager App is robust and user-friendly. This step involves testing all features, fixing bugs, and adding enhancements like better error handling or documentation.
          </p>
          <h4>Steps to Complete</h4>
          <ol>
            <li>Test all menu options to ensure they work as expected.</li>
            <li>Add docstrings to the `Task` and `TaskManager` classes for better documentation.</li>
            <li>Handle edge cases, such as special characters in task descriptions.</li>
          </ol>
          <h4>Sample Code</h4>
          <SyntaxHighlighter language="python" style={dark}>
            {`# task_manager.py\n\nfrom datetime import datetime\n\nclass Task:\n    """A class to represent a task with a description, category, due date, and completion status."""\n    def __init__(self, description, category="General", due_date=None, completed=False):\n        self.description = description\n        self.category = category\n        self.due_date = due_date\n        self.completed = completed\n\n    def __str__(self):\n        status = "✔" if self.completed else "✘"\n        due_date_str = f" (Due: {self.due_date})" if self.due_date else ""\n        return f"{status} [{self.category}] {self.description}{due_date_str}"\n\nclass TaskManager:\n    """A class to manage a list of tasks, with functionality to add, edit, delete, and filter tasks."""\n    def __init__(self):\n        self.tasks = []\n        self.load_tasks()\n\n    def add_task(self, description, category, due_date=None):\n        task = Task(description, category, due_date)\n        self.tasks.append(task)\n        print(f"Added task: {task}")\n\n    def view_tasks(self):\n        if not self.tasks:\n            print("No tasks available.")\n            return\n        print("Your Tasks:")\n        for i, task in enumerate(self.tasks, 1):\n            print(f"{i}. {task}")\n\n    def view_tasks_by_category(self, category):\n        filtered_tasks = [task for task in self.tasks if task.category.lower() == category.lower()]\n        if not filtered_tasks:\n            print(f"No tasks found in category '{category}'.")\n            return\n        print(f"Tasks in category '{category}':")\n        for i, task in enumerate(filtered_tasks, 1):\n            print(f"{i}. {task}")\n\n    def mark_completed(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            task.completed = True\n            print(f"Marked as completed: {task}")\n        else:\n            print("Invalid task index.")\n\n    def delete_task(self, task_index):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks.pop(task_index - 1)\n            print(f"Deleted task: {task}")\n        else:\n            print("Invalid task index.")\n\n    def edit_task(self, task_index, new_description):\n        if 1 <= task_index <= len(self.tasks):\n            task = self.tasks[task_index - 1]\n            old_description = task.description\n            task.description = new_description\n            print(f"Updated task: {old_description} -> {task}")\n        else:\n            print("Invalid task index.")\n\n    def show_stats(self):\n        total_tasks = len(self.tasks)\n        completed_tasks = sum(1 for task in self.tasks if task.completed)\n        completion_rate = (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0\n        print(f"Total tasks: {total_tasks}")\n        print(f"Completed tasks: {completed_tasks}")\n        print(f"Completion rate: {completion_rate:.2f}%")\n\n    def save_tasks(self):\n        try:\n            with open("tasks.txt", "w") as file:\n                for task in self.tasks:\n                    due_date_str = task.due_date if task.due_date else "None"\n                    file.write(f"{task.description}|{task.category}|{due_date_str}|{task.completed}\\n")\n            print("Tasks saved to tasks.txt")\n        except Exception as e:\n            print(f"Error saving tasks: {e}")\n\n    def load_tasks(self):\n        try:\n            with open("tasks.txt", "r") as file:\n                for line in file:\n                    description, category, due_date, completed = line.strip().split("|")\n                    due_date = due_date if due_date != "None" else None\n                    task = Task(description, category, due_date, completed == "True")\n                    self.tasks.append(task)\n            print("Tasks loaded from tasks.txt")\n        except FileNotFoundError:\n            print("No previous tasks found. Starting fresh.")\n        except Exception as e:\n            print(f"Error loading tasks: {e}")\n\n    def run(self):\n        while True:\n            print("\\nTask Manager Menu:")\n            print("1. View all tasks")\n            print("2. Add task")\n            print("3. Mark task as completed")\n            print("4. Delete task")\n            print("5. Edit task")\n            print("6. Show statistics")\n            print("7. View tasks by category")\n            print("8. Exit")\n            try:\n                choice = int(input("Enter your choice (1-8): "))\n            except ValueError:\n                print("Please enter a number between 1 and 8.")\n                continue\n\n            if choice == 1:\n                self.view_tasks()\n            elif choice == 2:\n                description = input("Enter task description: ").strip()\n                if not description:\n                    print("Task description cannot be empty.")\n                    continue\n                if "|" in description:\n                    print("Task description cannot contain the '|' character.")\n                    continue\n                category = input("Enter task category (e.g., Work, Personal, or press Enter for General): ").strip()\n                if "|" in category:\n                    print("Category cannot contain the '|' character.")\n                    continue\n                category = category if category else "General"\n                due_date_input = input("Enter due date (YYYY-MM-DD, or press Enter to skip): ").strip()\n                due_date = None\n                if due_date_input:\n                    try:\n                        due_date = datetime.strptime(due_date_input, "%Y-%m-%d").strftime("%Y-%m-%d")\n                    except ValueError:\n                        print("Invalid date format. Skipping due date.")\n                        due_date = None\n                self.add_task(description, category, due_date)\n            elif choice == 3:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to mark as completed: "))\n                    self.mark_completed(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 4:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to delete: "))\n                    self.delete_task(index)\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 5:\n                self.view_tasks()\n                if not self.tasks:\n                    continue\n                try:\n                    index = int(input("Enter task number to edit: "))\n                    if 1 <= index <= len(self.tasks):\n                        new_description = input("Enter new task description: ").strip()\n                        if not new_description:\n                            print("Task description cannot be empty.")\n                            continue\n                        if "|" in new_description:\n                            print("Task description cannot contain the '|' character.")\n                            continue\n                        self.edit_task(index, new_description)\n                    else:\n                        print("Invalid task index.")\n                except ValueError:\n                    print("Please enter a valid number.")\n            elif choice == 6:\n                self.show_stats()\n            elif choice == 7:\n                category = input("Enter category to filter (e.g., Work, Personal): ").strip()\n                if not category:\n                    print("Category cannot be empty.")\n                    continue\n                self.view_tasks_by_category(category)\n            elif choice == 8:\n                self.save_tasks()\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please enter a number between 1 and 8.")\n\n# Run the app\nif __name__ == "__main__":\n    manager = TaskManager()\n    manager.run()`}
          </SyntaxHighlighter>
          <h4>Explanation</h4>
          <p>
            - Docstrings are added to the `Task` and `TaskManager` classes to document their purpose.<br />
            - The `save_tasks` and `load_tasks` methods now include broader exception handling to catch potential errors (e.g., file permission issues).<br />
            - The `run` method checks for the `|` character in task descriptions and categories, as it’s used as a delimiter in the file.<br />
            - All features (adding, editing, deleting, filtering, etc.) should be tested to ensure they work correctly.
          </p>
          <h4>Tips</h4>
          <p>
            Test edge cases: add a task with a description containing special characters, try loading a corrupted `tasks.txt` file, and ensure all menu options work as expected. Consider adding more features like sorting tasks by due date or adding a GUI in the future.
          </p>
        </div>
      ),
    },
  ]
};

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Build a personal portfolio website showcasing your skills, projects, and contact information. Include interactive elements like a project gallery and contact form.",
    type: "Free",
    techStack: ["Web Development"],
    steps: 7,
    difficulty: "Basic",
    views: 109,
    width: "110%",
    height: "300px",
    padding: "10px",
    tasks: 36,
    learningOutcomes: ["HTML/CSS", "JavaScript", "Responsive Design"],
    progress: 0, // Initial progress will be updated dynamically
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Create a simple To-Do List App where users can add, delete, and mark tasks as completed. The app should have a user-friendly interface and store data in a local file.",
    type: "Free",
    techStack: ["Python"],
    steps: 16,
    difficulty: "Basic",
    views: 233,
    width: "100%",
    padding: "10px",
    height: "300px",
    tasks: 96,
    learningOutcomes: ["Python syntax", "Object-Oriented Programming", "File input/output", "Basic arithmetic operations"],
    progress: 0,
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Create a simple Chatbot that responds to basic user queries. The chatbot should be able to save and load their financial data.",
    type: "Pro",
    techStack: ["Python"],
    steps: 13,
    difficulty: "Basic",
    views: 309,
    width: "130%",
    padding: "10px",
    height: "300px",
    tasks: 46,
    learningOutcomes: ["Python syntax", "NLP Basics", "File input/output"],
    progress: 0,
  },
];

export const Projects = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-12">CodeRecall</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ display: "flex", gap: "30px", padding: "20px", flexWrap: "wrap", minWidth: "60%" }}
        >
          {projectsData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="relative bg-[#1A1A2E] p-6 rounded-2xl border border-gray-700/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                style={{ width: project.width, padding: project.padding, height: project.height }}
              >
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${project.type === "Free" ? "bg-blue-600 text-white" : "bg-pink-600 text-white"
                    }`}
                >
                  {project.type.toUpperCase()}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <div className="flex gap-2 items-center">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="flex items-center gap-1 text-gray-300">
                        {tech === "Python" && (
                          <img src="https://www.python.org/static/favicon.ico" alt="Python" style={{ height: "10px", width: "10px" }} />
                        )}
                        {tech === "Web Development" && <span className="text-orange-500">🌐</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1">
                    <span className="text-gray-400">👁️</span> {project.views}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-3 text-gray-400 text-xs">
                  <span>📋 {project.steps} Steps</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${project.difficulty === "Basic" ? "bg-purple-600/20 text-purple-300" : "bg-red-600/20 text-red-300"
                      }`}
                  >
                    {project.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// export const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   // const userEmail = localStorage.getItem("userEmail");
//   const project = projectsData.find((p) => p.id === parseInt(id));
//   const steps = projectSteps[id] || [];
//   const [currentStep, setCurrentStep] = useState(null);

//   const userEmail = localStorage.getItem("userEmail");

//   useEffect(() => {
//     if (!userEmail) {
//       console.warn("User email is null. Ensure the user is logged in.");
//       return;
//     }
//     const savedSteps = localStorage.getItem(`completedSteps_${userEmail}_${id}`);
//     const savedProgress = localStorage.getItem(`progress_${userEmail}_${id}`);
  
//     setCompletedSteps(savedSteps ? JSON.parse(savedSteps) : []);
//     setProgress(savedProgress ? parseInt(savedProgress) : 0);
//   }, [userEmail, id]);
  
//   const [completedSteps, setCompletedSteps] = useState(() => {
//     const saved = localStorage.getItem(`completedSteps_${userEmail}_${id}`);
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [progress, setProgress] = useState(() => {
//     const saved = localStorage.getItem(`progress_${userEmail}_${id}`);
//     return saved ? parseInt(saved) : 0;
//   });


  
//   // Update completed steps and progress when the current step changes
//   useEffect(() => {
//     if (!userEmail) return; // Prevent running when there's no user

//     // Reset progress and steps if no saved data exists for this user
//     const savedSteps = localStorage.getItem(`completedSteps_${userEmail}_${id}`);
//     if (!savedSteps) {
//       setCompletedSteps([]);
//       localStorage.setItem(`completedSteps_${userEmail}_${id}`, JSON.stringify([]));
//     }

//     const savedProgress = localStorage.getItem(`progress_${userEmail}_${id}`);
//     if (!savedProgress) {
//       setProgress(0);
//       localStorage.setItem(`progress_${userEmail}_${id}`, "0");
//     }
//   }, [userEmail, id]);

//   console.log("Current User:", userEmail);
//   console.log("Stored Steps for User:", localStorage.getItem(`completedSteps_${userEmail}_${id}`));
//   console.log("Stored Progress for User:", localStorage.getItem(`progress_${userEmail}_${id}`));



//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   const handleStartProject = () => {
//     setCurrentStep(1);
//   };

//   const handleResumeProject = () => {
//     const nextStep = completedSteps.length + 1 > steps.length ? steps.length : completedSteps.length + 1;
//     setCurrentStep(nextStep);
//   };

//   const handleNextStep = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePreviousStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Code copied to clipboard!");
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-4xl mx-auto px-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="text-gray-400 mb-4 flex items-center gap-2 hover:text-gray-200 transition-colors duration-300"
//         >
//           ← Back
//         </button>
//         <div className="mb-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-3xl font-bold text-black">{project.title}</h2>
//             <span
//               className={`px-4 py-1 rounded-full text-sm font-medium ${project.type === "Free" ? "bg-blue-600 text-white" : "bg-pink-600 text-white"
//                 }`}
//             >
//               {project.type.toUpperCase()}
//             </span>
//           </div>
//           <p className="text-gray-300 text-sm mt-2">{project.description}</p>
//         </div>
//         <div className="flex gap-4 mb-6">
//           <span className="flex items-center gap-2 text-gray-300">
//             {project.techStack.includes("Python") && (
//               <img src="https://www.python.org/static/favicon.ico" alt="Python" style={{ height: "16px", width: "16px" }} />
//             )}
//             {project.techStack[0]}
//           </span>
//           <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300">{project.difficulty}</span>
//           <span className="flex items-center gap-2 text-gray-300">
//             <span className="text-green-400">✔</span> {project.tasks} tasks
//           </span>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold text-black mb-2">Learning Outcomes</h3>
//           <div className="flex flex-wrap gap-2">
//             {project.learningOutcomes.map((outcome, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700/50 text-gray-300"
//               >
//                 {outcome}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex gap-4">
//             <button
//               onClick={handleStartProject}
//               className="px-6 py-2 bg-purple-600 text-black rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
//             >
//               <span className="text-yellow-400">★</span> Start Project
//             </button>
//             {completedSteps.length > 0 && (
//               <button
//                 onClick={handleResumeProject}
//                 className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
//               >
//                 <span className="text-yellow-400">▶</span> Resume
//               </button>
//             )}
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-48 h-2 bg-gray-700 rounded-full">
//               <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${progress}%` }}></div>
//             </div>
//             <span className="text-gray-400 text-sm">{progress}% Complete</span>
//           </div>
//         </div>
//         {!currentStep ? (
//           <div>
//             <h3 className="text-lg font-semibold text-black mb-4">Steps</h3>
//             <div className="space-y-4">
//               {steps.map((step) => (
//                 <div
//                   key={step.id}
//                   className={`p-4 rounded-lg border border-gray-700/50 ${completedSteps.includes(step.id) ? "bg-green-900/50" : "bg-[#252542]/80"
//                     }`}
//                 >
//                   <h4 className="text-black font-medium">{step.id}. {step.title}</h4>
//                   <p className="text-gray-400 text-sm mt-1">{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Step {currentStep}: {steps[currentStep - 1].title}
//             </h3>
//             <div className="p-6 bg-[#252542]/80 rounded-lg border border-gray-700/50">
//               <div className="text-gray-300">{steps[currentStep - 1].detailedDescription}</div>
//               <button
//                 onClick={() => copyToClipboard(steps[currentStep - 1].detailedDescription.props.children.find(c => c.type === SyntaxHighlighter)?.props.children || '')}
//                 className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
//               >
//                 Copy Code
//               </button>
//               <div className="flex justify-between mt-6">
//                 <button
//                   onClick={handlePreviousStep}
//                   disabled={currentStep === 1}
//                   className={`px-4 py-2 rounded-full text-sm ${currentStep === 1
//                       ? "bg-gray-600 text-gray-400 cursor-not-allowed"
//                       : "bg-blue-600 text-black hover:bg-blue-700"
//                     } transition-colors duration-300`}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextStep}
//                   disabled={currentStep === steps.length}
//                   className={`px-4 py-2 rounded-full text-sm ${currentStep === steps.length
//                       ? "bg-gray-600 text-gray-400 cursor-not-allowed"
//                       : "bg-blue-600 text-white hover:bg-blue-700"
//                     } transition-colors duration-300`}
//                 >
//                   {currentStep === steps.length ? "Finish" : "Next"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;



export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const userEmail = localStorage.getItem("userEmail");
  const project = projectsData.find((p) => p.id === parseInt(id));
  const steps = projectSteps[id] || [];
  const [currentStep, setCurrentStep] = useState(null);

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) return; 
  
    // Fetch stored data from localStorage
    const savedSteps = JSON.parse(localStorage.getItem(`completedSteps_${userEmail}_${id}`)) || [];
    const savedProgress = parseInt(localStorage.getItem(`progress_${userEmail}_${id}`)) || 0;
  
    setCompletedSteps(savedSteps);
    setProgress(savedProgress);
  }, [userEmail, id]);
  
  
  const [completedSteps, setCompletedSteps] = useState(() => {
    const saved = localStorage.getItem(`completedSteps_${userEmail}_${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(`progress_${userEmail}_${id}`);
    return saved ? parseInt(saved) : 0;
  });


    useEffect(() => {
    if (currentStep) {
      const newCompletedSteps = [...new Set([...completedSteps, currentStep])];
      setCompletedSteps(newCompletedSteps);

      let newProgress = currentStep === steps.length ? 100 : Math.round((newCompletedSteps.length / steps.length) * 100);
      setProgress(newProgress);

      localStorage.setItem(`completedSteps_${userEmail}_${id}`, JSON.stringify(newCompletedSteps));
      localStorage.setItem(`progress_${userEmail}_${id}`, newProgress);
    }
  }, [currentStep, steps.length, id, completedSteps, userEmail]);
  // Update completed steps and progress when the current step changes
  // useEffect(() => {
  //   if (!userEmail) return; // Prevent running when there's no user

  //   // Reset progress and steps if no saved data exists for this user
  //   const savedSteps = localStorage.getItem(`completedSteps_${userEmail}_${id}`);
  //   if (!savedSteps) {
  //     setCompletedSteps([]);
  //     localStorage.setItem(`completedSteps_${userEmail}_${id}`, JSON.stringify([]));
  //   }

  //   const savedProgress = localStorage.getItem(`progress_${userEmail}_${id}`);
  //   if (!savedProgress) {
  //     setProgress(0);
  //     localStorage.setItem(`progress_${userEmail}_${id}`, "0");
  //   }
  // }, [userEmail, id]);

  console.log("Current User:", userEmail);
  console.log("Stored Steps for User:", localStorage.getItem(`completedSteps_${userEmail}_${id}`));
  console.log("Stored Progress for User:", localStorage.getItem(`progress_${userEmail}_${id}`));

  // const markStepCompleted = (stepId) => {
  //   if (!completedSteps.includes(stepId)) {
  //     const updatedSteps = [...completedSteps, stepId];
  //     setCompletedSteps(updatedSteps);
  
  //     // Update localStorage
  //     localStorage.setItem(`completedSteps_${userEmail}_${id}`, JSON.stringify(updatedSteps));
  
  //     // Calculate Progress
  //     const newProgress = Math.round((updatedSteps.length / steps.length) * 100);
  //     setProgress(newProgress);
  //     localStorage.setItem(`progress_${userEmail}_${id}`, newProgress.toString());
  //   }
  // };
  


  if (!project) {
    return <div>Project not found</div>;
  }

  const handleStartProject = () => {
    setCurrentStep(1);
  };

  const handleResumeProject = () => {
    const nextStep = completedSteps.length + 1 > steps.length ? steps.length : completedSteps.length + 1;
    setCurrentStep(nextStep);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 mb-4 flex items-center gap-2 hover:text-gray-200 transition-colors duration-300"
        >
          ← Back
        </button>
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-black">{project.title}</h2>
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${project.type === "Free" ? "bg-blue-600 text-white" : "bg-pink-600 text-white"
                }`}
            >
              {project.type.toUpperCase()}
            </span>
          </div>
          <p className="text-gray-300 text-sm mt-2">{project.description}</p>
        </div>
        <div className="flex gap-4 mb-6">
          <span className="flex items-center gap-2 text-gray-300">
            {project.techStack.includes("Python") && (
              <img src="https://www.python.org/static/favicon.ico" alt="Python" style={{ height: "16px", width: "16px" }} />
            )}
            {project.techStack[0]}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300">{project.difficulty}</span>
          <span className="flex items-center gap-2 text-gray-300">
            <span className="text-green-400">✔</span> {project.tasks} tasks
          </span>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2">Learning Outcomes</h3>
          <div className="flex flex-wrap gap-2">
            {project.learningOutcomes.map((outcome, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700/50 text-gray-300"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <button
              onClick={handleStartProject}
              className="px-6 py-2 bg-purple-600 text-black rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
            >
              <span className="text-yellow-400">★</span> Start Project
            </button>
            {completedSteps.length > 0 && (
              <button
                onClick={handleResumeProject}
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
              >
                <span className="text-yellow-400">▶</span> Resume
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-gray-400 text-sm">{progress}% Complete</span>
          </div>
        </div>
        {!currentStep ? (
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Steps</h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`p-4 rounded-lg border border-gray-700/50 ${completedSteps.includes(step.id) ? "bg-green-900/50" : "bg-[#252542]/80"
                    }`}
                >
                  <h4 className="text-black font-medium">{step.id}. {step.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Step {currentStep}: {steps[currentStep - 1].title}
            </h3>
            <div className="p-6 bg-[#252542]/80 rounded-lg border border-gray-700/50">
              <div className="text-gray-300">{steps[currentStep - 1].detailedDescription}</div>
              <button
                onClick={() => copyToClipboard(steps[currentStep - 1].detailedDescription.props.children.find(c => c.type === SyntaxHighlighter)?.props.children || '')}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                Copy Code
              </button>
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePreviousStep}
                  disabled={currentStep === 1}
                  className={`px-4 py-2 rounded-full text-sm ${currentStep === 1
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-black hover:bg-blue-700"
                    } transition-colors duration-300`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStep === steps.length}
                  className={`px-4 py-2 rounded-full text-sm ${currentStep === steps.length
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                    } transition-colors duration-300`}
                >
                  {currentStep === steps.length ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

// export const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const userEmail = localStorage.getItem("userEmail"); // Get user email from localStorage or context
//   const project = projectsData.find((p) => p.id === parseInt(id));
//   const steps = projectSteps[id] || [];
//   const [currentStep, setCurrentStep] = useState(null);
//   const [completedSteps, setCompletedSteps] = useState(() => {
//     const saved = localStorage.getItem(`completedSteps_${userEmail}_${id}`);
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [progress, setProgress] = useState(() => {
//     const saved = localStorage.getItem(`progress_${userEmail}_${id}`);
//     return saved ? parseInt(saved) : 0;
//   });

//   useEffect(() => {
//     if (currentStep) {
//       const newCompletedSteps = [...new Set([...completedSteps, currentStep])];
//       setCompletedSteps(newCompletedSteps);

//       let newProgress = currentStep === steps.length ? 100 : Math.round((newCompletedSteps.length / steps.length) * 100);
//       setProgress(newProgress);

//       localStorage.setItem(`completedSteps_${userEmail}_${id}`, JSON.stringify(newCompletedSteps));
//       localStorage.setItem(`progress_${userEmail}_${id}`, newProgress);
//     }
//   }, [currentStep, steps.length, id, completedSteps, userEmail]);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   const handleStartProject = () => {
//     setCurrentStep(1);
//   };

//   const handleResumeProject = () => {
//     const nextStep = completedSteps.length + 1 > steps.length ? steps.length : completedSteps.length + 1;
//     setCurrentStep(nextStep);
//   };

//   const handleNextStep = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePreviousStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Code copied to clipboard!");
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-4xl mx-auto px-6">
//         <button onClick={() => navigate(-1)} className="text-gray-400 mb-4 flex items-center gap-2 hover:text-gray-200 transition-colors duration-300">
//           ← Back
//         </button>
//         <div className="mb-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-3xl font-bold text-black">{project.title}</h2>
//             <span className={`px-4 py-1 rounded-full text-sm font-medium ${project.type === "Free" ? "bg-blue-600 text-white" : "bg-pink-600 text-white"}`}>
//               {project.type.toUpperCase()}
//             </span>
//           </div>
//           <p className="text-gray-300 text-sm mt-2">{project.description}</p>
//         </div>
//         <div className="flex gap-4 mb-6">
//           <span className="flex items-center gap-2 text-gray-300">
//             {project.techStack.includes("Python") && <img src="https://www.python.org/static/favicon.ico" alt="Python" style={{ height: "16px", width: "16px" }} />}
//             {project.techStack[0]}
//           </span>
//           <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300">{project.difficulty}</span>
//           <span className="flex items-center gap-2 text-gray-300">
//             <span className="text-green-400">✔</span> {project.tasks} tasks
//           </span>
//         </div>
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex gap-4">
//             <button onClick={handleStartProject} className="px-6 py-2 bg-purple-600 text-black rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
//               <span className="text-yellow-400">★</span> Start Project
//             </button>
//             {completedSteps.length > 0 && (
//               <button onClick={handleResumeProject} className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center gap-2">
//                 <span className="text-yellow-400">▶</span> Resume
//               </button>
//             )}
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-48 h-2 bg-gray-700 rounded-full">
//               <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${progress}%` }}></div>
//             </div>
//             <span className="text-gray-400 text-sm">{progress}% Complete</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;
