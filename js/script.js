$(document).ready(function(){
/*$('#slider1').noUiSlider({
	start: [ 4000 ],
	range: {
		'min': [  2000 ],
		'max': [ 10000 ]
	}
});*/
var Link = $.noUiSlider.Link;
$('#slider1').noUiSlider({
	start: [ 50 ],
	step: 10,
	range: {
		'min': [  0 ],
		'max': [ 100 ]
	},
	serialization: {
		lower: [
			new Link({
				target: $("#slider1val")
			})
		]
	}
});
$('.slider2').noUiSlider({
	start: [ 0 ],
	step: 1,
	range: {
		'min': [  -5 ],
		'max': [ 5 ]
	},
	
});
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
});