import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
function Func_DeleteData(props) 
 {
    const [state, setState] = useState({
        booktitle:"",
        author:"",
        formate:"",
        Topic:"",
        PubYear:"", 
    });
      //let url= "http://localhost:3000/"
    const [IsLoad, setLoad]=useState(false)
    const [IsDeleted, setDelete]=useState(false)
   
    useEffect(()=>{
        console.log("useeff delete"+props.match.params.id)
        axios.post("http://localhost:3000/deletedata/"+props.match.params.id)
        .then(res => {
            console.log("data deleted "+res.data)
            setDelete(true)
            axios.get("http://localhost:3000/allfile")
            .then(res => {
                // set the state variable from the data received from the axios api
                console.log("data received "+res.data)
                res.data.map(function(currentstate, i){
                    console.log(currentstate)
                //setLoad(true);
            })      
                setState(res.data)
                console.log("data set in the state and state length"+state.length)
            })
            .catch(err => {
              console.log("error has occured")
            })
                      }) 
        .catch(err => {
          console.log("error has occured")
        })
    },[props.match.params.id])

   
    
    function ShowCovidTable() {
        return state.map(function (currentdata, i){
           
            return <Coviddata cdata={currentdata} key={i} />;
        })
    }
    useEffect(() => {
        if (state.length>0)
        setLoad(true)
        
     }, [state]);
     
     

     return (
        <div>
            <h3>Deleted Data </h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
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
                     {IsLoad ? ShowCovidTable() : console.log("No table data")}
                </tbody>
            </table>
        </div>
    )
    }

export default Func_DeleteData;