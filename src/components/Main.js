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
                    <br />Find ratings ,reviews and do yours . </p>
                    <a href='https://ieeemdb.netlify.app/' target="_blank" >Web Page</a>
                </div>

            </header>


            <main>
                <section className="services">
                    <h2>About Web App</h2>

                    <div className="service-container">
                        <div className="services-card service-one"></div>
                        <div className="service-description">

                            <h3>SEO Friendly Apps.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>

                        </div>
                    </div>



                    <div className="service-container">

                        <div className="services-card service-two"></div>
                        <div className="service-description">
                            <h3>Clear &amp; Optimized Code.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                        </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Support 24 hours.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                        </div>

                    </div>
                </section>

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
                            Visit our github pages to get to know us
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