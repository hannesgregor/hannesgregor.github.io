function checkStats(){
sm.getApi({version: 'v1'}).then(function(salemove) {
        salemove.getQueues().then(function(queues) {
                var queueIds = queues.map(function(queue) {
                        console.log(queue.id);
                        return queue.id;
    });
    salemove.subscribeToQueueStateUpdates(queueIds, function(queue) {
        var queueButton = document.getElementById("btn");
        if (queue.state.status === queue.state.STATUSES.OPEN) {
                console.log("Atleast 1 queue is open and accepting visitors");
                var engagementRequest = salemove.requestEngagement('text');
                    engagementRequest.engagementPromise.then(function(engagement) {
                      ...
                    }).catch(function(error) {
                      if (error.cause === salemove.ERRORS.OPERATOR_DECLINED) {
                        console.log("Operator declined");
                      } else {
                        console.log("Something went wrong");
                      }
                    });
        } else {
            console.log("Queues are closed");
        }
})
})
});
}
