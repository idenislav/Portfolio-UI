import React, { Component } from 'react';
import {LIST_API} from '../Config/coms';
import Listitem from '../Components/Listitem';
import '../Styles/List.css';

class List extends Component {

    state = {
        info: '',
    }

    fetchData = () => {
        fetch(`${LIST_API}/List`) 
        .then(response => {return response.json()})
        .then(data => data.map(data => <Listitem reload={this.fetchData} item = {data}/>))
        .then(info => {
            this.setState({info: info})
        })
    }

    componentDidMount() {
    this.fetchData()
    }

 render() {
     console.log("info:")
     let test = this.state.info;
     console.log(test.firstName);
     return(
         
         <div>         
             <h1>Signed list</h1>
             <div>{this.state.info}</div> 
         </div>
         
     )
 }
}
export default List;