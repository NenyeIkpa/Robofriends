import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: [],
            searchField: ''
        }
    }
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robot : users})})
}

onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
}

    render() {
        const {robot, searchField} = this.state
        const filteredRobots= robot.filter(eachRobot => {
            return eachRobot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        // if(!robot.length) {  // or robot.length === 0)
        //    return <h1>Loading</h1>
        // }else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange}/>
        //             <Scroll>
        //             <CardList robot={filteredRobots}/>
        //             </Scroll>
        //         </div>
        //     );  
        // }
       
          return  !robot.length ?
             <h1>Loading</h1> :
             (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                    <CardList robot={filteredRobots}/>
                    </ErrorBoundary>
                    </Scroll>
                </div>
            );  
       
    }
 
}
export default App;