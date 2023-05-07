import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState,useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import {CountDown, NewCounDown} from './views/CountDown';
import Blog from './views/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BlogDetail from './views/BlogDetail';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';

const App = () => {
  const [name, setName] = useState('')
  const [todo, setTodo] = useState([
    {id: 'todo1', title: 'Game', type:'hbt'},
    {id: 'todo2', title: 'Music', type:'hbt'},
    {id: 'todo3', title: 'Football', type: 'tom'}
  ])


  useEffect(() => {
   
  }, [todo])
  const handleClickStart = (event) => {

    if (!name)
    {
      return
    }
    let newTodo = {id : Math.floor((Math.random()*100000)+1), title: name, type: 'hbt'}
    setTodo([...todo, newTodo])
    setName('')
  }

  const handleOnChange = (event) =>
  {
    setName(event.target.value)
  }

  const deleteData = (id) => {
    let currentTod = [...todo]
    currentTod = currentTod.filter(item => item.id !== id)
    setTodo(currentTod)
  }

  const onTimesup = () => {
    // alert('Times up')
  }
  return (
    <Router>
      <div className="App">
          <Nav/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <CountDown onTimesup = {onTimesup}/>
              <span>---------------------</span>
              <NewCounDown/>

            </Route>
            <Route path="/todo">
                <Todo
                  todo = {todo}
                  title= {'All todo'}
                  deleteData = {deleteData}
                />

                <input type='text' style={{marginTop: '10px', marginBottom: '10px'}} className='input' onChange={event => handleOnChange(event)} value={name}/>
                <button style={{marginTop: '10px'}} type='button' onClick={(event) => handleClickStart(event)}>Click me</button>
            </Route>

            <Route path="/blog" exact>
              <Blog />
            </Route>

            <Route path="/blog/:id" exact>
              <BlogDetail />
            </Route>

            <Route path="/add-new-blog" exact>
              <AddNewBlog />
            </Route>

            <Route path="*" exact>
              <NotFound />
            </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
