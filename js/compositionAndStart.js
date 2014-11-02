function addToCalendarOption(){
	var myShifts = document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
	var storage = new Storage();
	for (var i = 0, len = myShifts.length; i < len; i++) {
		if (myShifts[i].getElementsByTagName('img').length > 0) continue;
		var addToCalendar = createAddToGoogleCalendarLink(new Shift(myShifts[i]), storage);
		addCalendarImage(addToCalendar);
		myShifts[i].appendChild(addToCalendar);
	}
}

document.addEventListener('DOMNodeInserted', addToCalendarOption);
addToCalendarOption();