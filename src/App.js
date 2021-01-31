
import './App.css';
import Container from './Components/Options/Container';
import Search from './Components/RecipeSearch/Search';
import ContentContext from "./Components/ContentContext"
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    cuisine: "",
    course: "",
    allergy: "",
    diet: ""
  })
  return (
    <div className="App">
      <ContentContext.Provider value = {{ data, setData }}>
      <Container />
      <Search />
      </ContentContext.Provider>
     
    </div>
  );
}

export default App;
