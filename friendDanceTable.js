var chosenFriend = '-1';
var chosenDance = '-1';

var response = {
"names":[
    {"name":"Jack"}, 
    {"name":"Paul"},
    {"name":"Madelyn"}, 
    {"name":"Anna"},
    {"name":"Peter"}
]
};

$.makeRow = function (content) {
		var myRow = $('<tr style="width: 100%;">');
		var TableRow = '';
	    TableRow += "<td style='width: 100%;'><h4>" + content + "</h4></td>";
	    TableRow += "</tr>";
	    $(myRow).append(TableRow);
    return ($(myRow));
};


$.displayFriends = function (mydata) {
    $.each(mydata, function (index, val) {
	    $.each(val, function (index, blah) {
		    $.each(blah, function (index, name) {
				var myRow = $.makeRow(name);
				console.log(name);
				$(myRow).appendTo("#friendTableBody");
			});
		});
	});
};


$( document ).ready(function() {


	var mydata = eval(response);
	$.displayFriends(mydata);


	$(document).keypress(function(e) {
			if(e.which == 13) {
				if( $("#friendNameInput").val()) {
					// add new friend to list
					var newFriendName = $("#friendNameInput").val();
					var myRow = $.makeRow(newFriendName);

					// reset input box
					$(myRow).appendTo("#friendTableBody");
					$("#friendNameInput").val('');
					$("#friendInput").css("visibility", "hidden");	
					$("#friendInput").css("height", "0px");	
					
				}
			}
	});



				$("#friendTable tr").click(function() {
						console.log($(this).text());
						chosenFriend = $(this).text();
						var selected = $(this).hasClass("highlight");
						$("#personBeingSetUp").text(chosenFriend);
						$("#friendTable tr").removeClass("highlight");
						
						// adding new friend
						if ($(this).attr('id') == 'addFriend') {
							$("#friendInput").css("visibility", "visible");	
							$("#friendInput").css("height", "50px");	
						}

						if(!selected)
							$(this).addClass("highlight");
						});

				$("#danceTable tr").click(function() {
						console.log($(this).text());
						chosenDance = $(this).text();
						$("#dance").text(chosenDance);
						var selected = $(this).hasClass("highlight");
						$("#danceTable tr").removeClass("highlight");
						if(!selected)
							$(this).addClass("highlight");
						});
					
				$("#go").click(function() {
					console.log("pressed go");
					// change divs visibility
					$("#choices").css("visibility", "hidden");
					$("#choices").css("height", "0px");
					$("#syrInfo").css("visibility", "visible");
					$("#syrInfo").css("height", "1000px");
				});


				});
