var url;
function create(){
        $('#dlg').dialog('open').dialog('setTitle','Создание');
        $('#fm').form('clear');
        url = 'forms/form_coordinates/save.php?appId='+appId;
}
function edit(){
        var row = $('#dg').datagrid('getSelected');
        if (row){
                $('#dlg').dialog('open').dialog('setTitle','Изменение');
                $('#fm').form('load',row);
                url = 'forms/form_coordinates/update.php?id='+row.id+'&appId='+appId;
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
                                $.post('forms/form_coordinates/destroy.php?appId='+appId,{id:row.id},function(result){
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

