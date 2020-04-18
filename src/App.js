import React from "react";

import styles from "./App.module.css";
import { fetchData } from "./api";

import { CssBaseline } from "@material-ui/core";
import Appbar from "./components/Appbar.js";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <React.Fragment>
          <CssBaseline />
          <Appbar />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
