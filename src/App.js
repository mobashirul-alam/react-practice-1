import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Article></Article>
    </div>
  );
}

function Article() {

  const blog = {
    backgroundColor: 'aquamarine',
    border: '3px solid royalblue',
    margin: '25px',
    padding: '15px',
    textAlign: 'left'
  }

  return (
    <div>
      <article style={blog}>
        <h2>React 6 core concepts</h2>
        <div>
          <p>REACT is a library for building user interfaces.It has 6 core concepts that every web developer should know. These are as follows:</p>
          <ul>
            <li>JSX</li>
            <li>Components</li>
            <li>Props</li>
            <li>State</li>
            <li>Events (Event listener)</li>
            <li>Effect (Load external data)</li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default App;
