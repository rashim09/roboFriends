import React from 'react';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
// import { robots } from './robots' no need static json file
import 'tachyons'

class App extends React.Component {
  state = {
    robots: [],
    searchField: ''
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }
  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robo => {
      return robo.name.toLocaleLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ?
      <h1>Loading...</h1>
      :
      (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary><CardList robots={filteredRobots} /></ErrorBoundary>
          </Scroll>

        </div>
      );
  }
}


export default App;
