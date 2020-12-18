 $(function(){
 new WOW().init();

 $('.len').click(function(){
 	$('html,body').animate({scrollTop:0},500)
 })

 $(window).scroll(function(){
 	if($('body').scrollTop() >=500){
 		$('.len').addClass('lenvao')
 	}
 	else{
 		$('.len').removeClass('lenvao')
 	}

 })

 //**1sp.js**//
 $('.duoi img').click(function(event) {
 $('.duoi img').removeClass('chon');
 $(this).addClass('chon');

 anhto = $(this).attr('src');
 $('.anhto').attr({'src':anhto});
 });

 
})





 