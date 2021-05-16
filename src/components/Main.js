import React, { useState } from "react";
import hero from "../preview.jpg";
import { Link, useHistory } from "react-router-dom";
import "../css/style.css"
import "../css/responsive.css"

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) => {
        e.preventDefault();
        if (joined !== "") {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date);
        }

    }



    return (
        <React.Fragment>
            <header>
                <img className="imgd" src={hero} />
                <div>
                    <h1>Welcome  <br /> to IeeMDB.</h1>
                    <p>Welcome to IeeMDB, a web application where you can find everything about your favorite movie and actor.
                    <br />You can rate any movie and create your watchlist. </p>
                    <a href='https://ieeemdb.netlify.app/' target="_blank" >Web Page</a>
                </div>

            </header>


            <main>
                <section className="services">
                    <h2>About Web App</h2>

                    <div className="service-container">
                        <div className="services-card service-one"></div>
                        <div className="service-description">

                            <h3>Movies.</h3>
                            <div>Search for your favourite movies of all categories and languages or see top rated films, new and upcoming releases. Add movies to your watchlist and rate them.</div>

                        </div>
                    </div>



                    <div className="service-container">

                        <div className="services-card service-two"></div>
                        <div className="service-description">
                            <h3>Actors.</h3>
                            <div>Search details about your favourite popular actors through their bio and the movies they've played.</div>
                        </div>
                    </div>

                </section>

                <div id="tech" class="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>Tech Stack</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="about-box">


                                    <p>Here are some of the tools,coding languages and programs
                            <br />used to build our application.
                        </p>
                                    <figure >
                                        <br />
                                        <br />
                                        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png" />
                                        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/dotnet/dotnet.png" />
                                        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                                        <img alt="firebase" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
                                        <img alt="mysql" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
                                        <img alt="redux" style={{ height: "60px", width: "150px" }} src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <section>
                    <div id="team" class="testimonial">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="titlepage">
                                        <h2>Our Team</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <a href="https://github.com/yoBoyio" target="_blank">
                                        <img src="https://avatars.githubusercontent.com/yoBoyio?v=4" /></a>
                                </div>
                                <div class="column">
                                    <a href="https://github.com/kwstaspexli" target="_blank">
                                        <img src="https://avatars.githubusercontent.com/kwstaspexli?v=4" /></a>
                                </div>
                                <div class="column">
                                    <a href="https://github.com/dinosts" target="_blank">
                                        <img src="https://avatars.githubusercontent.com/dinosts?v=4" /></a>
                                </div>
                                <div class="column">
                                    <a href="https://github.com/michaeltheo" target="_blank">
                                        <img src="https://avatars.githubusercontent.com/michaeltheo?v=4" /></a>
                                </div>
                                <div class="column">
                                    <a href="https://github.com/Dpontika" target="_blank">
                                        <img src="https://avatars.githubusercontent.com/Dpontika?v=4" /></a>
                                </div>
                            </div>

                            <div class="clients_box">
                                <h3>Who we are</h3>

                                <p>We are students of computer science at <b><a href="https://www.iee.ihu.gr/">IHU SKG</a></b>
                                    <br /> Visit our github pages to learn more about us
                        </p>

                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;