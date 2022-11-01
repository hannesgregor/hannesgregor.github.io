const message = '<a data-sm-show-media-selection-on="click" href="javascript:void(0);">Contact Us</a>';
    const phoneArr = Array.from(document.body.querySelectorAll(".phone-number"));

    sm.getApi({version: 'v1'}).then((glia) => {
      const onQueueStateUpdate = (queueState) => {
        // Replace phone number elements with the control when a queue with audio or phone ability is available.
        if (queueState.state === queueState.QUEUE_STATES.CAN_QUEUE &&
            (queueState.medias.includes('audio') ||
             queueState.medias.includes('phone'))) {
          // Replace all the phone numbers with the Contact Us control.
          phoneArr.forEach((elem) => {
            elem.innerHTML = message;
          });
        // Restore the original phone numbers when no queue with audio or phone media is available.
        } else if (queueState.state === queueState.QUEUE_STATES.CANNOT_QUEUE ||
                   !(queueState.medias.includes('audio') ||
                     queueState.medias.includes('phone'))) {
          // Replace the Contact Us controls with the original phone numbers.
          phoneArr.forEach((elem) => {
            elem.innerHTML = elem.getAttribute("glia-phone-original");
          });
        }
      }

    // Store the initial situation to be able to replace it back and forth.
    phoneArr.forEach((elem) => {
      elem.setAttribute("glia-phone-original", elem.innerHTML);
    });

    // Add listener to act in case any queue state is changed.
    glia.addEventListener(glia.EVENTS.QUEUE_STATE_UPDATE, onQueueStateUpdate);
      });
