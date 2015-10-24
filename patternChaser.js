
function PatternChaser(str) {
    var arr = [];
    for(var i = 0; i < str.length - 1; i++) {

        for(var j = i + 2; j < str.length; j++) {
            if(str[i] === str[j]  && str[i+1] === str[j+1]) {
                arr.push(str[i] + str[i+1]);
                for(var k = 2; k < str.length - j; k++) {
                    if(str[i+k] === str[j+k]) {
                        arr[arr.length-1] += str[i+k];
                    } else {
                        break;
                    }
                }
            }
        }

    }

    var result = arr.reduce(function(acc, cur){
        return (cur.length > acc.length) ? cur: acc;
    }, "");

    return result ? "yes " + result : "no null";
}


// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(PatternChaser("da2r32a2k")); // "yes a2"
console.log(PatternChaser("sskfssbbb9bbb")); // "yes bbb"
console.log(PatternChaser("123224")); // "no null"
console.log(PatternChaser("aabejiabkfabed")); // "yes abe"