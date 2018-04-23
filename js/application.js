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
var url;
function create(){
        $('#dlg').dialog('open').dialog('setTitle','Создание');
        $('#fm').form('clear');
        url = 'save.php';
}
function edit(){
        var row = $('#dg').datagrid('getSelected');
        if (row){
                $('#dlg').dialog('open').dialog('setTitle','Изменение');
                $('#fm').form('load',row);
                url = 'update.php?id='+row.id;
        }
}
function save(){
        $('#fm').form('submit',{
                url: url,
                onSubmit: function(){
                        return $(this).form('validate');
                },
                success: function(result){
                        var result = eval('('+result+')');
                        if (result.errorMsg){
                                $.messager.show({
                                        title: 'Error',
                                        msg: result.errorMsg
                                });
                        } else {
                                $('#dlg').dialog('close');		// close the dialog
                                $('#dg').datagrid('reload');	// reload the user data
                        }
                }
        });
}
function destroy(){
        var row = $('#dg').datagrid('getSelected');
        if (row){
                $.messager.confirm('Удаление','Вы действительно хотите удалить точку?',function(r){
                        if (r){
                                $.post('destroy.php',{id:row.id},function(result){
                                        if (result.success){
                                                $('#dg').datagrid('reload');	// reload the user data
                                        } else {
                                                $.messager.show({	// show error message
                                                        title: 'Error',
                                                        msg: result.errorMsg
                                                });
                                        }
                                },'json');
                        }
                });
        }
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