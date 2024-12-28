const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (accumulator, array) => {
    console.log(accumulator, array)
    let totalBatteries = 31
   accumulator+= array.num
   return totalBatteries
}
let totalBatteries = batteryBatches.reduce(reducer,0)

