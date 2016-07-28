$(function () {
  $('.carousel').carousel();

    var divCheck = $('#divCheck'); // asigno el elemento a la variable para manipularla despues
    divCheck.css('display', 'none'); // pongo el atributo no visible para todo el elemento


		$("#radio-0").click(function(){
            $('#radio0').prop('checked', true)
            divCheck.show("swing");
		 });

		$("#radio-1").click(function(){
			divCheck.hide("swing");
            $('#radio1').prop('checked', true)
		 });




/*

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


*/

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
