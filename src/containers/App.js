import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "../containers/App.css";
import { setSearchField, requestRobots } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";

function App(props) {
  const [filteredRobots, setFilteredRobots] = useState([]);
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);
  const error = useSelector((state) => state.requestRobots.error);

  const dispatch = useDispatch();

  //componentDidMount
  useEffect(() => {
    componentDidMount();
  }, [robots.length]); //notice the empty array here

  async function componentDidMount() {
    if (robots.length === 0) onRequestRobots();
    if (robots.length > 0) setFilteredRobots(robots);
  }

  useEffect(() => {
    if (robots.length) {
      setFilteredRobots(
        robots.filter((robot) =>
          robot.name.toLowerCase().includes(searchField.toLowerCase())
        )
      );
    }
  }, [searchField.length]);

  const onRequestRobots = () => {
    requestRobots(dispatch);
  };

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  //tc = text center
  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
