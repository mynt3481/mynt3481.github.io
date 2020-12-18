 $(function(){
 	new WOW().init();
 	$('.len').click(function(){
 	$('html,body').animate({scrollTop:0},500)
 })


 $(window).scroll(function(){
 	if($('body').scrollTop() >=390){
 		$('button.len').addClass('lenvao')
 	}
 	else{
 		$('button.len').removeClass('lenvao')
 	}

 })
})  
 