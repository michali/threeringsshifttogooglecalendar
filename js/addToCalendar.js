function addToCalendarOption(){
	var myShifts = document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
	for (var i = 0, len = myShifts.length; i < len; i++) {
		if (myShifts[i].getElementsByTagName('img').length > 0) continue;
		var addToCalendar = createAddToGoogleCalendarLink(myShifts[i]);
		var image = loadAddToCalendarImage();
		addToCalendar.appendChild(image);
		myShifts[i].appendChild(addToCalendar);
	}
}

var numberPattern = /\d+/g;

function createAddToGoogleCalendarLink(shift){
	var addToCalendar = document.createElement('a');
	addToCalendar.setAttribute('title', 'Add to Google Calendar');
	var containerWithShiftDateTimeInfo = shift.parentNode.parentNode.parentNode.parentNode;
	var shiftTimeInfoId = containerWithShiftDateTimeInfo.id;
	var allNumbers = shiftTimeInfoId.match(numberPattern);
	var timeParts = getTimeParts(allNumbers);
	var startDate = new Date(timeParts.startYear, timeParts.startMonth - 1, timeParts.startDay, timeParts.startHour, timeParts.startMinutes,0,0);
	var endDate = new Date(timeParts.startYear, timeParts.startMonth - 1, timeParts.startDay, timeParts.endHour, timeParts.endMinutes,0,0);

	if (endDate.valueOf() < startDate.valueOf()) {	
		endDate = endDate.addDays(1);
	}	
	
	var event = new GoogleCalendarEvent(startDate, endDate, 'Shift');
	addToCalendar.setAttribute('href', event.toLink());
	return addToCalendar;
}

function getTimeParts(allNumbers){
	return {
		startHour: allNumbers[0], 
		startMinutes: allNumbers[1], 
		endHour: allNumbers[2], 
		endMinutes: allNumbers[3],
		startYear: allNumbers[4],
		startMonth: allNumbers[5],
		startDay: allNumbers[6]
	}
}

function loadAddToCalendarImage(){
	var image = document.createElement('img');
	image.setAttribute('src', chrome.extension.getURL('images/googlecalendar.png'));
	return image;
}

document.addEventListener('DOMNodeInserted', addToCalendarOption);
addToCalendarOption();