<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="css/style.css"/>
                <link rel="stylesheet" type="text/css" href="https://www.jeasyui.com/easyui/themes/default/easyui.css">
		<link rel="stylesheet" type="text/css" href="https://www.jeasyui.com/easyui/themes/icon.css">
		<link rel="stylesheet" type="text/css" href="https://www.jeasyui.com/easyui/themes/color.css">
		<link rel="stylesheet" type="text/css" href="https://www.jeasyui.com/easyui/demo/demo.css">
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.6.min.js"></script>
		<script type="text/javascript" src="../vendor/jquery-easyui-1.5.4.4/jquery.easyui.min.js"></script>
                <script type="text/javascript" src="../vendor/jquery-easyui-1.5.4.4/locale/easyui-lang-ru.js"></script>
                <script src="//api.bitrix24.com/api/v1/"></script>
                <!-- Следующие 2 скрипта переписать на PHP-->
                <script type="text/javascript" src="blocks/block_0/js/data.js"></script>
		<script type="text/javascript" src="js/application.js"></script>
                <script type="text/javascript" src="js/yaMap.js"></script> 
                <script type="text/javascript" src="js/form_coordinates.js.js"></script> 
                <!-- Переделать на YA API 2.1-->
                <script src="https://api-maps.yandex.ru/2.0/?load=package.full&amp;lang=ru-RU"" type="text/javascript"></script>
    </head>
    <body>
        <div id="app">
            <h2>Basic Tabs</h2>
            <p>Click tab strip to swap tab panel content.</p>
            <div style="margin:20px 0 10px 0;"></div>
            <div class="easyui-tabs" style="width:100%;height:500px">
                <div title="Управление приложением" style="padding:10px">                
                    <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add'" onclick="app.addBlocks();return false">Добавить блок</a>
                    <!-- Доделать реализацию-->
                    <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-remove'" onclick="app.delBlocks();return false">Удалить блок</a>                               
                </div>
                <div title="Управление координатами" style="padding:10px">
                    <!-- Реализовать пагинацию-->
                    <table id="dg" title="Координаты" class="easyui-datagrid" style="width:100%;height:250px"
                            url= 'get.php'
                            toolbar="#toolbar" pagination="false"
                            rownumbers="true" fitColumns="true" singleSelect="true">
                        <thead>
                                <tr>
                                        <th field="latitude" width="50">Долгота</th>
                                        <th field="longitude" width="50">Широта</th>

                                </tr>
                        </thead>
                    </table>
                    <div id="toolbar">
                            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="create()">Добавить точку</a>
                            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="edit()">Изменить точку</a>
                            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="destroy()">Удалить точку</a>
                    </div>
                </div>
                <div title="Как узнать координаты" style="padding:10px">
                    <div id="YMapsID"></div>
                    <div id="coord_form">                    
                        <label for="latlongmet">Координаты метки:</label>
                        <input id="latlongmet" class="Input-text">

                        <label>Масштаб: </label>
                        <input id="mapzoom" class="Input-text">

                        <label>Центр карты: </label>
                        <input id="latlongcenter" class="Input-text">                
                    </div>
                </div>            
                <div title="О приложени" data-options="iconCls:'icon-help',closable:true" style="padding:10px">
                    This is the help content.
                </div>
            </div>
        </div>  
	<div id="dlg" class="easyui-dialog" style="width:400px;height:280px;padding:10px 20px"
			closed="true" buttons="#dlg-buttons">
		<div class="ftitle">Координата</div>
		<form id="fm" method="post" novalidate>
			<div class="fitem">
				<label>Долгота:</label>
				<input name="latitude" class="easyui-textbox" required="true">
			</div>
			<div class="fitem">
				<label>Широта:</label>
				<input name="longitude" class="easyui-textbox" required="true">
			</div>			
		</form>
	</div>
	<div id="dlg-buttons">
            <!-- Переделать иконки на icon8-->
		<a href="javascript:void(0)" class="easyui-linkbutton c6" iconCls="icon-ok" onclick="save()" style="width:90px">Ок</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-cancel" onclick="javascript:$('#dlg').dialog('close')" style="width:90px">Отмена</a>
	</div>
	<script>	
            $(document).ready(function () {
                BX24.init(function(){
                    app.saveFrameWidth();                                
                    app.resizeFrame();                     
                    
                    ymaps.ready(init);
                });
            });
        </script>        
    </body>
</html>