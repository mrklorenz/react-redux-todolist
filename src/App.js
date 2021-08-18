import './App.css';
import TodoList from './features/todos/components/TodoList';
import { BrowserRouter , Route, Switch, Link} from "react-router-dom";
import DoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/todos/components/NotFoundPage';
import { Breadcrumb } from 'antd';
import { HomeOutlined, DatabaseOutlined, FileDoneOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined /> HomePage
          </Breadcrumb.Item>
          <BrowserRouter>
            <Link to="/"><Breadcrumb.Item><DatabaseOutlined/> To do List Page</Breadcrumb.Item></Link>
            <Link to="/done"><Breadcrumb.Item><FileDoneOutlined/> Done List Page</Breadcrumb.Item></Link>
            <Switch>
              <Route exact path = "/" component={TodoList}></Route>
              <Route exact path = "/done" component={DoneList}></Route>
              <Route path = "*" component={NotFoundPage}></Route>
            </Switch>
          </BrowserRouter>
        </Breadcrumb>
    </div>
  );
}

export default App;
