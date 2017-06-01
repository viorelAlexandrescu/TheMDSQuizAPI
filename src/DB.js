let DB = (function () {
    let questionsPerLevel = 1;

    let data = [
        //level 1
        {
            question: "",
            answears: [
                "A",
                "B",
                "C"
            ],
            answesrIndex: 2
        },

        //level 2
        {
            question: "",
            answears: [
                "A",
                "B",
                "C"
            ],
            answesrIndex: 0
        },

        //level 3
        {
            question: "",
            answears: [
                "A",
                "B",
                "C"
            ],
            answesrIndex: 1
        }
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