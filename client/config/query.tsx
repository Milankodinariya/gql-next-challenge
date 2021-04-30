import {DocumentNode, gql} from '@apollo/client';

export const GET_PLAYERS_DATA: DocumentNode = gql`
  {
    players {
      id
      name
      age
      position
      value
      minutes
      height
      passport {
        country1 {
          name
          flag
        }
        country2 {
          name
          flag
        }
      }
      foot
      expiry
      attacking_quality
      defensive_quality
      overall_quality
      league_rank
      overall_rank
      team {
        id
        logo
        name
        attacking {
          positive {
            overall
            shots
            pass
            dribble
            ariel
            cross
            off_the_ball
            in_possession
          }
        }
        defensive {
          positive {
            overall
            shots
            pass
            dribble
            ariel
            cross
            off_the_ball
            in_possession
          }
          negative {
            overall
            shots
            pass
            dribble
            ariel
            cross
            off_the_ball
            in_possession
          }
        }
      }
      league {
        id
        name
        teams {
          team {
            id
            name
            logo
            played
            won
            draw
            lost
            points
            F
            A
            attacking {
              positive {
                overall
                shots
                pass
                dribble
                ariel
                cross
                off_the_ball
                in_possession
              }
            }
            defensive {
              positive {
                overall
                shots
                pass
                dribble
                ariel
                cross
                off_the_ball
                in_possession
              }
              negative {
                overall
                shots
                pass
                dribble
                ariel
                cross
                off_the_ball
                in_possession
              }
            }
          }
        }
      }
    }
  }
`;
