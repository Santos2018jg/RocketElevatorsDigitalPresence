

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






// /submission form