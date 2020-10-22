//Implementation of an undirected graph
//numVertices : number of vertices
//AdjList: adjacancy list representing the graph
class Graph{
	constructor(numVertices){
		this.numVertices = numVertices;
		this.AdjList = new Map();
	}


	addVertex(v){
		this.AdjList.set(v, []); 
	}

	addEdge(v, w){
		this.AdjList.get(v).push(w);
		this.AdjList.get(w).push(v);
	}

	printGraph(){
	    // get all the vertices
	    var getKeys = this.AdjList.keys();
	 
	    // iterate over the vertices
	    for (var i of getKeys){
	        // get the corresponding adjacency list for the vertex
	        var getValues = this.AdjList.get(i);
	        var conc = "";
	 
	        // iterate over the adjacency list
	        // concatenate the values into a string
	        for (var j of getValues)
	            conc += j + " ";
	 
	        // print the vertex and its adjacency list
	        console.log(i + " -> " + conc);
	    }
	}

}

//Global variable to store the shortest path to the destination
var path = [];

//Implementation of breadth first search to find shortest path from src to dst in graph g
function solveBFS(g, src, dst){
	//Resetting path to empty array for each iteration of the function
	path = [];
	if(src == dst){
		path.push(src);
		console.log(path);
		return;
	}
	else{
		var queue = [];
		queue.push(src);

		var visited = new Map();
		visited.set(src, true);

		var prev = {};

		while(queue.length != 0){
			var node = queue.shift();
			var neighbors = g.AdjList.get(node);

			neighbors.forEach(function(next){
				if(visited.get(next) != true){
					visited.set(next, true);
					if (next == dst){
						path.push(next);
						while (node != src){
							path.push(node);
							node = prev[node];
						}
						path.push(node);
						path.reverse();
						console.log(path);
						return;
					}
					queue.push(next);
					prev[next] = node;
				}
			});
		}
	}
}

// Using the above implemented graph class.
// Values are hard-coded for the sake of this assignment.
var g = new Graph(10);
var vertices = ['CAN', 'USA', 'MEX', 'BLZ', 'GTM', 'SLV', 'HND', 'NIC', 'CRI', 'PAN' ];
 
// Adding vertices to the adjacancy list
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// Setting up the graph edges
g.addEdge('CAN', 'USA');
g.addEdge('USA', 'MEX');
g.addEdge('MEX', 'GTM');
g.addEdge('MEX', 'BLZ');
g.addEdge('BLZ', 'GTM');
g.addEdge('GTM', 'SLV');
g.addEdge('GTM', 'HND');
g.addEdge('SLV', 'HND');
g.addEdge('HND', 'NIC');
g.addEdge('NIC', 'CRI' );
g.addEdge('CRI', 'PAN');

// Source is always USA for this assignment
const src = "USA";

//Displays the graph on the console
g.printGraph();

function main(){
	document.getElementById("go").addEventListener("click", function(){
		var dst = document.getElementById("countryCode").value.toUpperCase();

		//Check if input contains only alphabets and is of length 3
		//Also check if input is a valid vertex in graph
		if(dst.match(/^[A-Za-z]{3}$/) && vertices.includes(dst)){
			solveBFS(g, src, dst);
			document.getElementById("route").innerHTML= "Here's the result : " + path.join(' -> ');
		}
		else{
			document.getElementById("route").innerHTML = "Sorry, your input is invalid. Try again.";
		}
	});
}

window.addEventListener("load", main);
