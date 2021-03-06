import './App.css';
import TodoList from './features/todos/components/TodoList';
import { BrowserRouter , Route, Switch, Link} from "react-router-dom";
import DoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/todos/components/NotFoundPage';
import { Breadcrumb } from 'antd';
import { HomeOutlined, DatabaseOutlined, FileDoneOutlined } from '@ant-design/icons';
import HomePage from './features/todos/components/HomePage';
import {useEffect} from "react";
import { getToDos } from './features/api/todosapi';
import { useDispatch } from 'react-redux';
import { AddToDoList } from './features/todos/reducers/todosSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getToDos().then((response) => {
        dispatch(AddToDoList(response.data));
    })
})

  return (
    <div className="App">
      <br></br>
      <BrowserRouter>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/"><HomeOutlined /> HomePage</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/todo"><DatabaseOutlined/> To do List Page</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/done"><FileDoneOutlined/> Done List Page</Link></Breadcrumb.Item>
      </Breadcrumb>
        <Switch>
          <Route exact path = "/" component={HomePage}></Route>
          <Route exact path = "/todo" component={TodoList}></Route>
          <Route exact path = "/done" component={DoneList}></Route>
          <Route path = "*" component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
