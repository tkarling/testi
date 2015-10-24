

function GasStation(strArr) {
    function strArrtoArr(strArr) {
        var arr = [];
        for(var i = 1; i< parseInt(strArr[0])+1; i++) {
            arr.push(strArr[i].split(':'));
        }
        return arr;
    }

    function gas(arr, no) {
        var result="impossible";
        // debugger;
        for(var i = 0; i < arr.length; i++) {
            var index = i% no, sum = 0, j=0;
            while(j < arr.length) {
                sum += parseInt(arr[index][0]) - parseInt(arr[index][1]);
                if(sum < 0) {
                    break;
                } else {
                    index = (index+1) %no;
                    ++j;
                }
            }
            // debugger;
            if(j === no) {
                result = i+1;
                break;
            }
        }
        return result;
    }

    var arr = strArrtoArr(strArr);
    return gas(arr, parseInt(strArr[0]));

    //// code goes here
    //return strArr;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log(GasStation(["4","1:1","2:2","1:2","0:1"])); // impossible
console.log(GasStation(["4","0:1","2:2","1:2","3:1"])); // 4
console.log(GasStation(["4","3:1","2:2","1:2","0:1"])); // 1
console.log(GasStation(["3","2:3","2:1","4:4"])); //

console.log(GasStation(["5","3:3","1:2","2:2","3:2","4:3"])); //
console.log(GasStation(["5","0:1","2:1","3:2","4:6","4:3"])); //
console.log(GasStation(["2","1:2","3:2"])); //
console.log(GasStation(["6","3:2","2:2","10:6","0:4","1:1","30:10"])); //
console.log(GasStation(["5","2:3","2:3","2:3","500:1","0:495"])); //
