//function uniqueNewArray(arrays) {
//    var output = [];
//    for (var i = 0; i < arrays.length; i++) {
//       output = output.concat(arrays[i]);
//    }
//    for (var i = 0; i < output.length; i++) {
//        if (output.indexOf(output[i]) !== output.lastIndexOf(output[i])) {
//            output = output.filter((item) => item !== output[i]);
//            i = -1;
//        }
//    }
//    return output;
//}
//
//var arrays = [[1, 2, 5], [1, 2, 8, 9, 10]];
//var moreArrays = [[1, 2, 5], [1, 2, 8, 9, 10], [8, 35, 24]];
//var allTheArrays = [[1, 2, 5, 20, 56, 530], [1, 2, 8, 9, 10, 47, 56, 24], [8, 35, 24, 56, 345, 23], [45, 67, 2, 4, 9, 67, 345]];
//
//console.log(uniqueNewArray(arrays));
//console.log(uniqueNewArray(moreArrays));
//console.log(uniqueNewArray(allTheArrays));
//



function findUniques (array1, array2) {
    var uniqueToArray1 = array1.filter(function(item) {
        return array2.indexOf(item) === -1;
    });
    
    var uniqueToArray2 = array2.filter(function(item) {
        return array1.indexOf(item) === -1;
    });
    
    return uniqueToArray1.concat(uniqueToArray2);
}

console.log(findUniques([1, 2, 3], [3, 4, 5]));