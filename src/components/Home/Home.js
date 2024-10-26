import React, { Fragment } from "react";
import Header from "./Header";
import header from "../../assets/header.png"
import "./Home.css"
const Home = () => {
    return (
        <Fragment>
            <Header />
            <section class='numbers'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-3'>
                            <h2>1287+</h2>
                            <h6>SAVING</h6>

                        </div>
                        <div class='col-md-3'>
                            <h2>4587+</h2>
                            <h6>PHOTOS</h6>

                        </div>
                        <div class='col-md-3'>
                            <h2>1485+</h2>
                            <h6>ROCKETS</h6>

                        </div>
                        <div class='col-md-3'>
                            <h2>1287+</h2>
                            <h6>GLOBES</h6>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={header} title="pride image" />


                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button ><a href="#" />learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>


    );
}

export default Home;