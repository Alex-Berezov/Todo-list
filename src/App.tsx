import NavBar from './components/NavBar/NavBar'
import './app.scss'
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Todo />
    </div>
  );
}

export default App;
