// JavaScript Document for project live.ly

$(window).on('resize',function(e){
	console.log(window.innerWidth);
 });	
var actnBtn = document.querySelector('.actn_button'),
		cnt = document.querySelector('#content'),
		intro = document.querySelector('#intro'),
		ldr = document.querySelector('#loader');
	$('.actn_button').on("click",function(){
		$('#content').show();
		$('#intro').css({
			"transformOrigin" : "center center",
			"transform" : "rotateX(-90deg)",
		    "visibility" : "hidden",
		    "transition" : "all 1s ease"
		 });
	});
	$(window).load(function(e){
		$('#loader').hide();
	});
	
	$('#asset1').hover(function(e){
		$(this).css('opacity',0.5);
		$('#srcBtn1').show();
	  },
	  function(e){
		  $(this).css('opacity',1);
		  $('#srcBtn1').hide();
	  }
	 );
	 
	 $('.srcBtn').hover(function(e){
		 $(this).css('background','#fff').css('color','#333').show();
	   },
	   function(e){
		   $(this).css('background','transparent').css('color','#fff');
	   }
	  ); 
	 $('#asset2').hover(function(e){
		$(this).css('opacity',0.5);
		$('#srcBtn2').show();
	  },
	  function(e){
		  $(this).css('opacity',1);
		  $('#srcBtn2').hide();
	  }
	 );
	 $('#asset3').hover(function(e){
		$(this).css('opacity',0.5);
		$('#srcBtn3').show();
	  },
	  function(e){
		  $(this).css('opacity',1);
		  $('#srcBtn3').hide();
	  }
	 );
	 $('#asset4').hover(function(e){
		$(this).css('opacity',0.5);
		$('#srcBtn4').show();
	  },
	  function(e){
		  $(this).css('opacity',1);
		  $('#srcBtn4').hide();
	  }
	 ); 

	 var ft = document.getElementById('feat'),
	     auth = document.getElementById('auth'),
		 gal = document.getElementById('gallery_wrapper');
	 gal.addEventListener('mousewheel',function(e){
		 if(e.wheelDelta == -120){
			 ft.style.display = "flex";
		 }
	 },false);
	 gal.addEventListener('DOMMouseScroll',function(e){
		 if(e.detail == 3){
			 ft.style.display = "flex";
		 }
	 },false);
     ft.addEventListener('mousewheel',function(e){
		 if(e.wheelDelta == -120){
			 auth.style.display = "block";
		   }
	     },false);
	ft.addEventListener('DOMMouseScroll',function(e){
		 if(e.detail == 3){
			 auth.style.display = "block";
		 }
	 },false);	 
	$(document).tooltip({
		position: {
			my: "center bottom-10",
			at: "center top"
		}
	});
	$('.socialbar a').hover(function(){
		$(this).addClass('hoverAction');
	   },
	    function(){
		$(this).removeClass('hoverAction');
	   }
	 );  