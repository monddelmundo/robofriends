import React, { useEffect, useState, useRef } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

function App() {
  //const [searchField, setSearchField] = useState("");
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [bots, setBots] = useState([]);

  //Constructor
  useConstructor(() => {
    console.log("constructor");
  });

  //componentDidMount
  useEffect(() => {
    async function fetchData(setFilteredRobots) {
      const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      return setFilteredRobots(users);
    }
    setBots(robots);

    fetchData(setFilteredRobots);
    console.log("componentDidMount");
  }, []); //notice the empty array here

  function onSearchChange(e) {
    if (e) {
      //setSearchField(e.target.value);

      setFilteredRobots(
        robots.filter((robots) =>
          robots.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  }

  console.log("render");

  //tc = text center
  return bots.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
