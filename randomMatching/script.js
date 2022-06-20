
// const mealAndDessertMatching = {
//      meals : ['steak', 'salmon', 'pasta', 'sashimi', 'taco', 'pizza', 'kebob'],
//      desserts : ['creme brulee', 'tart', 'hot chocolate fudge sundae', 'key lime pie', 'cheese cake', 'fruit bowl', 'cognac'],
//     match : [],
//     matchPicked : [],

//     mealsDessertsMatcher: function(){
//         const {meals, desserts, match} = this;
//         for(let meal of meals){
//             for(let dessert of desserts){
//                 match.push({meal, dessert})
//             }
//         }
//         return match
//     },

//     mealsDessertsSelect(times){
//         for(let i = 0; i < times; i++){
//         const pickedMatch = this.match.pop();
//         this.matchPicked.push(pickedMatch);
//         }
//         return this.matchPicked;
//     }




    
// }
// mealAndDessertMatching.mealsDessertsMatcher();
// mealAndDessertMatching.mealsDessertsSelect(19);

const makeAnotherMatch = ()=> {
    return {
        meals : ['steak', 'salmon', 'pasta', 'sashimi', 'taco', 'pizza', 'kebob'],
        desserts : ['creme brulee', 'tart', 'hot chocolate fudge sundae', 'key lime pie', 'cheese cake', 'fruit bowl', 'cognac'],
       match : [],
       matchPicked : [],
   
       mealsDessertsMatcher: function(){
           const {meals, desserts, match} = this;
           for(let meal of meals){
               for(let dessert of desserts){
                   match.push({meal, dessert})
               }
           }
           return match
       },
   
       mealsDessertsSelect(times){
           for(let i = 0; i < times; i++){
           const pickedMatch = this.match.pop();
           this.matchPicked.push(pickedMatch);
           }
           return this.matchPicked;
       }
   
   
   
   
       
   }
}

const foodMatch1 = makeAnotherMatch();
console.log(foodMatch1);
foodMatch1.mealsDessertsMatcher();
console.log(foodMatch1.match);