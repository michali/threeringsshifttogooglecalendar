function addCalendarImage(addToCalendar) {
		var image = loadAddToCalendarImage();
		addToCalendar.appendChild(image);
}

function createAddToGoogleCalendarLink(shift, storage){
	var addToCalendar = document.createElement('a');
	addToCalendar.setAttribute('title', 'Add to Google Calendar');
	var startDate = new Date(shift.startYear, shift.startMonth - 1, shift.startDay, shift.startHour, 0, 0, 0);
	var endDate = new Date(shift.startYear, shift.startMonth - 1, shift.startDay, shift.endHour, 0, 0, 0);

	if (shiftEndsOnNextCalendarDay(startDate, endDate)) {	
		endDate = endDate.addDays(1);
	}
	
	if (startsOnNextCalendarDayButIsOnRotaDay(shift)) {
		startDate = startDate.addDays(1);
		endDate = endDate.addDays(1);
	}
	
	storage.get({eventSubject: ''}, function(items) {
		var event = new GoogleCalendarEvent(startDate, endDate, items.eventSubject);
		addToCalendar.setAttribute('href', event.toLink());
	});
 		
	return addToCalendar;
}

function shiftEndsOnNextCalendarDay(startDate, endDate){
	return endDate.valueOf() < startDate.valueOf()
}

function startsOnNextCalendarDayButIsOnRotaDay(shift) {
	return shift.startHour < shift.previousHour;
}

function loadAddToCalendarImage(){
	var image = document.createElement('img');
	image.setAttribute('src', chrome.extension.getURL('images/googlecalendar.png'));
	return image;
}