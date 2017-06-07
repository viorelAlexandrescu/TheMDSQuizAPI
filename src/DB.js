
let DB = (function () {
    let questionsPerLevel = 1;

    let data = [
        
        {
            question: "Care este capitala Germaniei?",
            answears: [
                "Berlin",
                "Copenhaga",
                "Praga",
                "Riga"
            ],
            answesrIndex: 0
        },

        
        {
            question: "Avem sirul 64, 32, 16, 8, ?, 2. Ce numar lipseste?",
            answears: [
                "1",
                "2",
                "3",
                "4"
            ],
            answesrIndex: 3
        },

        
        {
            question: "Cate zile de nastere are un om la varsta de 58 de ani?",
            answears: [
                "59",
                "58",
                "1",
                "0"
            ],
            answesrIndex: 2
        },
        {
            question: "Unele luni au 31 zile, altele doar 30. Cate au 28 de zile?",
            answears: [
                "1",
                "0",
                "toate",
                "502"
            ],
            answesrIndex: 2
        },
         
        {
            question: "Un avion cade pe fasia de granita dintre Romania si Ungaria. Unde vor fi inmormantati supravietuitorii?",
            answears: [
                "Romania",
	            "Ungaria",
	            "in tara de origine",
	            "nu vor fi inmormantati"
            ],
            answesrIndex: 3
        },
        
        {
            question: "Pe o sarma stau 9 vrabii. Un vanator impusca una. Cate mai raman pe sarma?",
            answears: [
                "1",
	            "0",
	            "8",
	            "2"
            ],
            answesrIndex: 1
        },
        {
            question: "3 pisici mananca 3 soricei in 3 minute. In cate minute mananca 100 de pisici 100 soricei?",
            answears: [
                "100 minute",
	            "300 minute",
	            "3 minute",
	            "1 minut"
            ],
            answesrIndex: 2
        },
        {
            question: "Daca a 2-a zi a lunii este vineri, atunci a 12-a zi a lunii este marti",
            answears: [
                "Adevarat",
	            "Fals",
	            "Conteaza",
	            "Categoric neimportant"
            ],
            answesrIndex: 1
        },
        {
            question: "Cate degete inelare au impreuna 7 femei?",
            answears: [
                "35",
	            "70",
	            "14",
	            "7"
            ],
            answesrIndex: 2
        },
        {
            question: "Care cer nu are stele?",
            answears: [
                "Cerul vazut de pe Marte",
	            "Cerul gurii",
	            "Cerul ziua",
	            "Cerul noaptea"
            ],
            answesrIndex: 1
        },
        {
            question: "Cine spune numai adevarul?",
            answears: [
                "Betivul",
	            "Procurorul",
	            "Copilul",
	            "Parintii"
            ],
            answesrIndex: 0
        },
        {
            question: "Cate prune poti manca dimineata pe stomacul gol?",
            answears: [
                "2",
	            "Niciuna",
	            "10",
	            "Cate vrei"
            ],
            answesrIndex: 3
        },
        {
            question: "Cine l-a batut prima oara pe Stefan cel Mare?",
            answears: [
                "Mihai Eminescu",
	            "Mama sa",
	            "Elodia",
	            "Mark Zuckerberg"
            ],
            answesrIndex: 1
        },
        {
            question: "Cum iese un cal maro din Marea Rosie?",
            answears: [
                "Tot maro",
	            "Rosu",
	            "Nu mai iese",
	            "Ud"
            ],
            answesrIndex: 3
        },
         {
            question: "Ce poti vedea cu ochii inchisi?",
            answears: [
                "Raiul",
	            "Intunericul",
	            "Mamaliga",
	            "Viitorul"
            ],
            answesrIndex: 1
        },
    ];

    function get(level, index) {
        return data[ (level - 1) * questionsPerLevel + index ];
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