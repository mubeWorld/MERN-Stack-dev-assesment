const mostOccuringTask = (taskArray)=>{
    const countMap = {}
for(i=0;i<taskArray.length;i++){
    let count = countMap[taskArray[i]]
    if(count){
        countMap[taskArray[i]] = count+1;
   
    }else{
        countMap[taskArray[i]] = 1
    }
}
const sortedArray = Object.keys(countMap).sort((a,b)=>a-b) // iam tring to sort keys based on the value
//some how this [A:2,C:3 : D: 10] 
return sortedArray[-1] // for max value
// it has constant space complexity O(1)and O(n) of linear search and O(1) for sorting
}

const DetectCycles = (graph, startNode)=>{
const seen = new Set()
const currentNode = startNode
while(currentNode){
    if(seen.has(currentNode)){
        return true;
    }else{
        seen.add(currentNode)
        currentNode = graph[currentNode]
    }
}
return false;
}