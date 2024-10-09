import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Item from "@material-ui/core/Grid";
import Config from "../config";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import DrinkCard from "../Components/Card";

const str = window.location.href;
var path = require("path");
var base = path.basename(str);

class CommonContainer extends Component {
    state = {
        data: [],
        url:
            Config.API_HOST +
            Config.API_ENDPOINT +
            Config.API_KEY +
            `/${base}.php`,
    };

    componentDidMount() {
        fetch(this.state.url)
            .then((response) => response.json())
            .then((data) => this.setState({ data }));
    }

    render() {
        const { data } = this.state;
        const drinks = data.drinks;

        if (drinks === "None Found") {
            return (
                <div className="Recipes">
                    <Banner />
                    <div className="Recipes-loop container">
                        <div className="row justify-content-md-center">
                            <div className="col-12">
                                <h2>No Drinks Found.</h2>
                                <a className="btn" href="/filters">
                                    Seach Again
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className="Recipes">
                    <Banner />
                    <div className="Recipes-loop container">
                        <div className="row justify-content-md-center">
                            <Grid container spacing={6}>
                                {drinks &&
                                    drinks.map((drink, index) => {
                                        return (
                                            <Grid
                                                item
                                                xs={6}
                                                md={4}
                                                key={index}
                                            >
                                                <Item>
                                                    <DrinkCard drink={drink} />
                                                </Item>
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }
    }
}

export default CommonContainer;
