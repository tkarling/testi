function SymmetricMatrix(strArr) {
    function matrix(strArray) {
        var m = [[]];
        for(var i = 0; i < strArray.length; i++) {
            if(strArray[i] === '<>') {
                m.push([]);
            } else {
                m[m.length-1].push(strArr[i]);
            }
        }
        return m;
    }

    function isPossible(m) {
        return m.reduce(function(a, c, i, arr) {
            return a && c.length === m.length;
        }, true);
    }

    function transpose(m) {
        var tm = m.map(function(v, i, arr) {
            return [];
        });

        m.forEach(function(v, i, arr) {
            v.forEach(function(vv, j) {
                tm[j][i] = vv;
            })
        });
        return tm;
    }

    function areSame(m, tm) {
        return m.reduce(function(a, c, i, arr) {
            return a && c.reduce(function(aa, cc, j) {
                    return aa && cc === tm[i][j];
                }, true);
        }, true);

    }


    var m = matrix(strArr);
    //return m;
    if(! isPossible(m)) return "not possible";
    //return "possible";
    var tm = transpose(m);
    //return tm;
    return areSame(m,tm)? "symmetric": "not symmetric";
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(SymmetricMatrix( ["1","0","1","<>","0","1","0","<>","1","0","1"]));
console.log(SymmetricMatrix( ["5","0","<>","5"]));
console.log(SymmetricMatrix( ["5","0","<>","0","5"]));
console.log(SymmetricMatrix( ["1","2","4","<>","2","1","1","<>","-4","1","-1"]));