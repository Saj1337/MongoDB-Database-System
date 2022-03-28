import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./components/AddData.js"
import ShowDataList from "./components/Showdata1.js"
import Book_UpDateForm from "./components/DataUpdate.js"
import Func_DeleteData from "./components/DeleteData.js"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <center><h2>React Covid-19 System</h2> </center>
           <br/>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-success"> 
            <Link to="/" className="navbar-brand"><h4>Add Data</h4></Link>
            <Link to="/Showdata1" className="navbar-brand"><h4>Display  Data</h4> </Link>

                </nav>

            <br />
            <Route path="/" exact component={Book_Form} />
            <Route path="/edit/:id" component={Book_UpDateForm} />
            <Route path="/Delete/:id" component={Func_DeleteData} />
            <Route path="/Showdata1" component={ShowDataList} />


        </div>
      </Router>
    );
  }
}

export default App;