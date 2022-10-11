export interface IHalloweenStop {
    stopNumber: number;
    scheduledTime: string;
    neighbor: INeighbor;
    food: IConsumable[];
    drink: IConsumable[];
};

export interface INeighbor {
    houseNickName: string,
    firstName: string,
    lastName: string,
    spouse: string, 
    streetAddress: string
}

export interface IConsumable {
    name: string,
    details: string
}

export const HalloweenCrawl: IHalloweenStop[] = [
    {
        "stopNumber": 1,
        "scheduledTime": "6:00PM",
        "neighbor": {
            "houseNickName": "Gaspers Graveyard",
            "firstName": "Susie",
            "lastName": "Gasper",
            "spouse": "Matt",
            "streetAddress": "402"
        },
        "food": [
            {
                "name": "Walking Tacos",
                "details": ""
            },
            {
                "name": "Mallory's Magic Munchies",
                "details": ""
            }
        ],
        "drink": [{
            "name": "Susies Spooky Smirnoff Shots",
            "details": ""
        },
        {
            "name": "Matt's Monster Miller Lites",
            "details": ""
        },
        {
            "name": "Hadleight's Haunted Huggies",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 2,
        "scheduledTime": "6:30PM",
        "neighbor": {
            "houseNickName": "Hough's Haunted House",
            "firstName": "Andrea",
            "lastName": "Hough",
            "spouse": "Rob",
            "streetAddress": "404"
        },
        "food": [
            {
                "name": "Pizza Roll Graveyard",
                "details": ""
            }
        ],
        "drink": [{
            "name": "Wicked Whiskey Cider Cocktails",
            "details": ""
        },
        {
            "name": "Apple Cider Mummy Mocktails",
            "details": ""
        },
        {
            "name": "Robbies Haunted Totino's",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 3,
        "scheduledTime": "7:00PM",
        "neighbor": {
            "houseNickName": "Rodger's Ravens Roost",
            "firstName": "Lindsey",
            "lastName": "Rodger",
            "spouse": "Brian",
            "streetAddress": "406"
        },
        "food": [
            {
                "name": "Spooky Smoked Bacon-Wrapped Pickles",
                "details": ""
            }
        ],
        "drink": [{
            "name": "Dr. Jekyll's Jellos Shots (alcoholic and non)",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 4,
        "scheduledTime": "7:30PM",
        "neighbor": {
            "houseNickName": "Clouser's CandyCorn Castle",
            "firstName": "Scott",
            "lastName": "Clouser",
            "spouse": "",
            "streetAddress": "408"
        },
        "food": [
            {
                "name": "Empanadas De Desembrada",
                "details": ""
            },
        ],
        "drink": [{
            "name": "La Catarina Blood Orange Margaritas",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 5,
        "scheduledTime": "8:00PM",
        "neighbor": {
            "houseNickName": "Scott's Skeleton Shack",
            "firstName": "Julie",
            "lastName": "Scott",
            "spouse": "Eli",
            "streetAddress": "413"
        },
        "food": [
            {
                "name": "",
                "details": ""
            },
            {
                "name": "",
                "details": ""
            }
        ],
        "drink": [{
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 6,
        "scheduledTime": "8:30PM",
        "neighbor": {
            "houseNickName": "Gerboc's Gruesome Garage",
            "firstName": "Kacie",
            "lastName": "Gerboc",
            "spouse": "Bryce",
            "streetAddress": "414"
        },
        "food": [
            {
                "name": "",
                "details": ""
            },
            {
                "name": "",
                "details": ""
            }
        ],
        "drink": [{
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 7,
        "scheduledTime": "9:00PM",
        "neighbor": {
            "houseNickName": "Bazaz's Boogieman Bungalow",
            "firstName": "Erin",
            "lastName": "Bazaz",
            "spouse": "Rick",
            "streetAddress": "415"
        },
        "food": [
            {
                "name": "Petrifying Pork Meatballs",
                "details": ""
            },
        ],
        "drink": [{
            "name": "Venomous Vampire Shots",
            "details": ""
        },
        ]
    },
    {
        "stopNumber": 8,
        "scheduledTime": "9:30PM",
        "neighbor": {
            "houseNickName": "Russell's Reaper Ranch",
            "firstName": "Brandy",
            "lastName": "Russell",
            "spouse": "Alex",
            "streetAddress": "418"
        },
        "food": [
            {
                "name": "",
                "details": ""
            },
            {
                "name": "",
                "details": ""
            }
        ],
        "drink": [{
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        }
        ]
    },
    {
        "stopNumber": 9,
        "scheduledTime": "10:00PM",
        "neighbor": {
            "houseNickName": "Henry and Jay's Weiner Station",
            "firstName": "Henry and Jay",
            "lastName": "",
            "spouse": "",
            "streetAddress": "417"
        },
        "food": [
            {
                "name": "",
                "details": ""
            },
            {
                "name": "",
                "details": ""
            }
        ],
        "drink": [{
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        },
        {
            "name": "",
            "details": ""
        }
        ]
    },
    
];

export const DogwoodAddresses: string[]= [
"402 Dogwood",
"404 Dogwood",
"406 Dogwood",
"408 Dogwood",
"413 Dogwood",
"414 Dogwood",
"415 Dogwood",
"416 Dogwood",
"417 Dogwood",
"418 Dogwood",
"419 Dogwood",
"Not listed - new stop"
]