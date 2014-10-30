function addCalendarImage(addToCalendar) {
		var image = loadAddToCalendarImage();
		addToCalendar.appendChild(image);
}

function createAddToGoogleCalendarLink(shift, storage){
	var addToCalendar = document.createElement('a');
	addToCalendar.setAttribute('title', 'Add to Google Calendar');
	var timeParts = getTimeParts(shift);
	var startDate = new Date(timeParts.startYear, timeParts.startMonth - 1, timeParts.startDay, timeParts.startHour, timeParts.startMinutes, 0, 0);
	var endDate = new Date(timeParts.startYear, timeParts.startMonth - 1, timeParts.startDay, timeParts.endHour, timeParts.endMinutes, 0, 0);

	if (shiftIncludesMidnight(startDate, endDate)) {	
		endDate = endDate.addDays(1);
	}	
	
	storage.get({eventSubject: ''}, function(items) {
		var event = new GoogleCalendarEvent(startDate, endDate, items.eventSubject);
		addToCalendar.setAttribute('href', event.toLink());
	  });
 		
	return addToCalendar;
}

function shiftIncludesMidnight(startDate, endDate){
	return endDate.valueOf() < startDate.valueOf()
}

var numberPattern = /\d+/g;

function getTimeParts(shift){
	var dateTimeElements = getAllDateTimeElementsFromShiftContainer(shift);
	return {
		startHour: dateTimeElements[0], 
		startMinutes: dateTimeElements[1], 
		endHour: dateTimeElements[2], 
		endMinutes: dateTimeElements[3],
		startYear: dateTimeElements[4],
		startMonth: dateTimeElements[5],
		startDay: dateTimeElements[6]
	}
}

function getAllDateTimeElementsFromShiftContainer(shift) {
	var shiftTimeInfoId = shift.containerWithShiftDateTimeInfoId;
	return shiftTimeInfoId.match(numberPattern);
}

function loadAddToCalendarImage(){
	var image = document.createElement('img');
	image.setAttribute('src', chrome.extension.getURL('images/googlecalendar.png'));
	return image;
}