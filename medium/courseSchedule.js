// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

let visiting; // is being explored
let visited; // is already explored 
let graph;
const canFinish = function (numCourses, prerequisites) {
  graph = new Map();
  visiting = new Set();
  visited = new Set();

  for(let [v,e] of prerequisites) {
    //console.log([v,e], "this is v,e")
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v,edges);
    } else {
      graph.set(v,[e]);
    }
  }
  for (const [v,e] of graph) {
    if(DFS(v)){
      return false; 
    }
  }
  return true;
};
const DFS = function(v) {
  visiting.add(v);
  let edges = graph.get(v);

  if(edges) {
    for (let e of edges) {
      if(visited.has(e)) {
        continue;
      }
      if(visiting.has(e)) { //found e is being explored
        return true;
      }

      if(DFS(e)){ //DFS deeper if this e is cyclic
        return true;
      }
    }
  }
  visiting.delete(v); // remove from visiting set when all decedant v are visited
  visited.add(v);
  return false;
}

// test case: 

numCourses = 3
prerequisites = [[2,1], [1,0]] //expected output: true
canFinish(numCourses, prerequisites)