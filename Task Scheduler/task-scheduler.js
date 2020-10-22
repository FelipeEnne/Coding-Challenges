function leastInterval(tasks, n) {
    if (n == 0)
        return tasks.length;
    var taskCounter = new Map();
    var taskMaxv = 0;
    var taskMaxk = '';
    for (var i = 0; tasks.length > i; i++) {
        if (!taskCounter.has(tasks[i])) {
            taskCounter.set(tasks[i], 1);
        }
        else {
            var sum = taskCounter.get(tasks[i]);
            taskCounter.set(tasks[i], sum + 1);
        }
        if (taskMaxv < taskCounter.get(tasks[i])) {
            taskMaxv = taskCounter.get(tasks[i]);
            taskMaxk = tasks[i];
        }
    }
    var idle = (taskMaxv - 1) * n;
    taskCounter.forEach(function (value, key) {
        if (key === taskMaxk) {
            return;
        }
        if (taskMaxv == value) {
            idle -= value - 1;
        }
        else {
            idle -= value;
        }
    });
    if (idle < 0)
        return tasks.length;
    return tasks.length + idle;
}
;
