import React from 'react';
import axios from 'axios';


class Friend extends React.Component {
   


  
    

    render(){
        let gender = this.props.friend.gender
        let genderCall = "they've"
        if(gender === "f" || gender === "female"){
            genderCall = "she's"
        } else if (gender === "m" || gender === "male") {
            genderCall = "he's"
        } else {
            genderCall = "they've"
        }
        return(
            <div className = "friend">  
                
                <h3>
                    {this.props.friend.name}'s email is {this.props.friend.email} and {genderCall} been alive for {this.props.friend.age} years 
                </h3> 
                
                <button onClick = {(e) => this.props.deleteHandler(e, this.props.friend.id)}>X</button>
                <button onClick = {(e) => this.props.updateHandler(e, this.props.friend.id)}>Update</button>
            
            </div>
        )
    }
}

export default Friend;


