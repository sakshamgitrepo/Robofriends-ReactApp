import React, { Component } from 'react';
import Cardarray from '../components/cardarray';
import Searchbox from '../components/searchbox';
import Scroll from '../components/scroll'
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots : [],
            searchfield : ''
        }
    }
    onsearchange=(event)=>{
        this.setState({
            searchfield: event.target.value
        })
   
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json()
        })
        .then(users=>{
            this.setState({robots : users})
        })
    }

    render(){
        const{robots,searchfield}=this.state
        const filteredrobos=robots.filter(robos=>{
            return robos.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (!robots.length)?
             <h1 className='tc f1'>Loading</h1>
        :(
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchange = {this.onsearchange} />
                <Scroll>
                <Cardarray robots={filteredrobos}/>
                </Scroll>
                </div>
            ) 
        
 
}
}

export default App