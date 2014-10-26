Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

Date.prototype.toIsoStringNoHyphensColonsMiliseconds = function(days) {
    var dat = new Date(this.valueOf());
    var isoDate = dat.toISOString();
    var noSymbolsIsoDate = isoDate.replace(/\:/g,'').replace(/-/g,'').replace('.000','');
	return noSymbolsIsoDate;
}