module.exports = {
    playersList: [
        {
            id: "1",
            name: "FirstName LastName",
            age: "22",
            position: "CM",
            value: "4.7",
            minutes: "50",
            height: "170",
            teamId: "1",
            passport: {
                country1: {
                    name: "England",
                    flag: "http://example.com/england-flag.png"
                },
                country2: {
                    name: "Spain",
                    flag: "http://example.com/spain-flag.png"
                }
            },
            foot: "left",
            expiry: "2022",
            attacking_quality: "97.35",
            defensive_quality: "75.3",
            overall_quality: "80",
            league_rank: "92",
            overall_rank: "81",
            attack: {
                shot: 90,
                dribble: 80,
                in_possession: "91",
                ariel: "32",
                pass: "23",
                cross: "92",
                off_the_ball: "93",
                league_rank: "92",
                overall_rank: "98",
            },
            defensive: {
                challenge: "91",
                ariel: "91",
                in_possession: "92",
                off_the_ball: "93",
                def_quality: "95",
                league_rank: "98",
                overall_rank: "91",
            }
        }
    ],
    teamsList: [
        {
            id: "1",
            name: "Barcelona",
            logo: "https://scout.codedrill.xyz/wp-content",
            attacking: {
                positive: {
                    overall: "1",
                    shots: "1",
                    pass: "1",
                    dribble: "1",
                    ariel: "1",
                    cross: "1",
                    off_the_ball: "1",
                    in_possession: "1"
                }
            },
            defensive: {
                positive: {
                    overall: "1",
                    shots: "1",
                    pass: "1",
                    dribble: "1",
                    ariel: "1",
                    cross: "1",
                    off_the_ball: "1",
                    in_possession: "1"
                },
                negative: {
                    overall: "1",
                    shots: "1",
                    pass: "1",
                    dribble: "1",
                    ariel: "1",
                    cross: "1",
                    off_the_ball: "1",
                    in_possession: "1"
                }
            },
            leagueId: "1"
        }
    ],
    leagueList: [
        {
            id: "1",
            name: "Premier League",
            teams: {
                team: {
                    id: "1",
                    name: "Barcelona",
                    logo: "https://scout.codedrill.xyz/wp-content",
                    played: "12",
                    won: "2",
                    draw: "2",
                    lost: "2",
                    points: "28",
                    F: "2",
                    A: "4",
                    attacking: {
                        overall: "91",
                        shots: "32",
                        pass: "12",
                        dribble: "43",
                        ariel: "23",
                        cross: "43",
                        off_the_ball: "23",
                        in_possession: "23",
                        set_pieces: "32",
                    },
                    defensive: {
                        positive: {
                            overall: "12",
                            ariel: "23",
                            off_the_ball: "23",
                            in_possession: "83",
                            challenge: "38",
                        },
                        negative: {
                            overall: "12",
                            ariel: "32",
                            off_the_ball: "43",
                            in_possession: "83",
                            challenge: "38",
                        }
                    }
                }
            }
        },
    ],
};
