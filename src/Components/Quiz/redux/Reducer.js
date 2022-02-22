import { CHOOSE_CORRECT } from "./Type";

const initialState = {
    Quizdata: [
        {
            id: 1,
            Question: "In what sport is a 'shuttlecock' used?",
            answers: [
                {
                    id_answer: 100,
                    answer: "Badminton",
                },
                {
                    id_answer: 101,
                    answer: "Rugbey"
                },
                {
                    id_answer: 102,
                    answer: "Cricket"
                },
                {
                    id_answer: 103,
                    answer: "Table Tennis",
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 101,
                    answerCorrect: "Rugbey"
                }
            ]
        },
        {
            id: 2,
            Question: "Which country has hosted the 2018 FIFA World Cup?",
            answers: [

                {
                    id_answer: 104,
                    answer: "Germany",
                },
                {
                    id_answer: 105,
                    answer: "United States"
                },
                {
                    id_answer: 106,
                    answer: "Saudi Arabia"
                },
                {
                    id_answer: 107,
                    answer: "Rugbey",
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 104,
                    answerCorrect: "Germany"
                }
            ]
        },
        {
            id: 3,
            Question: "Which driver has been the Formula 1 world champion for a record 7 times?",
            answers: [

                {
                    id_answer: 108,
                    answer: "Ayrton",
                },
                {
                    id_answer: 109,
                    answer: "Fernando Alonso"
                },
                {
                    id_answer: 110,
                    answer: "Michalel"
                },
                {
                    id_answer: 111,
                    answer: "jim clark",
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 111,
                    answerCorrect: "jim clark",
                }
            ]
        },
        {
            id: 4,
            Question: "What year did the New Orleans Saints win the Super Bowl?",
            answers: [

                {
                    id_answer: 112,
                    answer: 2008,
                },
                {
                    id_answer: 113,
                    answer: 2009
                },
                {
                    id_answer: 114,
                    answer: 2010
                },
                {
                    id_answer: 115,
                    answer: 2111
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 114,
                    answerCorrect: 2010
                }
            ]
        },
        {
            id: 5,
            Question: "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
            answers: [

                {
                    id_answer: 116,
                    answer: "Leicester City",
                },
                {
                    id_answer: 117,
                    answer: "Watford"
                },
                {
                    id_answer: 118,
                    answer: "Stoke City"
                },
                {
                    id_answer: 119,
                    answer: "Tottenham Hotspur"
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 118,
                    answerCorrect: "Stoke City"
                }
            ]
        },
        {
            id: 6,
            Question: "What year did the New Orleans Saints win the Super Bowl?",
            answers: [

                {
                    id_answer: 120,
                    answer: "Mike Tyson",
                },
                {
                    id_answer: 121,
                    answer: "Evander Holyfield",
                },
                {
                    id_answer: 122,
                    answer: "Lennox Lewis",
                },
                {
                    id_answer: 123,
                    answer: "Roy Jones Jr."
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 121,
                    answerCorrect: "Evander Holyfield"
                }
            ]
        },
        {
            id: 7,
            Question: "How many soccer players should be on the field at the same time?",
            answers: [

                {
                    id_answer: 124,
                    answer: 22,
                },
                {
                    id_answer: 125,
                    answer: 26,
                },
                {
                    id_answer: 126,
                    answer: 24,
                },
                {
                    id_answer: 127,
                    answer: 20
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 124,
                    answerCorrect: 22
                }
            ]
        },
        {
            id: 8,
            Question: "Which English football club has the nickname 'The Foxes'?",
            answers: [

                {
                    id_answer: 128,
                    answer: "Northampton Town",
                },
                {
                    id_answer: 129,
                    answer: "Bradford City",
                },
                {
                    id_answer: 130,
                    answer: "West Bromwich Albion",
                },
                {
                    id_answer: 131,
                    answer: "Leicester City."
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 131,
                    answerCorrect: "Leicester City."
                }
            ]
        },
        {
            id: 9,
            Question: "Who is often called 'the Maestro' in the men's tennis circuit?",
            answers: [

                {
                    id_answer: 132,
                    answer: "Bill Tilden",
                },
                {
                    id_answer: 134,
                    answer: "Boris Becker",
                },
                {
                    id_answer: 135,
                    answer: "Pete Sampras",
                },
                {
                    id_answer: 136,
                    answer: "Roger Federer"
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 135,
                    answerCorrect: "Pete Sampras",
                }
            ]
        },
        {
            id: 10,
            Question: "Which team won the 2015-16 English Premier League?",
            answers: [

                {
                    id_answer: 137,
                    answer: "Liverpool",
                },
                {
                    id_answer: 138,
                    answer: "Leicester City",
                },
                {
                    id_answer: 139,
                    answer: "Manchester United",
                },
                {
                    id_answer: 140,
                    answer: "Cheslea"
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 138,
                    answerCorrect: "Leicester City"
                }
            ]
        },
        {
            id: 11,
            Question: "Which German field marshal was known as the `Desert Fox`?",
            Category: "",
            answers: [

                {
                    id_answer: 140,
                    answer: "Ernst Busch",
                },
                {
                    id_answer: 141,
                    answer: "Wolfram Freiherr von Richthofen",
                },
                {
                    id_answer: 142,
                    answer: "Erwin Rommel",
                },
                {
                    id_answer: 143,
                    answer: "Wilhelm List"
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 142,
                    answerCorrect: "Erwin Rommel"
                }
            ]
        },
        {
            id: 12,
            Question: "The idea of Socialism was articulated and advanced by whom?",
            answers: [
                {
                    id_answer: 144,
                    answer: "Vladimir Lenin",
                },
                {
                    id_answer: 145,
                    answer: "Joseph Stalin",
                },
                {
                    id_answer: 146,
                    answer: "Vladimir Putin",
                },
                {
                    id_answer: 147,
                    answer: "Karl Marx"
                },

            ],
            correctAnswer: [
                {
                    id_correctAnswer: 147,
                    answerCorrect: "Karl Marx"
                }
            ]
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CORRECT: return {
            ...state,
            index: action.paylaod
        }
        default:
            return state;
    }
}
export default reducer