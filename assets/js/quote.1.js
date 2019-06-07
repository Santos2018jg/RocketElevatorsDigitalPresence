

//submission form

$(function() {
	$("#residential, #commercial, #corporate, #hybrid").hide();

    $('#typeBuilding').change(function(){
        if($('#typeBuilding').val() == 'None') {
            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
        }

        if($('#typeBuilding').val() == 'Residential') {
            $('#residential').show(500);
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
        }

        if($('#typeBuilding').val() == 'Commercial') {
            $('#residential').hide();
            $('#commercial').show(500);
            $('#corporate').hide();
            $('#hybrid').hide();
        }

        if($('#typeBuilding').val() == 'Corporate') {

            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').show(500);
            $('#hybrid').hide();
        }

        if($('#typeBuilding').val() == 'Hybrid') {
            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').show(500);
        }
    });
});


// ============ Hybrid ===========

$('.immeubleHybrid').change(function(){
    var numberOcc01 = parseInt($("#numberOcc01").val());
	var numberFloor03 = parseInt($("#numberFloor03").val());
	var numberBas03 = parseInt($("#numberBas03").val());
    var cageAscenseurCorporate = Math.ceil((numberFloor03 * numberOcc01) / 1000);
    var numberColonnes = Math.ceil(numberFloor03 / 20);
    var aux = cageAscenseurCorporate / numberColonnes;
    var cageEstimatedCorporate = Math.ceil(aux);
    var result = cageEstimatedCorporate * numberColonnes

	$("#cageElevators").val(Math.ceil(result));

});


// ================ standard ===========================

$('#idStandard').click(function(){

    var numberCag = $('#cageElevators').val();
    var PriceElevator = parseInt(7565);
    var percent = 0.10;
    var taxa = numberCag * PriceElevator *percent;      
    var total = numberCag * PriceElevator + taxa;       
    $("#taxa").val((taxa).toFixed(2));
    $("#precoTotal").val((total).toFixed(2));
});



// ============== premium ==================================

$('#idpremium').click(function(){
    var numberCag = $('#cageElevators').val();
    var PriceElevator = parseInt(12345);
    var percent = 0.13;
    var taxa = numberCag * PriceElevator * percent;     
    var total = numberCag * PriceElevator + taxa;   

	$("#taxa").val(taxa);

    $("#precoTotal").val(total);

});

// ========================================== excelium ========================================================================



$('#idexcelium').click(function(){
    var numberCag = $('#cageElevators').val();
    var PriceElevator = parseInt(15400);
    var percent = 0.16;
    var taxa = numberCag * PriceElevator * percent;     
    var total = numberCag * PriceElevator + taxa;   

    $("#taxa").val(taxa);

    $("#precoTotal").val(total);

});




// /submission form