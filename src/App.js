import React  from 'react';
import './App.css';
import CardList from './components/list-card/card-list.component';
import SearchBox from './components/search-box/search-box.component';

/* class App extends Component {
  constructor(){
    super();

    console.log("inside constructor")
    this.state = {
      monsters : [],
      searchedResult : ""
    }


  }
  
  componentDidMount() {
    console.log("component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }


  handleSearch =(event)=>{  
    this.setState({searchedResult : (event.target.value)})
   
  }

  render(){
    console.log("inside render")

    const {searchedResult,monsters} =this.state;

    

    const filteredMonster = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchedResult.toLowerCase())
    })

    return (
      <div className="App">
      <h1 className='app-title'>Find My Monster</h1>
   
      <SearchBox className="monster-search" onChangehandler={this.handleSearch} placeholder="search monster"></SearchBox>
      <CardList filteredMonster={filteredMonster}></CardList>
      
      </div>
    );
  
    }
    
} */

const App = () =>{

  const [monsters,setMonsters] = React.useState([]);
  const [searchedResult ,setSearchedResult] =React.useState("");

  let handleSearch =(event)=>{  
    setSearchedResult(event.target.value)
    //this.setState({searchedResult : (event.target.value)})
   
  }

  React.useEffect( ()=>{
    console.log("component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users)
      });
  },[searchedResult] )



    

    const filteredMonster = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchedResult.toLowerCase())
    })

    return (
      <div className="App">
      <h1 className='app-title'>Find My Monster</h1>
   
      <SearchBox className="monster-search" onChangehandler={handleSearch} placeholder="search monster"></SearchBox>
      <CardList filteredMonster={filteredMonster}></CardList>
      
      </div>
    );
  
    
}

export default App;
