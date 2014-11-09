function addToCalendarOption(){
	var storage = new Storage();
	for (var i = 0, len = myShifts.length; i < len; i++) {
		if (myShifts[i].getElementsByTagName('img').length > 0) continue;
		var addToCalendarLink = createAddToGoogleCalendarLink(new WeekShiftView(), storage);
		addCalendarImage(addToCalendarLink);
		myShifts[i].appendChild(addToCalendarLink);
	}
}

document.addEventListener('DOMNodeInserted', addToCalendarOption);
addToCalendarOption();
