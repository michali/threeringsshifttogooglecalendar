function addToCalendarOption(){
	var storage = new Storage();
	var viewFinder = new ViewFinder();
	var tabAccessor = new TabAccessor();
	var shiftView = viewFinder.findView(tabAccessor.getUrl());
	var myShifts = getMyShifts();
	for (var i = 0, len = myShifts.length; i < len; i++) {
		if (myShifts[i].getElementsByTagName('img').length > 0) continue;
		var addToCalendarLink = createAddToGoogleCalendarLink(shiftView, storage);
		addCalendarImage(addToCalendarLink);
		myShifts[i].appendChild(addToCalendarLink);
	}
}

document.addEventListener('DOMNodeInserted', addToCalendarOption);
addToCalendarOption();
