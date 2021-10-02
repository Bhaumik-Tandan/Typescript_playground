import React from "react";
import Home from "./home";
import Navbar from "./navbar";
import {useHistory,useTeam} from "../hooks/navhook";
import HistoryCom from './history';
import TeamCom from './team';
import "./los_angles.css";

function Los_angels() {
    const history=useHistory();
    const team=useTeam();
    return (
        <div>        
            <Navbar/>
            {(history && team)?<Home/>:""}
            {!history?<HistoryCom/>:""}
            {!team?<TeamCom/>:""}
        </div>
    )
}

export default Los_angels;
