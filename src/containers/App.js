import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "../containers/App.css";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";
import Header from "../components/Header";

function App(props) {
  const [filteredRobots, setFilteredRobots] = useState([]);
  const {
    searchField,
    onSearchChange,
    robots,
    onRequestRobots,
    isPending,
  } = props;

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

function mapStateToProps(state) {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
