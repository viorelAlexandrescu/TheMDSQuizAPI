
let DB = (function () {
    let questionsPerLevel = 10;

    let data = [
        
        {
            question: "Care este capitala Germaniei?",
            answers: [
                "Berlin",
                "Copenhaga",
                "Praga",
                "Riga"
            ],
            answerIndex : 0
        },

        
        {
            question: "Avem sirul 64 32 16 8 ? 2. Ce numar lipseste?",
            answers: [
                "1",
                "2",
                "3",
                "4"
            ],
            answerIndex: 3
        },

        
        {
            question: "Cate zile de nastere are un om la varsta de 58 de ani?",
            answers: [
                "59",
                "58",
                "1",
                "0"
            ],
            answerIndex: 2
        },
        {
            question: "Unele luni au 31 zile altele doar 30. Cate au 28 de zile?",
            answers: [
                "1",
                "0",
                "toate",
                "502"
            ],
            answerIndex: 2
        },
         
        {
            question: "Un avion cade pe fasia de granita dintre Romania si Ungaria. Unde vor fi inmormantati supravietuitorii?",
            answers: [
                "Romania",
	            "Ungaria",
	            "in tara de origine",
	            "nu vor fi inmormantati"
            ],
            answerIndex: 3
        },
        
        {
            question: "Pe o sarma stau 9 vrabii. Un vanator impusca una. Cate mai raman pe sarma?",
            answers: [
                "1",
	            "0",
	            "8",
	            "2"
            ],
            answerIndex: 1
        },
        {
            question: "3 pisici mananca 3 soricei in 3 minute. In cate minute mananca 100 de pisici 100 soricei?",
            answers: [
                "100 minute",
	            "300 minute",
	            "3 minute",
	            "1 minut"
            ],
            answerIndex: 2
        },
        {
            question: "Daca a 2-a zi a lunii este vineri atunci a 12-a zi a lunii este marti",
            answers: [
                "Adevarat",
	            "Fals",
	            "Conteaza",
	            "Categoric neimportant"
            ],
            answerIndex: 1
        },
        {
            question: "Cate degete inelare au impreuna 7 femei?",
            answers: [
                "35",
	            "70",
	            "14",
	            "7"
            ],
            answerIndex: 2
        },
        {
            question: "Care cer nu are stele?",
            answers: [
                "Cerul vazut de pe Marte",
	            "Cerul gurii",
	            "Cerul ziua",
	            "Cerul noaptea"
            ],
            answerIndex: 1
        },
        {
            question: "Cine spune numai adevarul?",
            answers: [
                "Betivul",
	            "Procurorul",
	            "Copilul",
	            "Parintii"
            ],
            answerIndex: 0
        },
        {
            question: "Cate prune poti manca dimineata pe stomacul gol?",
            answers: [
                "2",
	            "Niciuna",
	            "10",
	            "Cate vrei"
            ],
            answerIndex: 3
        },
        {
            question: "Cine l-a batut prima oara pe Stefan cel Mare?",
            answers: [
                "Mihai Eminescu",
	            "Mama sa",
	            "Elodia",
	            "Mark Zuckerberg"
            ],
            answerIndex: 1
        },
        {
            question: "Cum iese un cal maro din Marea Rosie?",
            answers: [
                "Tot maro",
	            "Rosu",
	            "Nu mai iese",
	            "Ud"
            ],
            answerIndex: 3
        },
         {
            question: "Ce poti vedea cu ochii inchisi?",
            answers: [
                "Raiul",
	            "Intunericul",
	            "Mamaliga",
	            "Viitorul"
            ],
            answerIndex: 1
        },
		 {
			question: "Unde gasesti un caine fara picioare?",
			answers: [
				"La abator",
				"Hingheri",
				"Unde l-ai lasat",
				"Mort"
			],
			answerIndex: 2
		},
		 {
			question: "O pisica alba se urca in pom. Cum se da jos?",
			answers: [
				"Incet",
				"Cu grija",
				"Alba",
				"Prafuita"
			],
			answerIndex: 2
		},
		 {
			question: "Care este diferenta intre 1000 de ursi albi si un urs alb?",
			answers: [
				"Mare",
				"0",
				"Nici o diferenta",
				"999 ursi albi"
			],
			answerIndex: 3
		},
		 {
			question: "Ce fac pestii cand sunt multi?",
			answers: [
				"Bancuri",
				"Se mananca intre ei",
				"Inoata",
				"Ciripesc"
			],
			answerIndex: 0
		},
		 {
			question: "Cum se numesc dacii care gandesc?",
			answers: [
				"Romani",
				"Gandaci",
				"Insecte",
				"Brontozauri"
			],
			answerIndex: 1
		},
		 {
			question: "Ce se afla intre Soare si Pamant?",
			answers: [
				"Marte",
				"Luna",
				"Pluto",
				"'si'"
			],
			answerIndex: 3
		},
		 {
			question: "Cum se cheama un caine fara picioare?",
			answers: [
				"Rex",
				"Trist",
				"Nu se cheama ca oricum nu vine",
				"Cutu-Cutu"
			],
			answerIndex: 2
		},
		 {
			question: "Care an dureaza numai o zi?",
			answers: [
				"2012",
				"2013",
				"Anul in care te-ai nascut",
				"Anul nou"
			],
			answerIndex: 3
		},
		 {
			question: "Cum scufunzi un submarin rusesc?",
			answers: [
				"Il bombardezi",
				"Il bagi in apa",
				"Cu oi",
				"Te scufunda el pe tine"
			],
			answerIndex: 1
		},
		 {
			question: "Participi la un maraton si il depasesti pe cel de pe pozitia a doua. Pe ce loc ai reusit sa treci?",
			answers: [
				"1",
				"2",
				"3",
				"4"
			],
			answerIndex: 1
		},
		 {
			question: "In ce an Craciunul si Anul nou pica in acelasi an?",
			answers: [
				"In fiecare an",
				"In nici un an",
				"2000",
				"2010"
			],
			answerIndex: 0
		},
		 {
			question: "Cum pui o girafa in frigider?",
			answers: [
				"Cumperi un frigider mai mare",
				"Nu poti",
				"Cu grija",
				"Deschizi frigiderul pui girafa in el si apoi inchizi usa"
			],
			answerIndex: 3
		},
		 {
			question: "Unde a fost semnata Declaratia de Independenta?",
			answers: [
				"Rusia",
				"America",
				"Romania",
				"In josul paginii"
			],
			answerIndex: 3
		},
		 {
			question: "Cum pui un aligator in frigider?",
			answers: [
				"Deschizi frigiderul scoti girafa pui aligatorul in el si apoi inchizi usa",
				"Cu talent si cu valoare",
				"Nu poti ca te musca",
				"Cu forta"
			],
			answerIndex: 0
		},
		 {
			question: "Ce nu poti manca niciodata la micul dejun?",
			answers: [
				"Pranzul sau cina",
				"Cirese",
				"Mere",
				"Micul dejun"
			],
			answerIndex: 0
		}
    ];

    function get(level, index) {		
        return data[ (level - 1) * questionsPerLevel + index * 1];
    }

    function getRandom(blackList = []) {
        let index = -1;
        let isBlackListed = true;

        while (isBlackListed){
            isBlackListed = false;
            index = Math.floor((Math.random() * data.length * 100) % data.length);
            for(let b in blackList)
                if(b === data[index].question){
                    isBlackListed = true;
                    break;
                }
        }

        return data[index];
    }

    return {
        get,
        getRandom
    }
})();

module.exports = DB;