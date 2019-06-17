import React from 'react';
import axios from 'axios';
import Friend from './Friend.js'



class Friends extends React.Component {
    state = {
        friends: [],
        name: "",
        email: "",
        age: "",
        gender: ""
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

    
    deleteHandler = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(res => this.setState({friends: res.data}))
            .catch ()
    }


    submitHandler = e => {
        e.preventDefault();
        let data = {
            id: this.state.friends.length + 1,
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            gender: this.state.gender
        }
        let url = 'http://localhost:5000/friends'
        axios.post(url, data)
            .then(res => this.setState({friends: res.data}))
            .catch ()
        this.setState({
            name: "",
            email: "",
            age: "",
            gender: ""
        })
    }


    updateHandler = (e, id) => { 
        let newName = this.state.name;
        if (newName === ""){
            newName = this.state.friends[id - 1].name
        }

        let newEmail = this.state.email;
        if (newEmail === ""){
            newEmail = this.state.friends[id - 1].email
        }

        let newAge = this.state.age;
        if (newAge === ""){
            newAge = this.state.friends[id - 1].age
        }

        let newGender = this.state.gender;
        if (newGender === ""){
            newGender = this.state.friends[id - 1].gender
        }
        

        e.preventDefault();
        let data = {
            name: newName,
            email: newEmail,
            age: newAge,
            gender: newGender
        } 
        let url = `http://localhost:5000/friends/${id}`
        axios.put(url, data) 
            .then(res => this.setState({friends: res.data}))
            .catch ()
        this.setState({
            name: "",
            email: "",
            age: "",
            gender: ""
        })
    }

    render(){
        return(
            <div>
                <div className = "friendsList">
                    {this.state.friends.map(friend => {
                        return(
                            <Friend 
                                key = {Math.random()} 
                                friend = {friend}
                                updateHandler = {this.updateHandler}
                                deleteHandler = {this.deleteHandler}
                                />
                        )
                    })}
                </div>
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
                    <input
                        onChange = {this.changeHandler} 
                        name = "gender" value = {this.state.gender} 
                        placeholder = "gender" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Friends;