
function ShortestPath(strArr) {
    function createGraph(strArr) {
        function getIndex(graph, id) {
            return graph.reduce(function(a, c, i, arr) {
                //console.log(id, a, c, i);
                return c.id === id ? i: a;
            }, 0);
        }

        function addEdge(graph, vertexId, edge) {
            graph.forEach(function(c, i, arr) {
                if(c.id === vertexId) {
                    c.neighbors.push({ id: edge, index: getIndex(graph, edge)});
                }
            });

        }

        var noOfVertex = parseInt(strArr[0]);
        var graph = [];
        for(var i = 1; i < (noOfVertex + 1); i++) {
            graph.push({ id: strArr[i], neighbors: [] });
        }
        for(var j = noOfVertex + 1; j < strArr.length; j++) {
            var edge = strArr[j].split("-");
            addEdge(graph, edge[0], edge[1]);
            addEdge(graph, edge[1], edge[0]);
        }

        return graph;
    }

    function countNexts(graph) {
        var queue = [];
        var distance = 0;
        var first = graph[graph.length -1];
        first.in = true;
        queue.push(first);
        while(queue.length > 0) {
            var v = queue.shift();
            v.neighbors.forEach(function(c, i, arr) {
                var neighbor = graph[c.index];
                if(! neighbor.in) {
                    neighbor.in = true;
                    neighbor.next = v;
                    queue.push(neighbor);
                }
            });
        }
        return graph;
    }

    function shortest(graph) {
        var item = graph[0];
        var result = item.id;
        while (item.next) {
            item = item.next;
            result += "-" + item.id;
        }
        if(result.split('-')[result.split('-').length -1] !== graph[graph.length -1].id) {
            result = -1; // not found
        }
        return result;
    }

    var graph = createGraph(strArr);
    //console.log(graph, graph[0].neighbors);
    countNexts(graph);
    return shortest(graph);
}


// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log(ShortestPath(["5","Ac","B","C","D","F","Ac-B","Ac-C","B-C","C-D","D-F"]));
console.log(ShortestPath(["4","X","Y","Z","W","X-Y","Y-Z","X-W"]));
console.log(ShortestPath( ["4","A","B","C","D","A-B","B-D","B-C","C-D"])); // a-B-D
console.log(ShortestPath(["4","X","Y","Z","W","X-Y","Y-Z"]));
console.log(ShortestPath(["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"])); // A-E-D-F-G

console.log(ShortestPath(["5","N1","N2","N3","N4","N5","N1-N3","N3-N4","N4-N5","N5-N2","N2-N1"]));



