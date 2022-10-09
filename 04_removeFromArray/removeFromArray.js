const removeFromArray = function (array, ...args) {
    console.log(array)
    len = args.length - 1
    console.log("len")
    console.log(len)
    let myArray = []
    for (i = 0; i <= len; i++) {
        myArray.push(args[i])
    }
    console.log(myArray)
    for (let num in myArray) {
        let index = array.indexOf(myArray[num])
        console.log("index")
        console.log(index)
        // let myArray
        for (item in array) {
            console.log("myitem")
            console.log(item)
            if (item == index) {
                console.log(index)
                array.splice(index, 1)
                console.log("array")
                console.log(array)
            }
        }
    }
    return array
};


// for (let num in args) {
//     let index = array.indexOf(args[num])
//     console.log("index")
//     console.log(index)
//     let myArray
//     for (item in array) {
//         console.log("myitem")
//         console.log(item)
//         if (item == index) {
//             console.log(index)
//             myArray = (array.splice(index, 1))
//             console.log("myarray")
//             console.log(myArray)
//         }
//         else {
//             console.log(index)
//             // myArray.push(array[item])
//         }

//     }
//     console.log(myArray)
//     console.log(array)

//     return array


// }




// Do not edit below this line
module.exports = removeFromArray;


// for (let num in args) {
//     let index = (args[num])

//     let myArray = array
//     for (item in array) {
//         console.log(item)
//         if (item == index - 1) {
//             console.log(index)
//             myArray = array.splice(index, 1)
//         }
//         else {
//             console.log(index)
//             // myArray.push(array[item])
//         }

//     }
//     console.log(myArray)
//     return myArray
