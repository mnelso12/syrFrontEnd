var chosenFriend = '-1';
var chosenDance = '-1';

$( document ).ready(function() {

				$("#friendTable tr").click(function() {
						console.log($(this).text());
						chosenFriend = $(this).text();
						var selected = $(this).hasClass("highlight");
						$("#friendTable tr").removeClass("highlight");
						if(!selected)
						$(this).addClass("highlight");
						});

				$("#danceTable tr").click(function() {
						console.log($(this).text());
						chosenDance = $(this).text();
						var selected = $(this).hasClass("highlight");
						$("#danceTable tr").removeClass("highlight");
						if(!selected)
						$(this).addClass("highlight");
						});
					
				$("#go").click(function() {
					leavingPage();
				});


				});

function leavingPage() {
	console.log(chosenFriend, chosenDance);
}
