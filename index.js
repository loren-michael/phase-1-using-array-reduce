const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function totalBatteries(array, reducer, init){
//     let accum = init;
//     for(const element of array) {
//         accum = reducer(accum, element);
//     } return accum;
// }

const totalBatteries = batteryBatches.reduce(function(accumulator, element){return element+accumulator}, 0)