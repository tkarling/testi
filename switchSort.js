function SwitchSort(arr) {

    function swap(arr, thisIndex, otherIndex) {
        var save = arr[thisIndex];
        arr[thisIndex] = arr[otherIndex];
        arr[otherIndex] = save;
        //console.log(arr);
    }

    function checkSorted(arr) {
        return arr.reduce(function (acc, cur, index) {
            //console.log(acc, cur, index, cur === (index +1));
            return acc && (cur === (index +1));
        }, true);
    }



    var swapCount = 0;
    var loopCount=0;
    var sorted = false;
    while(!sorted) {
        //console.log(sorted);
        arr.forEach(function(v, index, arr) {

            if(v !== (index+1) && v !== arr.length) {
                var otherIndex = index - v;
                otherIndex = otherIndex < 0 ? arr.length + otherIndex: otherIndex;
                if(arr[otherIndex] === otherIndex+1) {
                    otherIndex = index + v;
                    otherIndex = otherIndex % arr.length;
                }
                if(arr[otherIndex] !== otherIndex+1) {
                    swap(arr, index, otherIndex);
                    ++swapCount;
                }
            }
        })
        //console.log(arr);
        ++loopCount;
        sorted = checkSorted(arr) || loopCount > 10;
    };

    // code goes here
    swapCount = loopCount > 10 ? NaN : swapCount;
    //return {arr: arr, count: swapCount};
    return swapCount;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
//console.log(SwitchSort([3,1,2])); // 2
//console.log(SwitchSort([1,3,4,2])); // 2
console.log(SwitchSort([5,4,3,2,1])); // SHOULD BE 2
//console.log(SwitchSort([5,3,4,1,2])); // 4




//Using the JavaScript language, have the function SwitchSort(arr) take arr which will be an an array consisting of
// integers 1...size(arr) and determine what the fewest number of steps is in order to sort the array from least
// to greatest using the following technique: Each element E in the array can swap places with another element
// that is arr[E] spaces to the left or right the chosen element. You can loop from one end of the array to
// the other. For example: if arr is the array [1, 3, 4, 2] then you can choose the second element which is
// the number 3, and if you count 3 places to the left you'll loop around the array and end up at the number 4.
// Then you swap these elements and arr is then [1, 4, 3, 2]. From here only one more step is required, you choose
// the last element which is the number 2, count 2 places to the left and you'll reach the number 4, then you swap
// these elements and you end up with a sorted array [1, 2, 3, 4]. Your program should return an integer that
// specifies the least amount of steps needed in order to sort the array using the following switch sort technique.
//
//  The array arr will at most contain five elements and will contain at least two elements.