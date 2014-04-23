$(document).ready(function(){
/*$('#slider1').noUiSlider({
	start: [ 4000 ],
	range: {
		'min': [  2000 ],
		'max': [ 10000 ]
	}
});*/

//knob
$(function() {
    $(".dial").knob({
		'min':-10
        ,'max':10
	});
});

/*flex menu*/
$(".flexnav").flexNav();


$('.map-toggle a').click(function() {
	$(this).parent().next(".map").slideToggle("slow");
});

$('.btn-toggle-f').click(function() {
	$('#footer').find(".footer-toggle").slideToggle("slow");
});
$('.search-btn-t').click(function() {
	$('.search-wrap').find(".search").slideToggle("slow");
});

});

$(document).ready(function(){
			$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
		});