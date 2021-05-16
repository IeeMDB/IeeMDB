import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/style.css"
import "../css/responsive.css"
const Contact = () => {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }




    return (
        <React.Fragment>
            <button className="back" onClick={goBack}> &larr; Go Back</button>

            {/* <!-- team --> */}
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
            {/* <!-- end team --> */}
        </React.Fragment>
    )

}


export default Contact;