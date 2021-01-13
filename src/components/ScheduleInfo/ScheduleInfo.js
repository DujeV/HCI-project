import React from "react"
import BackgroundGradient from "../BackgroundGradient"
import { teams } from "../TeamsInfo/TeamsData/TeamsData"

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
          <h1>Standings</h1>
          <div className="tableCards">
            <div className="tableCard">
              <Paper className="tableRow">
                <h2>Group A</h2>
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
                    {teams
                      .slice(0, 4)
                      .map(({ id, flag, nationNick, score }) => (
                        <TableRow key={id}>
                          <TableCell>
                            <div className="nation">
                              <img src={flag.small} alt={flag.alt} />
                              <p>{nationNick}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.won}</div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.drawn}</div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.lost}</div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.points}</div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Paper>
            </div>
            <div className="tableCard">
              <Paper className="tableRow">
                <h2>Group B</h2>
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
                    {teams
                      .slice(0, 4)
                      .map(({ id, flag, nationNick, score }) => (
                        <TableRow key={id}>
                          <TableCell>
                            <div className="nation">
                              <img src={flag.small} alt={flag.alt} />
                              <p>{nationNick}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.won}</div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.drawn}</div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.lost}</div>
                          </TableCell>
                          <TableCell>
                            <div className="cell">{score.points}</div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    )
  }
}
export default ScheduleInfo
