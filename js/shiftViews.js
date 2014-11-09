function WeekShiftView() {
	var shiftNode = document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
}

function FortnightShiftView() {

}

function MonthShiftView() {

}

function ViewFinder() {
	this.findView = function(url){
		var viewPattern = /style=\w+/;
		var viewParams = url.match(viewPattern);

		if (viewParams[0].endsWith("fortnight")){
			return new FortnightShiftView();
		}

		if (viewParams[0].endsWith("month")){
			return new MonthShiftView();
		}

		return new WeekShiftView();
	}
}

function getMyShifts(){
	return document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
}