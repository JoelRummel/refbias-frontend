export const teamsMap = {
    DET: {
        location: "Detroit",
        mascot: "Lions",
        colors: {
            primary: "#0076B6",
            secondary: "#B0B7BC"
        }
    },
    GB: {
        location: "Green Bay",
        mascot: "Packers",
        colors: {
            primary: "#203731",
            secondary: "#FFB612"
        }
    },
    CHI: {
        location: "Chicago",
        mascot: "Bears",
        colors: {
            primary: "#0B162A",
            secondary: "#C83803"
        }
    },
    MIN: {
        location: "Minnesota",
        mascot: "Vikings",
        colors: {
            primary: "#4F2683",
            secondary: "#FFC62F"
        }
    },
    TB: {
        location: "Tampa Bay",
        mascot: "Buccaneers",
        colors: {
            primary: "#D50A0A",
            secondary: "#FF7900"
        }
    },
    NO: {
        location: "New Orleans",
        mascot: "Saints",
        colors: {
            primary: "#D3BC8D",
            secondary: "#101820"
        }
    },
    MIA: {
        location: "Miami",
        mascot: "Dolphins",
        colors: {
            primary: "#008E97",
            secondary: "#FC4C02"
        }
    },
    NYG: {
        location: "New York",
        mascot: "Giants",
        colors: {
            primary: "#0B2265",
            secondary: "#A71930"
        }
    },
    NYJ: {
        location: "New York",
        mascot: "Jets",
        colors: {
            primary: "#125740",
            secondary: "#FFFFFF"
        }
    },
    JAX: {
        location: "Jacksonville",
        mascot: "Jaguars",
        colors: {
            primary: "#006778",
            secondary: "#101820"
        }
    },
    CAR: {
        location: "Carolina",
        mascot: "Panthers",
        colors: {
            primary: "#0085CA",
            secondary: "#BFC0BF"
        }
    },
    LV: {
        location: "Las Vegas",
        mascot: "Raiders",
        colors: {
            primary: "#000000",
            secondary: "#A5ACAF"
        }
    },
    SEA: {
        location: "Seattle",
        mascot: "Seahawks",
        colors: {
            primary: "#002244",
            secondary: "#69BE28"
        }
    },
    LAC: {
        location: "Los Angeles",
        mascot: "Chargers",
        colors: {
            primary: "#0080C6",
            secondary: "#FFC20E"
        }
    },
    LAR: {
        location: "Los Angeles",
        mascot: "Rams",
        colors: {
            primary: "#003594",
            secondary: "#FFA300"
        }
    },
    ARI: {
        location: "Arizona",
        mascot: "Cardinals",
        colors: {
            primary: "#97233F",
            secondary: "#000000"
        }
    },
    ATL: {
        location: "Atlanta",
        mascot: "Falcons",
        colors: {
            primary: "#A71930",
            secondary: "#000000"
        }
    },
    BUF: {
        location: "Buffalo",
        mascot: "Bills",
        colors: {
            primary: "#00338D",
            secondary: "#C60C30"
        }
    },
    SF: {
        location: "San Francisco",
        mascot: "49ers",
        colors: {
            primary: "#AA0000",
            secondary: "#B3995D"
        }
    },
    PHI: {
        location: "Philadelphia",
        mascot: "Eagles",
        colors: {
            primary: "#004C54",
            secondary: "#A5ACAF"
        }
    },
    DAL: {
        location: "Dallas",
        mascot: "Cowboys",
        colors: {
            primary: "#003594",
            secondary: "#869397"
        }
    },
    WAS: {
        location: "Washington",
        mascot: "Commanders",
        colors: {
            primary: "#5A1414",
            secondary: "#FFB612"
        }
    },
    NE: {
        location: "New England",
        mascot: "Patriots",
        colors: {
            primary: "#002244",
            secondary: "#C60C30"
        }
    },
    HOU: {
        location: "Houstan",
        mascot: "Texans",
        colors: {
            primary: "#03202F",
            secondary: "#A71930"
        }
    },
    TEN: {
        location: "Tennessee",
        mascot: "Titans",
        colors: {
            primary: "#0C2340",
            secondary: "#4B92DB"
        }
    },
    DEN: {
        location: "Denver",
        mascot: "Broncos",
        colors: {
            primary: "#FB4F14",
            secondary: "#002244"
        }
    },
    KC: {
        location: "Kansas City",
        mascot: "Chiefs",
        colors: {
            primary: "#E31837",
            secondary: "#FFB81C"
        }
    },
    CLE: {
        location: "Cleveland",
        mascot: "Browns",
        colors: {
            primary: "#311D00",
            secondary: "#FF3C00"
        }
    },
    CIN: {
        location: "Cincinnati",
        mascot: "Bengals",
        colors: {
            primary: "#FB4F14",
            secondary: "#000000"
        }
    },
    PIT: {
        location: "Pittsburgh",
        mascot: "Steelers",
        colors: {
            primary: "#FFB612",
            secondary: "#101820"
        }
    },
    BAL: {
        location: "Baltimore",
        mascot: "Ravens",
        colors: {
            primary: "#241773",
            secondary: "#9E7C0C"
        }
    },
    IND: {
        location: "Indianapolis",
        mascot: "Colts",
        colors: {
            primary: "#002C5F",
            secondary: "#A2AAAD"
        }
    }
}

export const teamsArr = Object.keys(teamsMap).map(id => ({ id, ...teamsMap[id] }));
