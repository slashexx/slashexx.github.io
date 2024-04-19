// // document.addEventListener("DOMContentLoaded", function() {
// //     var recentForms = document.querySelectorAll('.recent-form');

// //     recentForms.forEach(function(recentForm) {
// //         var letters = recentForm.textContent.trim();
// //         var formattedForm = "";

// //         for (var i = 0; i < letters.length; i++) {
// //             var letter = letters[i];
// //             var colorClass = letter === "W" ? "green" : letter === "L" ? "red" : "";

// //             // Wrap each letter in a span without pushing to the next line
// //             formattedForm += "<span class='circled-letter " + colorClass + "'>" + letter + "</span>";
// //         }

// //         recentForm.innerHTML = "<span style='display:inline-block'>" + formattedForm + "</span>";
// //     });
// // });
// document.addEventListener("DOMContentLoaded", function() {
//     var dropdownToggleList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
//     dropdownToggleList.forEach(function(dropdownToggleEl) {
//         dropdownToggleEl.addEventListener('click', function() {
//             var dropdownMenu = dropdownToggleEl.parentNode.querySelector('.dropdown-menu');
//             dropdownMenu.classList.toggle('show');
//         });
//     });

//     document.addEventListener('click', function(event) {
//         var isDropdownToggle = event.target.matches('.dropdown-toggle');
//         if (!isDropdownToggle) {
//             var dropdownMenus = document.querySelectorAll('.dropdown-menu');
//             dropdownMenus.forEach(function(dropdownMenu) {
//                 dropdownMenu.classList.remove('show');
//             });
//         }
//     });
// });
