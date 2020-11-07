import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddEmp from './components/pages/AddEmp'
import EditEmployee from "./components/pages/EditEmployee";
import EmployeeDetail from "./components/pages/EmployeeDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/employees/add' component={AddEmp}/>
          <Route exact path='/employees/edit/:id' component={EditEmployee}/>
          <Route exact path='/employees/:id' component={EmployeeDetail}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
