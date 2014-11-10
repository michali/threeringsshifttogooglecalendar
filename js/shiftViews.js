function WeekShiftView(shiftNode) {
	var numberPattern = /\d+/g;
	var containerWithShiftDateTimeInfoId = shiftNode.parentNode.parentNode.parentNode.parentNode.id;
	var dateTimeElements = shiftTimeInfoId.match(numberPattern);

	this.startHour = dateTimeElements[0];
	this.endHour = dateTimeElements[2];
	this.year = dateTimeElements[4];
	this.month = dateTimeElements[5];
	this.day = dateTimeElements[6];
}

function FortnightShiftView(shiftNode) {

}

function MonthShiftView(shiftNode) {

}

function ViewFinder(url) {
	this.findView = function(shiftNode){
		var viewPattern = /style=\w+/;
		var viewParams = url.match(viewPattern);

		if (viewParams[0].endsWith("fortnight")){
			return new FortnightShiftView(shiftNode);
		}

		if (viewParams[0].endsWith("month")){
			return new MonthShiftView(shiftNode);
		}

		return new WeekShiftView(shiftNode);
	}
}