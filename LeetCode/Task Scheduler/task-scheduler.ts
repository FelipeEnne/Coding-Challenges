function leastInterval(tasks: string[], n: number): number {
    if(n == 0) return tasks.length
    let taskCounter = new Map();
    let taskMaxv: number = 0;
    let taskMaxk: string = ''
    
    for(let i: number = 0; tasks.length > i; i++){
        if(!taskCounter.has(tasks[i])){
            taskCounter.set(tasks[i], 1)
        } else {
            let sum = taskCounter.get(tasks[i])
            taskCounter.set(tasks[i], sum+1)
        }
        
        if(taskMaxv < taskCounter.get(tasks[i])){
            taskMaxv = taskCounter.get(tasks[i])
            taskMaxk = tasks[i]
        }
    }
    
    let idle: number = (taskMaxv-1) * n
    
    taskCounter.forEach((value, key) => {
        
        if(key === taskMaxk) {
            return
        }
        if(taskMaxv == value) {
            idle -= value-1;
        }else{
            idle -= value;
        }
        
        
    })
    if(idle < 0) return tasks.length
    return tasks.length + idle
};