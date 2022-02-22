import NavBar from './components/NavBar/NavBar'
import Todo from './pages/Todo/Todo'
import { useState } from 'react'
import Auth from './pages/Auth/Auth'

import './app.scss'

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <div className="app">
      <NavBar />
      {
        isAuth
          ? <Todo />
          : <Auth />
      }
    </div>
  );
}

export default App;
