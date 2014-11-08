function addCalendarImage(addToCalendar) {
		var image = loadAddToCalendarImage();
		addToCalendar.appendChild(image);
}

function createAddToGoogleCalendarLink(shift, storage){
	var addToCalendarLink = document.createElement('a');
	addToCalendarLink.setAttribute('title', 'Add to Google Calendar');
	var startDate = new Date(shift.startYear, shift.startMonth - 1, shift.startDay, shift.startHour, 0, 0, 0);
	var endDate = new Date(shift.startYear, shift.startMonth - 1, shift.startDay, shift.endHour, 0, 0, 0);

	if (shiftEndsOnNextCalendarDay(startDate, endDate)) {
		endDate = endDate.addDays(1);
	}

	if (shiftTakesPlaceOnCalendarDayAfterCurrentRotaDay(shift)) {
		startDate = startDate.addDays(1);
		endDate = endDate.addDays(1);
	}	
	
	storage.get({eventSubject: ''}, function(items) {
		var event = new GoogleCalendarEvent(startDate, endDate, items.eventSubject);
		addToCalendarLink.setAttribute('href', event.toLink());
	});
 		
	return addToCalendarLink;
}

function shiftTakesPlaceOnCalendarDayAfterCurrentRotaDay(shift) {
	return shift.firstShiftOfDayStartHour > shift.startHour;
}

function shiftEndsOnNextCalendarDay(startDate, endDate){
	return endDate.valueOf() < startDate.valueOf()
}

function loadAddToCalendarImage(){
	var image = document.createElement('img');
	image.setAttribute('src', chrome.extension.getURL('images/googlecalendar.png'));
	return image;
}