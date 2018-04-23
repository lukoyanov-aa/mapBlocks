//Переименовать
function addBlocks(){    
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

BX24.init(
    function(){
        BX24.callMethod('app.info',
            {}, 
            function(result){
                console.log(result);
            }
        );
        console.log(BX24.getAuth());
    }
);
//console.log(BX24.callMethod("app.info"));

// our application constructor
function application () {
	//this.arDealSum = {};
	//this.arInstallRaringUsers = {};
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