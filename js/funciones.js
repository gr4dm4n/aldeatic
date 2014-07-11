
// Espere a que PhoneGap inicie
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap esta listo
    function onDeviceReady() {
        //window.localStorage.setItem("eveo1", "17-09-2013");
        //var keyname = window.localStorage.key(1);

    }

    // procesa el resultado del cuadro de confirmación
    function onConfirm(button) {
        //var evento = window.localStorage.getItem("evento1");	
		//alert('Eliminado: ' + evento);
    }

    // Muestra un cuadro de dialogo personalizado
    function showAlert() {
		navigator.notification.confirm(
		'El dia de hoy tienes un evento programado',// mensaje (message)
		 onConfirm,      
		'Alerta Programada', // titulo (title)
		'Cerrar' // nombre del botón (buttonName)
    );
	navigator.notification.beep(1);
	
    }
	

	// Comienza Jquery Ready
    $(document).ready(function(){
	
		
		$("#calendario").eventCalendar({	
							eventsjson: 'http://canal13.com.co/mobileap/calendar/json/event.humanDate.json.php',
							jsonDateFormat: 'human'  // 'YYYY-MM-DD HH:MM:SS'
						});
		
			var hashTag = "%23‎FIFA";
		  	var facebookAccesToken = "497563243596126|YoOdB7LHhPU72sSetwnEd-l9hI4";
		  	var facebookfeedUrl = "https://graph.facebook.com/v1.0/search?q="+hashTag+"&type=post&access_token="+facebookAccesToken;
			
		// Trae las noticias de Lo + Cool
		$.getJSON( facebookfeedUrl, function( json ) {
			var html = "<ul>";
			$.each(json.data,function(i,fb){
			if(fb.link){
				if( ( fb.message == "undefined") || ( fb.message == "UNDEFINED") ||  ( typeof fb.message === "UNDEFINED") || ( fb.message == null) )
					html += "<li><img src='"+fb.picture+"'/></li>";
				else
					html += "<li><img src='"+fb.picture+"'/><br />"+ fb.message + "</li>";
			}else{
				html += "<li>"+ fb.message + "</li>";
			}
			});
			html += "</ul>";
			$("#caja_noticias").html(html);
			
		});
		

		

		 /* $('#caja_noticias').FeedEk({
            FeedUrl: facebookfeedUrl,		  
			TitleLinkTarget:'_blank',
            MaxCount: 10
        });*/
		
			// Trae todos los videos de youtube de la lista Aldea TIC
		 $('#ventana_youtube').FeedEk({
            FeedUrl: 'http://gdata.youtube.com/feeds/api/playlists/PLGsF4QfCJgJnlL6bwYVloWdduHxKQJ0UK?v=2',
			TitleLinkTarget:'_blank',
            MaxCount: 10
        });
		
		
			  
		   // Iniciar Reloj en tiempo Real
		 window.setTimeout('Reloj()',2000);


		  // Detectar Sistema Operativo para librerias
		 var dispositivo = navigator.userAgent.toLowerCase();
		 var os = document.getElementById('os');
		 
		  if( dispositivo.search(/android/) > -1 ){
		  		// Es Android

				// Crear Caja para Streaming Android
				$(".video_caja").append(
					'<video class="escala_img"'+
					 'src="http://cdns840stu1021.multistream.net/canaltr3celive/amlst:live/playlist.m3u8"'+
                     'poster="images/video_online.png" '+
                     'controls="" '+
                     'autoplay="false" '+
                     'tabindex="0">'+
                     '</video>');	
				
		  }else{
			    // Es iOS
				
				// Crear Caja para Streaming iOS
				$(".video_caja").append(
					'<video class="escala_img"'+
					 'src="http://cdns840stu1021.multistream.net/canaltr3celive/amlst:live/playlist.m3u8"'+
                     'poster="images/video_online.png" '+
                     'controls="" '+
                     'autoplay="false" '+
                     'tabindex="0">'+
                     '</video>');	
			}
			
			
		  // Poner fecha en solo numeros para la trivia
		  var d = new Date();
		  var month = d.getMonth()+1;
		  var day = d.getDate();
		  var fechanumero = (day<10 ? '0' : '') + day + '/' +
			  (month<10 ? '0' : '') + month + '/' +
			  d.getFullYear(); 
		  document.getElementById("fechanum").innerHTML=fechanumero;
		 
		  var fechanumero2 =  d.getFullYear() + '-' +
			  (month<10 ? '0' : '') + month + '-' +
			  (day<10 ? '0' : '') + day;
		  
		  
		   // Poner fecha en con formato para mostrar en las alertas
		  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
		  var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
		  var f = new Date();
		  document.getElementById("fechaformat").innerHTML = diasSemana[f.getDay()] + " / " + f.getDate() + " / "  + f.getFullYear(); 
		  	  
		  
		  	//Enviar comentarios o preguntas
			$("#btn_enviarcoment").on("click", function(){
				
				 var comentariosOBJ = $('#comentarios');
				 var formComentario = comentariosOBJ.val();

				 var SendEmail = function ( _comentarios) {
				    return $.ajax({
				      url: "http://irisdesarrollo.co/canal13/aldeatic/email.php",
				      type: "POST",
				      data:{ comentarios : _comentarios }
				    });
				 };

				 SendEmail(formComentario).done(function(data) {
				   
				   $("#mensajeserror-preguntas").html(data);
				    comentariosOBJ.val("");			   
				});


				
			});
			
			
				  // Mostrar todos los eventos almacenados en localstorage			  
			for (x=0; x<=localStorage.length-1; x++)  {  
				clave = localStorage.key(x); 
				 document.getElementById("eventgr").innerHTML= clave + " - " + localStorage.getItem(clave) + "";
				 
				//	Si la fecha de hoy coincide con algo el que esta guardado, entonces lanza alerta	
						if( clave == fechanumero2){
							showAlert();	
						}				 
			  }

		  
    });// cierra ready
	
	
	
		$(document).bind("pageinit", function() {
			

			// Comprobar en que estado esta el boton de la alarma general
			
			var alarmageneral = window.localStorage.getItem("Alarma-General");
			
			if( alarmageneral == 'on'){
				  $('#flipswitch').val('on').change();
			   }else{
				  $('#flipswitch').val('off').change();
			}
			
			// Apenas se cambie el boton hacer una acción
			$( "#flipswitch" ).bind( "change", function(event, ui) {

				 if( $('#flipswitch').val() == 'on'){
					window.localStorage.setItem("Alarma-General", "on");
					var keyname = window.localStorage.key(0);
		 			//console.log("Esta ON");
					
				 }else{
					window.localStorage.removeItem("Alarma-General");
					//console.log("Esta OFF");
					 
				 }

			  });

			  
		});// cierra pagainit
		
		
		
		 // Alertas - Guarda los eventos en el celular	
		 function GuardarEvento(fechaev, estadoev){
				window.localStorage.setItem(fechaev, estadoev);
				var keyname = window.localStorage.key(fechaev);
				alert("Evento Agregado: "+fechaev);
		}

		// Menu Izquierdo - Ver Versión		
		function verVersion(){
			  alert( "Aldea TIC - Versión 1.0" );
		}

		// Menu Izquierdo - Salir	
		//function Salir(){
			//if(navigator.app){
				//navigator.app.exitApp();
			//}else if(navigator.device){
				//navigator.device.exitApp();
			//}
		//}
		
		
				
		/*$(document).one('mobileinit', function () {

             $.mobile.defaultPageTransition = 'none';
			 $.mobile.allowCrossDomainPages = true;
			 $.mobile.phonegapNavigationEnabled = true
 
        });*/

