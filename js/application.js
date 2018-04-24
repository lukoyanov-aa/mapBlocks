// our application constructor
function application () {
	//this.arDealSum = {};
	//this.arInstallRaringUsers = {};
}

application.prototype.addBlocks = function () {    
    BX24.callMethod(
        'landing.repo.register',         
        data,
        function(result)
            {
                if(result.error())
                    console.error(result.error());
                else
                    console.info(result.data());
            }
    );
}

application.prototype.delBlocks = function () {
    BX24.callMethod('landing.repo.unregister',
        {code: 'ru.webmens.yamap.jon'},
        function(result)
            {
                if(result.error())
                    console.error(result.error());
                else
                    console.info(result.data());
            }
    );
}

/* common methods */
application.prototype.resizeFrame = function () {

	var currentSize = BX24.getScrollSize();
	minHeight = currentSize.scrollHeight;
	
	if (minHeight < 700) minHeight = 700;
	BX24.resizeWindow(this.FrameWidth, minHeight);

}

application.prototype.saveFrameWidth = function () {
	this.FrameWidth = document.getElementById("app").offsetWidth;
}

// create our application
app = new application();