
let find_probability_obj = {
    0: 5, 1: 30, 2: 25, 3: 10, 4: 15, 5: 1, 6: 9, 7:5
}

let findElementWithProbability = (item1) => {
    let item = JSON.parse(JSON.stringify(item1));
    let findScore = (score) => {
        for (let i = 1; i<obj_len; i++) {  
            if (score <= item[i]){ 
                return i;
            }
        } 
    }
    let obj_len = Object.keys(item).length; 
    
    for (let i = 1; i<obj_len; i++)
        item[i] =  item[i-1] +  item[i];
    let highest_random_num = item[obj_len-1];
    let random_num = Math.floor(Math.random() * (highest_random_num)) + 1;
    let score = findScore(random_num);
    return score;
}

module.exports = findElementWithProbability;

// let run_scored = findElementWithProbability(find_probability_obj);
// console.log(run_scored);
// console.log('D');
