export const teamsMap = {
    DET: {
        location: "Detroit",
        mascot: "Lions"
    },
    GB: {
        location: "Green Bay",
        mascot: "Packers"
    },
    CHI: {
        location: "Chicago",
        mascot: "Bears"
    },
    MIN: {
        location: "Minnesota",
        mascot: "Vikings"
    },
    TB: {
        location: "Tampa Bay",
        mascot: "Buccaneers"
    },
    NO: {
        location: "New Orleans",
        mascot: "Saints"
    },
    MIA: {
        location: "Miami",
        mascot: "Dolphins"
    },
    NYG: {
        location: "New York",
        mascot: "Giants"
    },
    NYJ: {
        location: "New York",
        mascot: "Jets"
    },
    JAX: {
        location: "Jacksonville",
        mascot: "Jaguars"
    },
    CAR: {
        location: "Carolina",
        mascot: "Panthers"
    },
    LV: {
        location: "Las Vegas",
        mascot: "Raiders"
    },
    SEA: {
        location: "Seattle",
        mascot: "Seahawks"
    },
    LAC: {
        location: "Los Angeles",
        mascot: "Chargers"
    },
    LAR: {
        location: "Los Angeles",
        mascot: "Rams"
    },
    ARI: {
        location: "Arizona",
        mascot: "Cardinals"
    },
    ATL: {
        location: "Atlanta",
        mascot: "Falcons"
    },
    BUF: {
        location: "Buffalo",
        mascot: "Bills"
    },
    SF: {
        location: "San Francisco",
        mascot: "49ers"
    },
    PHI: {
        location: "Philadelphia",
        mascot: "Eagles"
    },
    DAL: {
        location: "Dallas",
        mascot: "Cowboys"
    },
    WAS: {
        location: "Washington",
        mascot: "Commanders"
    },
    NE: {
        location: "New England",
        mascot: "Patriots"
    },
    HOU: {
        location: "Houstan",
        mascot: "Texans"
    },
    TEN: {
        location: "Tennessee",
        mascot: "Titans"
    },
    DEN: {
        location: "Denver",
        mascot: "Broncos"
    },
    KC: {
        location: "Kansas City",
        mascot: "Chiefs"
    },
    CLE: {
        location: "Cleveland",
        mascot: "Browns"
    },
    CIN: {
        location: "Cincinnati",
        mascot: "Bengals"
    },
    PIT: {
        location: "Pittsburgh",
        mascot: "Steelers"
    },
    BAL: {
        location: "Baltimore",
        mascot: "Ravens"
    },
    IND: {
        location: "Indianapolis",
        mascot: "Colts"
    }
}

export const teamsArr = Object.keys(teamsMap).map(id => ({ id, ...teamsMap[id] }));
