import React from "react";
import { useParams, useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
const Thanks = () => {

    const history = useHistory();
    const { name } = useParams();

    console.log(history);


    return (
        <React.Fragment>
            <div className="thanks">
                <a href='https://github.com/IeeMDB/IMDb-clone' target="_blank">
                    <GitHubIcon style={{ fontSize: 100 }} />
                </a>
                <p> Find our project on GitHub!!</p>
                <hr />

            </div>
        </React.Fragment>
    )

}


export default Thanks;