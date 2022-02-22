import { REMOVE_ITEM } from "./Type";

const initialSatate = {
    HackerNewsPageOne: [
        {
            id: 1,
            name: "Stephen Hawking Has Died",
            point: "6015 points by Cogito | 436 comments"
        },
        {
            id: 1,
            name: "A Message To Our Customers",
            point: "5771 points by epaga | 967 comments"
        },
        {
            id: 1,
            name: "Steve Jobs Has Passed Away.",
            point: "4271 points by patricktomas | 376 comments"
        },
        {
            id: 1,
            name: "YouTube-Dl Has Received A DMCA Takedown From RIAA",
            point: "4240 points by phantop | 1411 comments"
        },
        {
            id: 1,
            name: "Reflecting On One Very, Very Strange Year At Uber",
            point: "4107 points by grey-area | 1014 comments"
        },
        {
            id: 1,
            name: "Google’s Copying Of The Java SE API Was Fair Use [Pdf]",
            point: "4103 points by pdoconnell | 930 comments"
        },
        {
            id: 1,
            name: "Replit Used Legal Threats To Kill My Open-Source Project",
            point: "4022 points by raxod502 | 1274 comments"
        },
        {
            id: 1,
            name: "",
            point: "3913 points by codegeek | comments"
        },
        {
            id: 1,
            name: "How I Cut GTA Online Loading Times By 70%",
            point: "3883 points by kuroguro | 697 comments"
        },
        {
            id: 1,
            name: "Bye, Amazon",
            point: "3816 points by grey-area | 1097 comments"
        },
        {
            id: 1,
            point: "3747 points by zitterbewegung | comments"
        },
        {
            id: 1,
            name: "Every Google Result Now Looks Like An Ad",
            point: "3592 points by cmod | 969 comments"
        },
        {
            id: 1,
            name: "A Search Engine That Favors Text-Heavy Sites And Punishes Modern Web Design",
            point: "3441 points by Funes- | 717 comments"
        },
        {
            id: 1,
            point: "3417 points by robryan | comments"
        },
        {
            id: 1,
            name: "F.C.C. Repeals Net Neutrality Rules",
            point: "3384 points by panny | 1397 comments"
        },
        {
            id: 2,
            point: "3240 points by GreekOphion | comments"
        },
        {
            id: 2,
            name: "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory",
            point: "3238 points by tptacek | 992 comments"
        },
        {
            id: 2,
            name: "Click To Subscribe, Call To Cancel” Is Illegal, FTC Says",
            point: "3192 points by spzx | 860 comments"
        },
        {
            id: 2,
            name: "UK Votes To Leave EU",
            point: "3125 points by dmmalam | 2531 comments"
        },
        {
            id: 2,
            point: "3115 points by tnorthcutt | comments"
        },
        {
            id: 2,
            name: "Biden Wins White House, Vowing New Direction For Divided U.S.",
            point: "3089 points by granzymes | 4577 comments"
        }
        , {
            id: 2,
            name: "Tim Cook Speaks Up",
            point: "3086 points by replicatorblog | 974 comments"
        }
        , {
            id: 2,
            point: "3042 points by michaelkscott | comments"
        }
        , {
            id: 2,
            name: "Announcing The First SHA-1 Collision",
            point: "3030 points by pfg | 485 comments"
        }
        , {
            id: 2,
            name: "“They Introduce Kernel Bugs On Purpose”",
            point: "3025 points by kdbg | 1209 comments"
        }
        , {
            id: 2,
            name: "I Sell Onions On The Internet",
            point: "3015 points by eightturn | 435 comments"
        }
        , {
            id: 2,
            name: "MacOS High Sierra: Anyone Can Login As “Root” With Empty Password",
            point: "3001 points by vladikoff | 813 comments"
        }
        , {
            id: 3,
            name: "Introducing Create React Native App",
            point: "535 points by anp | 158 comments"
        }
        , {
            id: 3,
            name: "A Kernel Engineer At Microsoft's Answer To “What Do You Think About ReactOS?”",
            point: "532 points by whereistimbo | 275 comments"
        }
        , {
            id: 3,
            name: "Elixir, Phoenix, Absinthe, GraphQL, React, And Apollo",
            point: "526 points by schneidmaster | 153 comments"
        }
        , {
            id: 3,
            name: "React Tutorial: Cloning Yelp",
            point: "521 points by jashmenn | 245 comments"
        }
        , {
            id: 3,
            name: "Show HN: Zero – A Fast, Zero-Configuration Server For React, Node.Js, Markdown",
            point: "513 points by asadlionpk | 245 comments"
        }
        , {
            id: 3,
            name: "Show HN: Divjoy – React Codebase And UI Generator",
            point: "511 points by makeee | 131 comments"
        }
        , {
            id: 3,
            name: "Show HN: Learn React Fundamentals",
            point: "509 points by tyroprogrammer | 74 comments"
        }
        , {
            id: 3,
            name: "Show HN: Antd – A Set Of High-Quality React Components",
            point: "507 points by _yesmeck | 104 comments"
        }
        , {
            id: 3,
            name: "Mailchimp Insiders React To Employees Getting No Equity From Intuit Sale ",
            point: "506 points by lemoncucumber | 455 comments"
        }
        , {
            id: 3,
            name: "Flipboard Releases React Canvas",
            point: "501 points by jordwalke | 131 comments"
        }
        , {
            id: 3,
            name: "Shipping A Neural Network On IOS With CoreML, PyTorch, And React Native",
            point: "501 points by ot | 37 comments"
        }
        , {
            id: 3,
            name: "Yew: Rust Framework For Making React-Like Client Web Apps",
            point: "500 points by syrusakbary | 137 comments"
        }
        , {
            id: 4,
            name: "Introducing React Storybook",
            point: "459 points by dsego | 46 comments"
        }
        , {
            id: 4,
            name: "React V15.5.0",
            point: "453 points by shahzeb | 203 comments"
        }
        , {
            id: 4,
            name: "An Introduction To Reactive Programming",
            point: "452 points by staltz | 119 comments"
        }
        , {
            id: 4,
            name: "How I Found A Vulnerability To Hack ICloud Accounts And How Apple Reacted To It",
            point: "447 points by alexcos | 141 comments"
        }
        , {
            id: 4,
            name: "React Concurrent Mode",
            point: "446 points by gmaster1440 | 294 comments"
        }
        , {
            id: 4,
            name: "Tangle Is A JavaScript Library For Creating Reactive Documents.",
            point: "550 points by jsavimbi  | 167 comments"
        }
        , {
            id: 4,
            name: "React Is Becoming A Black Box",
            point: "439 points by keenondrums | 370 comments"
        }
        , {
            id: 4,
            name: "Org-Mode On Web, Built With React, For Mobile, Synced With Dropbox, Google Drive",
            point: "438 points by moioci | 104 comments"
        }
        , {
            id: 4,
            name: "Show HN: Material Dashboard – Free Admin For Bootstrap 4, React, Angular, Vue.Js",
            point: "436 points by axelut | 149 comments"
        }
        , {
            id: 4,
            name: "Show HN: Material Dashboard – Free Admin For Bootstrap 4, React, Angular, Vue.Js",
            point: "436 points by axelut | 149 comments"
        }
        , {
            id: 4,
            name: "Tangle Is A JavaScript Library For Creating Reactive Documents.",
            point: "550 points by jsavimbi  | 167 comments"
        }
        , {
            id: 4,
            name: "“I Built A Fusion Reactor In My Bedroom – AMA”",
            point: "434 points by lsllc | 127 comments"
        }
        , {
            id: 4,
            name: "Angular 2 Versus React",
            point: "550 points by jsavimbi  | 167 comments"
        }
        , {
            id: 5,
            name: "React Server",
            point: "408 points by uptown | 137 comments"
        }
        , {
            id: 5,
            name: "Six Years After Fukushima, Robots Finally Find Reactors’ Melted Uranium Fuel",
            point: "402 points by htiek | 179 comments"
        }
        , {
            id: 5,
            name: "React UI Builder",
            point: "391 points by snake_case | 64 comments"
        }
        , {
            id: 5,
            name: "Riot – A React-Like, 2.5K User Interface Library",
            point: "388 points by tipiirai | 214 comments"
        }
        , {
            id: 5,
            name: "React Native For Ubuntu",
            point: "380 points by bpierre | 138 comments"
        }
        , {
            id: 5,
            name: "Making A Statically-Linked, Single-File Web App With React And Rust",
            point: "378 points by anderspitman | 171 comments"
        }
        , {
            id: 5,
            name: "How HBO’s Silicon Valley Built “Not Hotdog” With TensorFlow, Keras And React Native",
            point: "378 points by timanglade | 117 comments"
        }
        , {
            id: 5,
            name: "Why We Chose Vue.Js Over React",
            point: "377 points by jetter | 249 comments"
        }
        , {
            id: 5,
            name: "React Native And Yoga Both Given MIT Licence By Facebook",
            point: "375 points by dabit3 | 118 comments"
        }
        , {
            id: 5,
            name: "Boring Avatars – React Library To Generate Custom Avatars",
            point: "375 points by arnklint | 93 comments"
        }
        , {
            id: 5,
            name: "If TypeScript Is So Great, How Come All Notable ReactJS Projects Use Babel?",
            point: "373 points by stuartmemo | 235 comments"
        }
        , {
            id: 5,
            name: "Canadian Provinces Band Together To Develop Nuclear Reactor Technology",
            point: "372 points by frabbit | 316 comments"
        }
        , {
            id: 5,
            name: "Things To Learn In React Before Using Redux",
            point: "370 points by callumlocke | 104 comments"
        }
    ]

}

const reducer = (state = initialSatate, action) => {
    switch (action.type) {
        case REMOVE_ITEM: return {
            HackerNewsPageOne: [
                ...state.HackerNewsPageOne.slice(0, action.id),
                ...state.HackerNewsPageOne.slice(action.id + 1)
            ]
        }
        default:
            return state;
    }
}

export default reducer