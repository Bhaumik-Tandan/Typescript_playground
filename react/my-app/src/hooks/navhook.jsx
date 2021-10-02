import React, { ReactElement ,useState,useContext} from 'react'



const History=React.createContext();
const Team=React.createContext();

export function useHistory()
{
    return useContext(History);
}

export function useTeam()
{
    return  useContext(Team);
}

const HistorySet=React.createContext();
const TeamSet=React.createContext();


export function useHistorySet() {
    return useContext(HistorySet);   
}

export function useTeamSet()
{
    return useContext(TeamSet);
}

function Navhook({children}){
    const [history, setHistory] = useState(true);
    const [team, setTeam] = useState(true);

    function toggleHistory()
    {
        setHistory(0);  
        setTeam(1);      
    }

    function toggleTeam()
    {
        setTeam(0);
        setHistory(1);  
    }

    return (
        <TeamSet.Provider value={toggleTeam}>
        <Team.Provider value={team} >
        <HistorySet.Provider value={toggleHistory} >
        <History.Provider value={history} >
            {children}
        </History.Provider>
        </HistorySet.Provider>
        </Team.Provider>
        </TeamSet.Provider>
    )
}

export default Navhook;
