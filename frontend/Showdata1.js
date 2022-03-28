import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Coviddata = props => (
    <tr>
        <td>{props.cdata.date}</td>
        <td>{props.cdata.county}</td>
        <td>{props.cdata.state}</td>
        <td>{props.cdata.cases}</td>
        <td>{props.cdata.deaths}</td>
        <td>
            <Link to={"/edit/"+props.cdata._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/" + props.cdata._id}>Delete</Link>
        </td>
    </tr>
)
export default class ShowDataList extends Component {

    constructor(props) {
        super(props); 
        limit: 20,
        this.state = {dcases: []}; // name of the state variable
    }
    componentDidMount() {
        axios.get('http://localhost:3000/alldata/')
            .then(response => {
                console.log("response.data",response.data)
                this.setState({ dcases: response.data });  // set state variable with received data
                console.log("Received data",this.state.todos)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    Show_Data() {
        return this.state.dcases.map(function(currentdata, i){
            console.log("currentodo object-->"+currentdata +"  i is "+i)
            return <Coviddata cdata={currentdata} key={i} />;
        })
    }

    //display data
    render() {
        return (
            <div>
                <h3>Covid Data List</h3>
                <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>County</th>
                            <th>States</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.Show_Data()}
                    </tbody>
                </table>
            </div>


        )
    }
}