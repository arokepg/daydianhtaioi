import React from "react";
import NavBar from '../../components/NavBar'
import FMVB from "../../components/FMVB";

function Rewatch() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="rewatch">
                <FMVB></FMVB>
            </div>
        </div>
    )
};

export default Rewatch