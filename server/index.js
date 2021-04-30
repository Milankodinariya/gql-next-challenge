const {ApolloServer, gql} = require('apollo-server');
const {playersList, teamsList, leagueList} = require('./db')

const typeDefs = gql`

    type Player {
        id: String!,
        name: String
        age: String,
        position: String,
        value: String,
        minutes: String,
        height: String,
        passport: Passport,
        foot: String,
        expiry: String,
        attacking_quality: String,
        defensive_quality: String,
        overall_quality: String,
        league_rank: String,
        overall_rank: String,
        attack: Attack,
        defensive: Defensive
        team: Team
        league: League
    }

    type Passport {
        country1: Country,
        country2: Country
    }

    type Attack {
        shot : Int,
        dribble: Int,
        in_possession: String
        ariel: String,
        pass: String,
        cross: String,
        off_the_ball: String,
        league_rank: String,
        overall_rank: String,
    }

    type Defensive {
        challenge : String,
        ariel: String,
        in_possession: String,
        off_the_ball: String,
        def_quality: String,
        league_rank: String,
        overall_rank: String,
    }

    type Country {
        name : String,
        flag: String
    }

    type Team {
        id: String!,
        name : String,
        logo : String,
        played : String,
        won : String,
        draw : String,
        lost : String,
        points : String,
        F : String,
        A : String,
        attacking: AttackingDetails,
        defensive: DefensiveDetails,
        league: League
    }

    type DefensiveDetails {
        positive: positiveAndNegativeDetails,
        negative: positiveAndNegativeDetails
    }

    type AttackingDetails {
        positive: positiveAndNegativeDetails
    }

    type positiveAndNegativeDetails {
        overall: String
        shots: String,
        pass: String,
        dribble: String,
        ariel: String,
        cross: String,
        off_the_ball: String,
        in_possession: String,
        set_pieces: String,
        challenge: String,
    }

    type League {
        id: String!,
        name: String
        teams: LeagueTeam
    }

    type LeagueTeam {
        team : Team
    }
    
    type Query {
        players: [Player]
    }
`;

const resolvers = {
    Query: {
        players: () => {
            return playersList.map(player => {
                const findTeam = teamsList.find(team => team.id === player.teamId) || {}
                const findLeague = findTeam && findTeam.leagueId && leagueList.find(league => league.id === findTeam.leagueId) || {}
                return {...player, team: findTeam, league: findLeague}
            })
        }
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

