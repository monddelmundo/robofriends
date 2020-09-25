import React, { useEffect, useState, useRef } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "../containers/App.css";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

function App() {
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [bots, setBots] = useState([]);

  //Constructor
  useConstructor(() => {
    console.log("constructor");
  });

  //componentDidMount
  useEffect(() => {
    componentDidMount();
  }, []); //notice the empty array here

  async function componentDidMount() {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    setBots(users);
    setFilteredRobots(users);

    console.log("componentDidMount");
  }

  function onSearchChange(e) {
    if (e) {
      setFilteredRobots(
        bots.filter((robot) =>
          robot.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  }

  console.log("render");

  //tc = text center
  return !bots.length ? (
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
