

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



function clc() {
    
    var input = document.querySelectorAll('input[type=radio]:checked')[0];
    if(input.value == "standard" ) {
       return RadStd; 
       

    }
    if(input.value == "premium" ) {
        return RadPrem; 

    }
    if(input.value == "excelium" ){
        return RadExcl;

	}
	
}

$(".rst").val("")
document.getElementById('TotElevators').value = "0";
document.getElementById('rates').value = "10%";
document.getElementById('amount').value = "0.00$";

var RadStd = (7565 * 1.10);// Prix Standard en $
var RadPrem = (12345 * 1.13);// Prix Premium en $
var RadExcl = (15400* 1.16);// Prix Excelium en $

function CalcCom(){
    var NrElevCom = parseInt(document.getElementById('numberCag').value);
    TtNbElevCom =Math.ceil(NrElevCom);
    
    TtNbElevComRad = (TtNbElevCom * clc()).toFixed(2);
    document.getElementById('TotElevators').value = TtNbElevCom;
    document.getElementById('totElev').innerHTML = TtNbElevCom;
    document.getElementById('amounts').value = TtNbElevComRad;
    document.getElementById('amount').innerHTML = '$' + TtNbElevComRad;
    
    if(isNaN(TtNbElevComRad,TtNbElevCom) == true){
    TtNbElevComRad = document.getElementById('amounts').innerHTML = 'Calculating...';
    TtNbElevCom = document.getElementById('totElev').innerHTML = 'Calculating...';
}
}



// /submission form

