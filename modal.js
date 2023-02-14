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
                console.log("Atleast 1 queue is open");
                    updateQueueButtonMedia(queue.state.medias);
                    showQueueButton(button);
        } else {
            console.log("Queues are closed");
            <a data-sm-show-media-selection-on="click" href="javascript:void(0);">
  Queues are closed!
</a>
        }
})
})
});
}
