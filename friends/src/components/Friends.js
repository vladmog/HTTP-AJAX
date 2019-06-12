import React from 'react';
import axios from 'axios';
import Friend from './Friend.js'



class Friends extends React.Component {
    state = {
        friends: [],
        name: "",
        email: "",
        age: ""
    }

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(err => {})
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler = e => {
        let data = {
            id: this.state.friends.length + 1,
            name: this.state.name,
            email: this.state.email,
            age: this.state.age
        }
        let url = 'http://localhost:5000/friends'
        axios.post(url, data)
            .then()
            .catch ()
        this.setState({
            name: "",
            email: "",
            age: ""
        })
    }

 

    handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }



    render(){
        return(
            <div>
                {this.state.friends.map(friend => {
                    return(
                        <Friend friend = {friend} friends = {this.state.friends} />
                        
                    )
                })}
                <form onSubmit = {this.submitHandler}>
                    <input 
                        onChange = {this.changeHandler} 
                        name = "name" value = {this.state.name} 
                        placeholder = "name" />
                    <input 
                        onChange = {this.changeHandler} 
                        name = "email" value = {this.state.email} 
                        placeholder = "email" />
                    <input 
                        onChange = {this.changeHandler} 
                        name = "age" value = {this.state.age} 
                        placeholder = "age" />
                    <button onClick = {this.submitHandler} >Submit</button>
                </form>
            </div>
        )
    }
}

export default Friends;