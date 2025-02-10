import React, { useState } from 'react';

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold " style={{ marginTop: '69px' }}>Single Page Application with React</h1>
      <p className="text-lg mb-4">
        Build a single-page application using React to manage the user interface and state.
      </p>
      {showInstructions && (
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Steps to Complete the Task</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Step 1: Set up Your React Environment</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Install Node.js from the official website if not already installed.</li>
                <li>Open your terminal and run <code>npx create-react-app my-app</code> to create a new React project.</li>
                <li>Navigate to your project directory using <code>cd my-app</code>.</li>
                <li>Start the development server with <code>npm start</code> and open <code>http://localhost:3000</code> in your browser.</li>
              </ul>
            </li>
            <li>
              <strong>Step 2: Create Components to Manage UI and State</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Create a <code>components</code> folder inside the <code>src</code> directory.</li>
                <li>Create individual component files like <code>Header.js</code>, <code>Footer.js</code>, and <code>Content.js</code>.</li>
                <li>Use JSX to define the structure of each component and export them.</li>
                <li>Import and use these components in <code>App.js</code>.</li>
              </ul>
            </li>
            <li>
              <strong>Step 3: Use React Router for Navigation</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Install React Router by running <code>npm install react-router-dom</code>.</li>
                <li>Import <code></code> from <code>react-router-dom</code>.</li>
                <li>Set up routing in <code>App.js</code> to navigate between different components.</li>
                <li>Create navigation links using the <code>Link</code> component.</li>
              </ul>
            </li>
            <li>
              <strong>Step 4: Implement State Management Using React Hooks</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Use <code>useState</code> to manage local component state.</li>
                <li>Use <code>useEffect</code> for side effects like data fetching.</li>
                <li>Lift state up to parent components when necessary.</li>
                <li>Consider using <code>useContext</code> or Redux for global state management.</li>
              </ul>
            </li>
            <li>
              <strong>Step 5: Test Your Application for Smooth User Experience</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Test navigation between different routes to ensure smooth transitions.</li>
                <li>Check the responsiveness of your application on various devices.</li>
                <li>Debug any issues using browser developer tools.</li>
                <li>Optimize performance by lazy loading components and using memoization techniques.</li>
              </ul>
            </li>
          </ul>
          <button 
            onClick={() => setShowInstructions(false)} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Hide Instructions
          </button>
        </div>
      )}

      {!showInstructions && (
        <button 
          onClick={() => setShowInstructions(true)} 
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Show Instructions
        </button>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Helpful Resources</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              React Official Documentation
            </a>
          </li>
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              React Router Documentation
            </a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Redux for State Management
            </a>
          </li>
          <li>
            <a href="https://dev.to/t/react" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              React Articles on Dev.to
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
