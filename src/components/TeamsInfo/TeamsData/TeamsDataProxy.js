import {teams} from "./TeamsData";

export const TeamsDataProxy  = () => {
    let fullTeamsArray=[];

    for(var i=0; i< teams.length; i++)
    {
        fullTeamsArray = fullTeamsArray.concat(teams[i].groupTeams); 
    }

    return fullTeamsArray;
}