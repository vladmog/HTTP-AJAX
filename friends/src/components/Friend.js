import React from 'react';



class Friend extends React.Component {
    state = {
    }

    render(){
        return(
            <div>
                <h1>{this.props.friend.name}</h1>
            </div>
        )
    }
}

export default Friend;