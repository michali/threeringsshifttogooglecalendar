chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.method == "getDefaultEventSubject"){
      sendResponse({defaultEventSubject: "eventSubject"});
	}
	else {
	  sendResponse({});
	}
  }
);