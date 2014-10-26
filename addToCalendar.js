function addToCalendarOption(){
	var myShifts = document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
	for (var i = 0, len = myShifts.length; i < len; i++) {
		if (myShifts[i].getElementsByTagName('img').length > 0) continue;
		var addToCalendar = createAddToCalendarLink();
		var image = loadAddToCalendarImage();
		addToCalendar.appendChild(image);
		myShifts[i].appendChild(addToCalendar);
	}
}

function createAddToCalendarLink(){
	var addToCalendar = document.createElement('a');
	addToCalendar.setAttribute('title', 'Add to Google Calendar');
	return addToCalendar;
}

function loadAddToCalendarImage(){
	var image = document.createElement('img');
	image.setAttribute('src', chrome.extension.getURL('googlecalendar.png'));
	return image;
}

document.addEventListener('DOMNodeInserted', addToCalendarOption);