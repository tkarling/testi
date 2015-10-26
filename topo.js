function topology(strArr) {
    function makeGraph(strArr) {
        function getIndex(graph, vertex) {
            return graph.reduce(function(acc, c, i, arr) {
                return (c.id === vertex) ? i: acc;
            }, -1);
        }

        var noNodes = parseInt(strArr[0]);
        var graph = [];
        for(var i = 1; i < noNodes +1 ; i++) {
            graph.push({id: strArr[i], nexts:[]});
        }
        for(var j = noNodes +1; j < strArr.length; j++) {
            var edge = strArr[j].split("-");
            var nodeI = getIndex(graph, edge[0]);
            var nextI = getIndex(graph, edge[1]);
            graph[nodeI].nexts.push(nextI);
        }

        return graph;
    }

    function topo(graph) {
        function getUnmarked(graph) {
            return graph.reduce(function(acc, c, i, arr) {
                return !acc && ! c.mark ? c : acc;
            }, false);
        }

        function visit(graph, node, sorted) {
            if(node.mark === "temp") {
                return false; // no topo, has cycle
            }

            if(!node.mark) {
                node.mark = "temp";
                for(var k=0; k < node.nexts.length; k++) {
                    if (!visit(graph, graph[node.nexts[k]], sorted)) {
                        return false; // no topo, has cycle
                    }
                }
                node.mark = "perm";
                sorted.unshift(node.id);
            }
            return true;

        }

        var sorted = [];
        var node = getUnmarked(graph);
        while (node) {
            if(! visit(graph, node, sorted)) {
                // no topo, has cycle
                sorted = "";
                break;
            };
            node = getUnmarked(graph)
        }


        return sorted ? sorted : "no topo";
    }

    var graph = makeGraph(strArr);
    return topo(graph);

}


console.log(topology( ["4","A","B","C","D","A-B","B-D","B-C","C-D"])); // a-B-C-D
console.log(topology( ["4","A","B","C","D","D-C","C-A","C-B","B-A"])); // D-C-B-A
console.log(topology( ["4","A","B","C","D","A-B","B-A","C-A","C-D"])); // false
console.log(topology( ["8","2","3","5","7","8", "9", "10", "11","7-11","7-8","11-2","11-9", "11-10", "8-9", "3-8", "3-10", "5-11"])); // a-B-C-D


//console.log(topology( ["0"]));
