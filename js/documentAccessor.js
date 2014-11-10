function DocumentAccessor(){
    this.getUrl = function(){
        return document.URL;
    }

    this.getElementsByClassName = function(className){
        return document.getElementsByClassName(className);
    }
}