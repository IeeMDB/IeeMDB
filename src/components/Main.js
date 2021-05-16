import React, { useState } from "react";
import hero from "../preview.jpg";
import { Link, useHistory } from "react-router-dom";

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
                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit" value="Join Now!" />
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;