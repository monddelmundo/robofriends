import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);

  function onSearchChange(e) {
    if (e) {
      setSearchField(e.target.value);

      setFilteredRobots(
        robots.filter((robots) =>
          robots.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  }

  //tc = text center
  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}
