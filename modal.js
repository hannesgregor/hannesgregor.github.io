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
            updateQueueButtonMedia(queue.state.medias);
            showQueueButton(button);
        } else {
            hideQueueButton(button);
        }
})
})
});
}
