import React, { Component } from 'react';
import { LIST_API } from '../Config/coms';
import ListModal from './ListModal';
import '../Styles/List.css';

class Listitem extends Component {

    constructor(props) {
      //When implementing the constructor function inside a React component, super()
      //is a requirement.
        super(props);
         this.state = {
             id: this.props.item._id,
             firstName: this.props.item.firstName,
             lastName: this.props.item.lastName,
             email: this.props.item.email,
             phone: this.props.item.phone,
             address: this.props.item.address,
             message: this.props.item.message
         }
    }

    // updateData = (e) => {
    //     e.prevent.default();
    //     fetch(`${LIST_API}/List/${this.props.id}`, {
    //       method: "PUT",
    //       body: JSON.stringify(),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })  
    //   }

      deleteData = () => { 
          fetch(`${LIST_API}/List/${this.props.item._id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(this.props.reload())
      }
      // refresh() {
      //     document.location.reload(true);
      // }
    

    render() {
        return(
            <div id='Listitem'>
                <div className='First' >{this.props.item.firstName}  </div> 
                <div className='Last'>{this.props.item.lastName}</div>
                <div className='Email'>{this.props.item.email}</div>
                <div className='Phone'>{this.props.item.phone}</div>
                <div className='Address'>{this.props.item.address}</div>
                <div className='Message'>{this.props.item.message}</div>
                <div  className='buttons'>
                  {/* let's investigate why we can't 
                pass props into the item, but work when we pass state */}
                <div><ListModal reload={this.props.reload} item={this.state}/></div>
                <button className='deleteBut' onClick={this.deleteData}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Listitem;