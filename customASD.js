sm.getApi({version: 'v1'}).then(function(glia) {
  function onQueueStateUpdate(queueState) {
    const element = document.querySelector('[data-sm-show-media-selection-on]');
    if (queueState.state !== queueState.QUEUE_STATES.CAN_QUEUE) {
      element.style.display = 'none';
    } else {
      element.style.display = 'inline';
    }
  }
  glia.addEventListener(glia.EVENTS.QUEUE_STATE_UPDATE, onQueueStateUpdate);
});
