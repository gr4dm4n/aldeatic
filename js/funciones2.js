  // Crear cabezote de forma dinamica
	$(".cabezote").append(
		'<a data-role="button" href="#nav-panel" class="ui-btn-left menu_superior_1"></a>'+ '<a data-role="button" href="javascript:history.back()" class="ui-btn-arrow menu_superior_3"></a>'+'<a data-role="button" href="#aldeatic_principal" data-transition="none" class="ui-btn-right menu_superior_2"></a>'+ '<a data-role="button" href=""  target="_blank" data-transition="none" class="ui-btn-logo menu_superior_logo"></a>'+ ' <div style="width:100%; text-align:center; margin-top:-25px; position: absolute; ">Aldea TIC</div>');
		    
	

 // Crear pie de forma dinamica		 + ' <div style="width:100%; text-align:center; margin-top:-25px; position: absolute; ">Aldea TIC</div>');
		      
	$(".pie").append(
		'<div id="navbar" data-role="navbar">'+
		'<ul><li>'+
		'<a href="#aldeatic_capitulo" class="capitulos" data-transition="none" onClick="capitulosf();" >'+
		'<div class="menu_inferior_2"></div>Cápsulas'+
		'</a>'+
		'<li>'+
		'<a href="#aldeatic_carta" class="carta" data-transition="none" onClick="cartaf()";  >'+
		'<div class="menu_inferior_4"></div>Lo que quieres ver'+
		'</a>'+
		'</li>'+
		'<li>'+
		'<a href="#aldeatic_cool" class="cool" data-transition="none" onClick="coolf();" >'+
		'<div class="menu_inferior_5"></div>Lo + Cool'+
		'</a>'+
		'</li>'+
		'</ul>'+
		'</div>'
		
		  
		
		);
		




	// Crear Menú Izquierdo de forma dinamica
	$(".menu_izquierdo").append(
		'<ul data-role="listview" data-theme="a" data-divider-theme="a" style="margin-top:-16px;" class="nav-search">'+
		'<li data-icon="delete" style="background-color:#111;"><a href="#" data-rel="close">- Cerrar Menú -</a></li>'+
		'<li><a href="https://www.facebook.com/AldeaTic" target="_blank">Siguenos en Facebook</a></li>'+
		'<li><a href="https://twitter.com/CanalTR3CE" target="_blank">Siguenos en Twitter</a></li>'+
		'<li><a onClick="verVersion()" > Versión </a></li>'+
		//'<li><a onClick="Salir()" > SALIR </a></li>'+
		'</ul>');	
		

		
	    var alarmageneral2 = window.localStorage.getItem("Alarma-General");
		
				  
		// Consultar Reloj del Sistema
		  var horaactual  = "";
		  var actAlarma  = true;

		  function Reloj() 
		 { 
		   var  dia = new Date(); 
		   var  hora = dia.getHours(); 
		   var  minutos = dia.getMinutes(); 
		   var  segundos = dia.getSeconds();
	  
		   if ((hora >= 0)&&(hora <= 9)){ 
			hora="0"+hora; 
		   }
	  
		   if ((minutos >= 0)&&(minutos <= 9)){ 
			minutos="0"+minutos; 
		   }
	  
		   if ((segundos >= 0)&&(segundos <= 9)){ 
			segundos="0"+segundos; 
		   }
	  
		  horaactual =  hora + ":" + minutos + ":" + segundos;
		  //console.log("hora actual: ", horaactual);
	  
		   window.setTimeout("Reloj()",5000); //revisar cada 60 segundos
		   
		   if( (alarmageneral2 == 'on')&&(actAlarma  == true)){
				  
				 var IniciaAviso = '20:50:00';
				 var FinalizaAviso = '21:00:00';
				 
				 if( (horaactual >= IniciaAviso)&&(horaactual <= FinalizaAviso) ){
					MensajeAlarma();
					actAlarma = false;
				  }
			
		   }else{}

		   
		 }// cierra reloj
		 
		 
		 
	 // Si la alarma esta activada, entonces activa la alerta
	 
		   function alertDismissed() {
			}
	 
		   function MensajeAlarma() {
			  navigator.notification.confirm(
			  'A las 9 PM va a comenzar Aldea TIC',
			  alertDismissed,      
			  'Alerta General', 
			  'Cerrar' 
		  );
		  navigator.notification.beep(1);
		  
		  }	 
   
  
   		
	 // Iniciar el Programa Streaming a las 9 PM
		  function verPrograma() 
		 { 
		 $('#navbar a').removeClass('ui-btn-active');
		 $(".vivo").addClass('ui-btn-active');
			var IniciaPrograma = '21:00:00';
			var FinalizaPrograma = '22:00:00';
			
			if( (horaactual <= IniciaPrograma)||(horaactual >= FinalizaPrograma)){
				//console.log("aqui se muestra imagen OFFLINE");	console.log("hora actual: ", horaactual);		
				$(".video_caja").html("<img src='images/video_offline.jpg' class='escala_img'/>");
			}else{
				//console.log("Programacion Online"); console.log("hora actual: ", horaactual);
			}
		  
		 }
		 
		 function capitulosf() 
		 { 
		 	 $('#navbar a').removeClass('ui-btn-active');
			 $(".capitulos").addClass('ui-btn-active');		  
		 }
		 
		 function alertasf() 
		 { 
		 $('#navbar a').removeClass('ui-btn-active');
			 $(".alertas").addClass('ui-btn-active');		  
		 }
		 
		 function cartaf() 
		 { $('#navbar a').removeClass('ui-btn-active');
			 $(".carta").addClass('ui-btn-active');		  
		 }
		 
		 function coolf() 
		 { 
		 $('#navbar a').removeClass('ui-btn-active');
			 $(".cool").addClass('ui-btn-active');		  
		 }