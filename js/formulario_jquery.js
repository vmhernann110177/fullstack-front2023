$(function() {

    // En la clase se menciona tambien del evento submit que es el que no interesa,
    // pero no da ejemplo de su uso. Buscando en la web encontré lo siguente:

    $("#checaCampos").submit(
        function( event ) {
         if($("#p1").val() == "" && $("#p2").val() == "") 
         {
            // Manda un mensaje a través de JQuery
            alert( " ¡¡Los campos de Nombre y Apellidos estan vacios, colócalos por favor!! " );

            // Reproduce la alerta en la etiqueta alertas.
            $("#alertas").text("¡Los campos de Nombre y Apellidos estan vacios, colócalos por favor!" );

            // Pon en color rojo la etiqueta Nombre
            $("#lblp1").css("color", "red");
            // Haz mas grande la fuente de la etiqueta Nombre
            $("#lblp1").css("font-size", "25px");

            // Pon en color rojo la etiqueta Apellidos
            $("#lblp2").css("color", "red");
            // Haz mas grande la fuente de la etiqueta Apellidos
            $("#lblp2").css("font-size", "25px");

            $("#p1").focus();
            event.preventDefault();

         } 
        else if($("#p1").val() == "" && $("#p2").val() != "")
        {
            alert( "¡¡El campo de Nombre esta vacio, colócalo por favor!!" );

            // Reproduce la alerta en la etiqueta alertas.
            $("#alertas").text("¡El campo de Nombre esta vacio, colócalo por favor!" );

            // Pon en color rojo la etiqueta Nombre
            $("#lblp1").css("color", "red");
            // Haz mas grande la fuente de la etiqueta Nombre
            $("#lblp1").css("font-size", "25px");


            $("#lblDisponibilidad").text("font-size", "25px");

            // regresa a la normalidad a Apellidos.
            $("#lblp2").css("color", "black");
            // Haz mas grande la fuente de la etiqueta Apellidos
            $("#lblp2").css("font-size", "20px");

            $("#p1").focus();
            event.preventDefault();

        }
        else if($("#p1").val() != "" && $("#p2").val() == "")
        {
            alert( "¡¡El campo de Apellidos esta vacio, colócalo por favor!!!" );

            // Reproduce la alerta en la etiqueta alertas.
            $("#alertas").text("¡El campo de Apellidos esta vacio, colócalo por favor!" );

            // Pon en color rojo la etiqueta Apellidos
            $("#lblp2").css("color", "red");
            // Haz mas grande la fuente de la etiqueta Apellidos
            $("#lblp2").css("font-size", "25px");

            // regresa a la normalidad a Nombre's.
            $("#lblp1").css("color", "black");
            // Haz mas grande la fuente de la etiqueta Apellidos
            $("#lblp1").css("font-size", "20px");

            $("#p2").focus();
            event.preventDefault();
        }

      });

});


intContador = 0;
$("#p6").change(function(){

        intContador = intContador + 1;

        // Obten el valor del combobox que ha sido modificado, verifica la disponibilidad y proecede en consecuencia.
        valor = $("#p6").val()

        if (valor =="Pequeña") 
        {
            $("#lblDisponibilidad").text(" ¡NO DISPONIBLE!");
            $("#lblDisponibilidad").css("color", "red");
            console.log( intContador + " veces que cambia el usuario su selección");
        }
        else
        {
            $("#lblDisponibilidad").text(" ¡DISPONIBLE!");
            $("#lblDisponibilidad").css("color", "black");
            console.log( intContador + " veces que cambia el usuario su selección");
        }
});
