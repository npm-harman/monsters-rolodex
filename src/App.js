import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super(); // super provides us access to state property in the class

    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters: monsters }))
      .catch(error => console.log('Error!'));
  }
  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="monsters" handleChange={e => this.setState({ search: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
