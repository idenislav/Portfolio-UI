import React from "react";
import ReactModal from "react-modal";
import {LIST_API} from '../Config/coms';


const customStyles = {
  content: { 
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Modal.setAppElement("#root");
// Rather that using deconstruction when importing React
// i access the Component like i access the property of an object.
class ListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      id: this.props.item.id,
      firstName: this.props.item.firstName,
      lastName: this.props.item.lastName,
      email: this.props.item.email,
      phone: this.props.item.phone,
      address: this.props.item.address,
      message: this.props.item.message
    };

    // this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
}

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };


//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = "#f00";
//   }

  handleClick = (e) => {
    e.preventDefault();
    const body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      message: this.state.message
    };
    fetch(`${LIST_API}/List/${this.state.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(body)
    })
    .then(() => this.toggleModal()) 
    .then(() => this.props.reload())
  }

  render() {  
    return (
      <div>
        <button className='deleteBut' onClick={this.toggleModal}>Update</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
        //   onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel={this.props.item.firstName}
        >
          <div>
            <input name='firstName' value={this.state.firstName} placeholder='First name' onChange={this.handleChange} />
            <input name='lastName' value={this.state.lastName} placeholder='Last name' onChange={this.handleChange} />
            <input name='email' value={this.state.email} placeholder='email' onChange={this.handleChange} />
            <input name='phone' value={this.state.phone} placeholder='phone' onChange={this.handleChange} />
            <input name='address' value={this.state.address} placeholder='address' onChange={this.handleChange} />
            <textarea className='message' name='message' value={this.state.message} placeholder='Comments...' onChange={this.handleChange} />

            <button onClick={this.toggleModal}>Close</button>
            <button onClick={this.handleClick}>Update</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default ListModal;