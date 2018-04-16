//Переименовать
function myUpdate(){    
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
    }
);
//console.log(BX24.callMethod("app.info"));

var myMap, myPlacemark, coords;
$(document).ready(function() {
    ymaps.ready(init);   
});	
	

        function init () {

		//Определяем начальные параметры карты
            myMap = new ymaps.Map('YMapsID', {
                    center: [45.0523, 38.9839], 
                    zoom: 12, 
					behaviors: ['default', 'scrollZoom']
                });	
			
			//Определяем элемент управления поиск по карте	
			var SearchControl = new ymaps.control.SearchControl({noPlacemark:true});	

			//Добавляем элементы управления на карту
			 myMap.controls
				.add(SearchControl)                
                .add('zoomControl')                
                .add('typeSelector')                 
                .add('mapTools');
				
			coords = [56.326944, 44.0075];
			
			//Определяем метку и добавляем ее на карту				
			myPlacemark = new ymaps.Placemark([56.326944, 44.0075],{}, {preset: "twirl#redIcon", draggable: true});	
			
			myMap.geoObjects.add(myPlacemark);			
	
			//Отслеживаем событие перемещения метки
			myPlacemark.events.add("dragend", function (e) {			
			coords = this.geometry.getCoordinates();
			savecoordinats();
			}, myPlacemark);

			//Отслеживаем событие щелчка по карте
			myMap.events.add('click', function (e) {        
            coords = e.get('coordPosition');
			savecoordinats();
			});	
	
	//Отслеживаем событие выбора результата поиска
	SearchControl.events.add("resultselect", function (e) {
		coords = SearchControl.getResultsArray()[0].geometry.getCoordinates();
		savecoordinats();
	});
	
	//Ослеживаем событие изменения области просмотра карты - масштаб и центр карты
	myMap.events.add('boundschange', function (event) {
    if (event.get('newZoom') != event.get('oldZoom')) {		
        savecoordinats();
    }
	  if (event.get('newCenter') != event.get('oldCenter')) {		
        savecoordinats();
    }
	
	});
			
    }
	
	//Функция для передачи полученных значений в форму
	function savecoordinats (){	
	var new_coords = [coords[0].toFixed(4), coords[1].toFixed(4)];	
	myPlacemark.getOverlay().getData().geometry.setCoordinates(new_coords);
	document.getElementById("latlongmet").value = new_coords;
	document.getElementById("mapzoom").value = myMap.getZoom();
	var center = myMap.getCenter();
	var new_center = [center[0].toFixed(4), center[1].toFixed(4)];	
	document.getElementById("latlongcenter").value = new_center;	
	}