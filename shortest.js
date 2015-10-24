function ShortestPath(strArr) {
    var noOfVertex = parseInt(strArr[0]);
    var vs = [];
    for(var i = 1; i < (noOfVertex+1); i++) {
        vs.push({ id:strArr[i], dist: 1000, next: []});
    }
    vs[0].dist = 0;
    //console.log("vs", vs);

    var lines = [];
    for(var i = noOfVertex+ 1; i < strArr.length; i++) {
        var item = strArr[i].split('-');
            lines.push({b: item[0], e: item[1]});

        //lines.push({b: strArr[i][0], e: strArr[i][2]});
    }

    lines.forEach(function(line) {
        vs.forEach(function(vertex) {
            if(line.b === vertex.id) {
                vertex.next.push(line.e);
            }
        });
    });

    function find(arr, str) {
        return arr.reduce(function(acc, cur) {
            return (cur.id === str) ? cur : acc;
        }, {});
    }

    vs.forEach(function(vertex, index, arr) {
        vertex.next.forEach(function(nextId) {
            var myNext = find(vs, nextId);
            if(myNext.prev) {
                var myNextPrev = find(arr, myNext.prev);
                //console.log("have prev", vs[i].dist, myNextPrev.dist);
                if(vertex.dist < myNextPrev.dist) {
                    myNext.prev = vertex.id;
                    myNext.dist = vertex.dist + 1;
                }
            } else {
                myNext.prev = vertex.id;
                myNext.dist = vertex.dist + 1;
            }

        });
    });

    //console.log(vs);

    var path =vs[vs.length-1].id;
    var prev = vs[vs.length-1].prev;
    while(prev) {
        //console.log(prev, path);
        path = path + "-" + prev;
        prev = find(vs, prev).prev;
    }
    //console.log(path[path.length-1], vs[0].id[vs[0].id.length-1]);
    if(path[path.length-1] !== vs[0].id[vs[0].id.length-1]) return -1;


    // code goes here
    return path.split("-").reverse().join("-");

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log(ShortestPath(["5","Ac","B","C","D","F","Ac-B","Ac-C","B-C","C-D","D-F"]));
console.log(ShortestPath(["4","X","Y","Z","W","X-Y","Y-Z","X-W"]));
console.log(ShortestPath( ["4","A","B","C","D","A-B","B-D","B-C","C-D"])); // a-B-D
console.log(ShortestPath(["4","X","Y","Z","W","X-Y","Y-Z"]));
console.log(ShortestPath(["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"])); // A-E-D-F-G





//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var _stdin = "";
//
//process.stdin.on('data', function(data) {
//    _stdin += data;
//    //console.log(data);
//});
//
//process.stdin.on('end', function() {
//    var num = parseInt(_stdin.trim().replace('D', ""));
//    //console.log("num: ", num);
//    process.stdout.write("\n");
//    for(var i = 0; i <= num; i++) {
//        for(var j = 0; j < i; j++) {
//            process.stdout.write("#");
//        }
//        process.stdout.write("\n");
//    }
//});


//Input = "5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"Output = "A-C-D-F"
//Input = "4","X","Y","Z","W","X-Y","Y-Z","X-W"Output = "X-W"