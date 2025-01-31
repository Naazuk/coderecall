import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import FunctionComponent from './FC';
// import ClassComponent from './CC';

// function App() {
//   return (
//     <div>
//       <h1>React Props and State Example</h1>
      
//       {/* Using Function Component */}
//       <FunctionComponent
//         name="John Doe"
//         image="https://via.placeholder.com/100"
//       />

//       {/* Using Class Component */}
//       <ClassComponent
//         name="Jane Doe"
//         image="https://via.placeholder.com/100"
//       />
//     </div>
//   );
// }

// export default App;

// reportWebVitals();