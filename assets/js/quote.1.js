

//submission form

$(function() {
    $("#residential, #commercial, #corporate, #hybrid").hide();
    
	$('#typeBuilding').change(function(){
			if($('#typeBuilding').val() == 'Residential') {
					$('#residential').show(500);
					clear();
			} else {
					$('#residential').hide();
			}
			if ($('#typeBuilding').val() == 'Commercial') {
					$('#commercial').show(500);
					clear();
			} else {
					$('#commercial').hide();
			}
			if($('#typeBuilding').val() == 'Corporate') {
					$('#corporate').show(500);
					clear();
			} else {
					$('#corporate').hide();
			}
			if($('#typeBuilding').val() == 'Hybrid') {
					$('#hybrid').show(500);
					clear();
			} else {
					$('#hybrid').hide();
			}

	});
});

// Residential
$('.residentialInput').change(function(){

	// Todo fazer o calculo 
	var numberApp = parseInt($("#numberApp").val()); 
	var numberFloor = parseInt($("#numberFloor").val()); // valor total de andares incluindo o subsolo
	var numberBas = parseInt($("#numberBas").val()); // qdt de subsolo

	var AverageApp =  Math.ceil(numberApp/(numberFloor - numberBas));

	var cageElev =  Math.ceil(AverageApp/6);

	var column = Math.ceil(numberFloor/20);

	$("#cageElevators").val(cageElev*column);
});

// commercial
$('#numberCag').change(function(){
	$("#cageElevators").val($('#numberCag').val());
});

// ===============================================================================================================================

// corporate
$('.corporateInput').change(function(){

	
	var numberOcc = parseInt($("#numberOcc").val()); 
	var numberFloor02 = parseInt($("#numberFloor02").val()); // valor total de andares excluindo o subsolo
	var numberBas02 = parseInt($("#numberBas02").val()); // qdt de subsolo

// Todo: fazer o calculo 

	$("#cageElevators").val(numberOcc + numberFloor02 + numberBas02);
});

// ===============================================================================================================================

// Hybrid
$('.HybridInput').change(function(){

	
	var numberOcc01 = parseInt($("#numberOcc01").val()); 
	var numberFloor03 = parseInt($("#numberFloor03").val()); // valor total de andares excluindo o subsolo
	var numberBas03 = parseInt($("#numberBas03").val()); // qdt de subsolo

// Todo: fazer o calculo 

	$("#cageElevators").val(numberOcc01 + numberFloor03 + numberBas03);
});

// ===============================================================================================================================

// standard
$('#standard').click(function(){
	
	var numberCag = $('#numberCag').val();


// Todo: fazer o calculo 

	$("#taxa").val(numberCag);
	$("#precoTotal").val(numberCag);
});

// ===============================================================================================================================

// premium
$('#premium').click(function(){
	
	var numberCag = $('#numberCag').val();


// Todo: fazer o calculo 

	$("#taxa").val(numberCag);
	$("#precoTotal").val(numberCag);
});

// ===============================================================================================================================

// excelium
$('#excelium').click(function(){
	
	var numberCag = $('#numberCag').val();


// Todo: fazer o calculo 

	$("#taxa").val(numberCag);
	$("#precoTotal").val(numberCag);
});

// ===============================================================================================================================




// /submission form