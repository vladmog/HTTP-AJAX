import React from 'react';
import axios from 'axios';


class Friend extends React.Component {
   

    deleteHandler = e => {
        axios.delete(`http://localhost:5000/friends/${this.props.friend.id}`)
    }

  
    

    render(){
        console.log(this.props.friend)
        return(
            <div className = "name">  
                <form>
                    <h3>{this.props.friend.name}</h3>
                    <span>email: {this.props.friend.email}</span>
                    <span>----age: {this.props.friend.age}----</span>
                    <button onClick = {this.deleteHandler}>X</button>
                    <button onClick = {() => this.props.updateHandler(this.props.friend.id)}>Update</button>
                </form>
            </div>
        )
    }
}

export default Friend;


