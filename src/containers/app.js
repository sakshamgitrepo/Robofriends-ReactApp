import React, { useState, useEffect } from "react";
import Cardarray from "../components/cardarray";
import Searchbox from "../components/searchbox";
import Scroll from "../components/scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  useEffect(() => {
    const filteredrobos = robots.filter((robos) => {
      return robos.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    setFiltered(filteredrobos);
  }, [robots, searchfield]);

 
  return !robots.length ? (
    <h1 className="tc f1">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <Searchbox searchange={(event) => setSearchfield(event.target.value)} />
      <Scroll>
        <Cardarray robots={filtered} />
      </Scroll>
    </div>
  );
}

export default App;
