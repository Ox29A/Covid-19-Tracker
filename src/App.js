import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import DenseAppBar from './components/Navigation/NavBar';
import styles from './App.module.css';
import { fetchData } from './api';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import coronaImage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <React.Fragment>
                   <DenseAppBar>hi</DenseAppBar>
                </React.Fragment>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;