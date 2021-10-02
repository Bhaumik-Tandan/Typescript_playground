import React from 'react'
import "./navbar.css";
import {useHistorySet,useTeamSet} from "../hooks/navhook";
function Navbar () {

    const toggleHistory=useHistorySet();
    const toggleTeam=useTeamSet();
    return (
        <div className="nav">
            <ul><u><a onClick={toggleHistory}>01. HISTORY</a></u></ul>
            <ul><u><a onClick={toggleTeam}>02. SPAN</a></u></ul>
        </div>
    )
}

export default Navbar;
