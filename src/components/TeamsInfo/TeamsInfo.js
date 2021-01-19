import React, { useState, useEffect } from "react"
import BackgroundGradient from "../BackgroundGradient"
import { TeamsDataProxy } from "./TeamsData/TeamsDataProxy"
import "./TeamsInfo.css"

const TeamsInfo = () => {
  const [data, setData] = useState([])
  const [sortType, setSortType] = useState("A-Z")
  const [search, setSearch] = useState("")

  useEffect(() => {
    let results = []
    let filterData = []
    filterData = TeamsDataProxy()
    if (search.length < 1) {
      setData([...filterData].sort(compare))
    } else if (search.length > 0) {
      for (let i = 0; i < filterData.length; i++) {
        if (
          filterData[i].nation.substr(0, search.length).toLowerCase() ===
          search.toLowerCase()
        ) {
          results.push(filterData[i])
        }
      }
      setData(results.sort(compare))
    }
  }, [sortType, search])

  function compare(a, b) {
    if (sortType === "A-Z") {
      if (a.nation < b.nation) {
        return -1
      } else if (a.nation > b.nation) {
        return 1
      }
    } else if (sortType === "Z-A") {
      if (a.nation < b.nation) {
        return 1
      } else if (a.nation > b.nation) {
        return -1
      }
    } else if (sortType === "Euros Played") {
      if (a.eurosPlayed < b.eurosPlayed) {
        return 1
      } else if (a.eurosPlayed > b.eurosPlayed) {
        return -1
      }
    }
  }

  const handleChange = event => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <BackgroundGradient>
      <div className="mainContainer">
        <h1>Teams</h1>

        <div className="dropdownBox">
          <label htmlFor="select">Sort by</label>
          <div className="selectedDropDown">
            <select onChange={e => setSortType(e.target.value)}>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Euros Played">Euros Played</option>
            </select>
          </div>
        </div>

        <div className="searchContainer">
          <label htmlFor="input">Search teams:</label>
          <div className="inputField">
            <input
              type="text"
              placeholder="Teams"
              value={search}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        {data.length != 0 ? (
          <div
            className={
              data.length <= 1 ? "cards activeOne" : "cards activeMore"
            }
          >
            {data.map(
              ({ flag, nation, eurosPlayed, bestPlace, bestPlayer }, index) => (
                <div className="card" key={index}>
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
        ) : (
          <div className="noSearchResult">
            There are no teams for this search input.
          </div>
        )}
      </div>
    </BackgroundGradient>
  )
}

export default TeamsInfo
