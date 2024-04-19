// document.addEventListener("DOMContentLoaded", function() {
//     var recentForms = document.querySelectorAll('.recent-form');

//     recentForms.forEach(function(recentForm) {
//         var letters = recentForm.textContent.trim();
//         var formattedForm = "";

//         for (var i = 0; i < letters.length; i++) {
//             var letter = letters[i];
//             var colorClass = letter === "W" ? "green" : letter === "L" ? "red" : "";

//             // Wrap each letter in a span without pushing to the next line
//             formattedForm += "<span class='circled-letter " + colorClass + "'>" + letter + "</span>";
//         }

//         recentForm.innerHTML = "<span style='display:inline-block'>" + formattedForm + "</span>";
//     });
// });
