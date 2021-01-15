import React from "react"
import BackgroundGradient from "../BackgroundGradient"
import { teams } from "../TeamsInfo/TeamsData/TeamsData"
import "./ScheduleInfo.css"
//Material UI
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const ScheduleInfo = () => {
  {
    return (
      <BackgroundGradient>
        <div className="scheduleContainer">
          <h1>Matches</h1>
          <div className="allMatchesContainer">
            <div className="match">
              <div className="matchInfo">
                <span className="matchGroupSpan">
                  <p>MATCH #1</p>
                  <p className="dash">-</p>
                  <p>Group A</p>
                </span>
                <p>Friday, 12 June 2021</p>
                <p>San Siro, Milano</p>
              </div>
              <div className="matchTime">
                {teams[0].groupTeams
                  .slice(0, 1)
                  .map(({ flag, nationNick }, index) => (
                    <div className="borderBoxFirst" key={index}>
                      <div className="nation box">
                        <p>{nationNick}</p>
                        <img src={flag.small} alt={flag.alt} />
                      </div>
                    </div>
                  ))}
                <span>21 : 00</span>
                {teams[0].groupTeams
                  .slice(1, 2)
                  .map(({ flag, nationNick }, index) => (
                    <div className="borderBoxSecond" key={index}>
                      <div className="nation box">
                        <img src={flag.small} alt={flag.alt} />
                        <p>{nationNick}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="match">
              <div className="matchInfo">
                <span className="matchGroupSpan">
                  <p>MATCH #2</p>
                  <p className="dash">-</p>
                  <p>Group B</p>
                </span>
                <p>Saturday, 13 June 2021</p>
                <p>Alianz Arena, Munchen</p>
              </div>
              <div className="matchTime">
                {teams[0].groupTeams
                  .slice(2, 3)
                  .map(({ flag, nationNick }, index) => (
                    <div className="borderBoxFirst" key={index}>
                      <div className="nation box">
                        <p>{nationNick}</p>
                        <img src={flag.small} alt={flag.alt} />
                      </div>
                    </div>
                  ))}
                <span>19 : 00</span>
                {teams[0].groupTeams
                  .slice(3, 4)
                  .map(({ flag, nationNick }, index) => (
                    <div className="borderBoxSecond" key={index}>
                      <div className="nation box">
                        <img src={flag.small} alt={flag.alt} />
                        <p>{nationNick}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <h1>Standings</h1>
          <div className="tableCards">
            {teams.map((group, index) => (
              <Paper className="tableCard" key={index}>
                <h2>Group {group.groupName}</h2>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <div className="cell">Nation</div>
                      </TableCell>
                      <TableCell>
                        <div className="cell">W</div>
                      </TableCell>
                      <TableCell>
                        <div className="cell">D</div>
                      </TableCell>
                      <TableCell>
                        <div className="cell">L</div>
                      </TableCell>
                      <TableCell>
                        <div className="cell">PTS</div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {group.groupTeams.map(
                      ({ flag, nationNick, score }, index) => (
                        <TableRow key={index} className="rowTable">
                          <TableCell className="cellTable">
                            <div className="nation">
                              <img src={flag.small} alt={flag.alt} />
                              <p>{nationNick}</p>
                            </div>
                          </TableCell>
                          <TableCell className="cellTable">
                            <div className="cell">{score.won}</div>
                          </TableCell>
                          <TableCell className="cellTable">
                            <div className="cell">{score.drawn}</div>
                          </TableCell>
                          <TableCell className="cellTable">
                            <div className="cell">{score.lost}</div>
                          </TableCell>
                          <TableCell className="cellTable">
                            <div className="cell">{score.points}</div>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </Paper>
            ))}
          </div>
        </div>
      </BackgroundGradient>
    )
  }
}
export default ScheduleInfo
