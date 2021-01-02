import React, {useState, useEffect} from "react"
import BackgroundGradient from "../BackgroundGradient"
import { teams } from "./TeamsData/TeamsData.js"
import "./TeamsInfo.css"

const TeamsInfo = () => {
  
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('A-Z');

    useEffect(() => {

      setData( [...teams].sort(compare));
  }, [sortType]); 

  function compare( a, b ) {

    if(sortType === "A-Z")
    {
      if ( a.nation < b.nation ){
        return -1;
      }
       else if ( a.nation > b.nation ){
        return 1;
      }
    } 
    
     else if (sortType === "Z-A")
    {
      if ( a.nation < b.nation ){
        return 1;
      }
       else if ( a.nation > b.nation ){
        return -1;
      }
    }
    
    else if(sortType === "Euros Played")
    {
      if ( a.eurosPlayed < b.eurosPlayed ){
        return 1;
      }
       else if( a.eurosPlayed > b.eurosPlayed ){
        return -1;
      }
    } 
  }

    return (
      <BackgroundGradient>
        <div className="mainContainer">
          <h1>Teams</h1>

          <label htmlFor="select">Sort by</label>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Euros Played">Euros Played</option>
          </select>

          <div className="cards">
            {data.map(
              ({ flag, nation, eurosPlayed, bestPlace, bestPlayer }) => (
                <div className="card">
                  <div className="nationContainer">
                    <img src={flag.big} alt={flag.alt} />
                    <p>{nation}</p>
                  </div>
                  <div className="infoContainer">
                    <div className="infoTitles">
                      <p>Euros played</p>
                      <p>Best place</p>
                      <p>Best player</p>
                    </div>
                    <div className="infoContent">
                      <p>{eurosPlayed}</p>
                      <p>{bestPlace}</p>
                      <p>{bestPlayer}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </BackgroundGradient>
    )
  
}

export default TeamsInfo