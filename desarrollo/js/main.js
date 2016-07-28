$(function () {
  $('.carousel').carousel();

var divCheck = $('#divCheck');
    divCheck.css('display', 'none');



		$("#radio-0").click(function(){
			divCheck.show("swing");
        if(!$("#radio0").is( ":checked" )){
              $("#radio0").attr("checked", true);
        }else{

          $("#radio0").attr("checked", false);
        }

     
		 });


		$("#radio1 ").click(function(){
			divCheck.hide("swing");
      
		});



// picker del formulario
var picker = new Pikaday(
    {
        field: document.getElementById('check'),
        
        position: 'bottom right',
        //reposition: false,
        firstDay: 1,
        format: 'D/M/YYYY',
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000,2020]
    });


});
