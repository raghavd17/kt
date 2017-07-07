

$(document).ready(function() {


	// $('#popupModel').height($(window).height());

    $('#btn1').click(function() {
        $("#popupModel-popupContent").empty().load("story.html");
       slideAnimation();
    });

	$('#btn2').click(function() {
        $("#popupModel-popupContent").empty().load("monitor.html");
        slideAnimation();
    });

	$('#btn3').click(function() {
        $("#popupModel-popupContent").empty().load("banking.html");
        slideAnimation();
    });

	$('#btn4').click(function() {
        $("#popupModel-popupContent").empty().load("fold.html");
        slideAnimation();
    });

	$('#btn5').click(function() {
        $("#popupModel-popupContent").empty().load("fastsport.html");
        slideAnimation();
    });

	$('#btn6').click(function() {
        $("#popupModel-popupContent").empty().load("sleek.html");
        slideAnimation();
    });

	$('#btn7').click(function() {
        $("#popupModel-popupContent").empty().load("ninestars.html");
        slideAnimation();
    });

	$('#btn8').click(function() {
        $("#popupModel-popupContent").empty().load("point.html");
        slideAnimation();
    });

	$('#btn9').click(function() {
        $("#popupModel-popupContent").empty().load("jd.html");
        slideAnimation();
    });

	$('#btn10').click(function() {
        $("#popupModel-popupContent").empty().load("readmag.html");
        slideAnimation();
    });

	$('#btn11').click(function() {
        $("#popupModel-popupContent").empty().load("illustration.html");
        slideAnimation();
    });

	$('#btn12').click(function() {
        $("#popupModel-popupContent").empty().load("jump.html");
        slideAnimation();
    });

	$('#btn13').click(function() {
        $("#popupModel-popupContent").empty().load("bt.html");
        slideAnimation();
    });

	$('#btn14').click(function() {
        $("#popupModel-popupContent").empty().load("archive.html");
        slideAnimation();
    });

	$('#btn15').click(function() {
        $("#popupModel-popupContent").empty().load("sachin.html");
        slideAnimation();
    });

    // function

  function slideAnimation() {

    $('#popupModel').animate({marginLeft:'0'},500, function () {
        $('body').css('overflow','hidden');
		$('.btn_close').fadeIn();

      });
  }
$('.btn_close').hide();
  $('.btn_close').click(function() {
      $('.btn_close').fadeOut();
	  $('#popupModel').animate({marginLeft:'100%'},500);
      $('body').removeAttr('style');

  });

//lightbox script

	$("a#show-panel").click(function(){
		$("#lightbox, #lightbox-panel").fadeIn(500);
	});
	$("a#close-panel").click(function(){
		$("#lightbox, #lightbox-panel").fadeOut(500);
	});
// more works toggle
	$("#more").slideUp();
	$(".more-works").click(function(){
		$("#more").slideToggle();
	});


// social buttons

//$("#social").fadeOut();
	$(".social").click(function(){
		$("#social").toggle(500);
	});
});
