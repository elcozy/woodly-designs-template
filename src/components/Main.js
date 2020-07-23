import React, { Component } from "react";
import Hero from "./Hero";

import Collections from "./Collections";
import Contact from "./Contact";
import Loader from "./Loader";
import Services from "./Services";
import About from "./About";
import Work from "./Works";
import Data from "../data.json";
import Works from "../works.json";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: Data,
            works: Works,
            loading: true,
        };
        // this.removePhoto = this.removePhoto.bind(this);
        console.log("constructor");
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3500);
    }
    render() {
        console.log("render");
        return (
            <div>
                <div>
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                            <>
                                <Hero />
                                <About />
                                <Services data={this.state.posts} />
                                <Collections />
                                <Work data={this.state.works} />
                                <Contact />
                            </>
                        )}
                </div>
            </div>
        );
    }
}

export default Main;
