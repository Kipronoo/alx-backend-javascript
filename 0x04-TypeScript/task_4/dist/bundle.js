/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayStudents: () => (/* binding */ displayStudents)
/* harmony export */ });
var studentA = {
    firstName: "Harry",
    lastName: "Yoon",
    age: 22,
    location: "Seoul, South Korea",
};
var studentB = {
    firstName: "Anjali",
    lastName: "Prajapati",
    age: 22,
    location: "Lodz, Poland",
};
var studentsList = [
    studentA,
    studentB,
];
var styleSheet = "\n  html {\n    margin: 0;\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n  }\n  table {\n    border-collapse: collapse;\n  }\n  thead {\n    font-weight: bold;\n  }\n  td {\n    padding: 10px;\n    border: 1px solid gray;\n    cursor: pointer;\n  }\n  td:hover {\n    background: gainsboro;\n  }\n\n  td:nth-child(1) {\n    text-align: center;\n  }\n";
/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
var displayStudents = function (students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentElement('beforeend', headRow);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', "<td>" + student.firstName + "</td>");
        bodyRow.insertAdjacentHTML('beforeend', "<td>" + student.location + "</td>");
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};
displayStudents(studentsList);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUM7QUFDRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixRQUFRLEVBQUUsV0FBVztJQUNyQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxjQUFjO0NBQ3pCLENBQUM7QUFFRixJQUFNLFlBQVksR0FBbUI7SUFDbkMsUUFBUTtJQUNSLFFBQVE7Q0FDVCxDQUFDO0FBQ0YsSUFBTSxVQUFVLEdBQUcsa2VBK0JsQixDQUFDO0FBRUY7OztHQUdHO0FBQ0ksSUFBTSxlQUFlLEdBQUcsVUFBQyxRQUF3QjtJQUN0RCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM5RCxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV0RCxLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtRQUEzQixJQUFNLE9BQU87UUFDaEIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLFNBQU8sT0FBTyxDQUFDLFNBQVMsVUFBTyxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxTQUFPLE9BQU8sQ0FBQyxRQUFRLFVBQU8sQ0FBQyxDQUFDO1FBQ3hFLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdkQ7SUFFRCxLQUFLLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRUYsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlCLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxRCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDcEUsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBpbnRlcmZhY2UgU3R1ZGVudCB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbn1cbmNvbnN0IHN0dWRlbnRBOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6IFwiSGFycnlcIixcbiAgbGFzdE5hbWU6IFwiWW9vblwiLFxuICBhZ2U6IDIyLFxuICBsb2NhdGlvbjogXCJTZW91bCwgU291dGggS29yZWFcIixcbn07XG5jb25zdCBzdHVkZW50QjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiBcIkFuamFsaVwiLFxuICBsYXN0TmFtZTogXCJQcmFqYXBhdGlcIixcbiAgYWdlOiAyMixcbiAgbG9jYXRpb246IFwiTG9keiwgUG9sYW5kXCIsXG59O1xuXG5jb25zdCBzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+ID0gW1xuICBzdHVkZW50QSxcbiAgc3R1ZGVudEIsXG5dO1xuY29uc3Qgc3R5bGVTaGVldCA9IGBcbiAgaHRtbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBib2R5IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW46IDEwJTtcbiAgfVxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICB0aGVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgdGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgfVxuXG4gIHRkOm50aC1jaGlsZCgxKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG4vKipcbiAqIERpc3BsYXlzIGluZm9ybWF0aW9uIGFib3V0IHN0dWRlbnRzIGluIGEgdGFibGUuXG4gKiBAcGFyYW0gc3R1ZGVudHMgVGhlIGxpc3Qgb2Ygc3R1ZGVudHMgdG8gZGlzcGxheS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpc3BsYXlTdHVkZW50cyA9IChzdHVkZW50czogQXJyYXk8U3R1ZGVudD4pOiB2b2lkID0+IHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgaGVhZFJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8dGQ+Rmlyc3ROYW1lPC90ZD4nKTtcbiAgaGVhZFJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8dGQ+TG9jYXRpb248L3RkPicpO1xuICB0YWJsZUhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBoZWFkUm93KTtcblxuICBmb3IgKGNvbnN0IHN0dWRlbnQgb2Ygc3R1ZGVudHMpIHtcbiAgICBjb25zdCBib2R5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBib2R5Um93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDx0ZD4ke3N0dWRlbnQuZmlyc3ROYW1lfTwvdGQ+YCk7XG4gICAgYm9keVJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8dGQ+JHtzdHVkZW50LmxvY2F0aW9ufTwvdGQ+YCk7XG4gICAgdGFibGVCb2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYm9keVJvdyk7XG4gIH1cblxuICB0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRhYmxlSGVhZCk7XG4gIHRhYmxlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgdGFibGVCb2R5KTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRhYmxlKTtcbn07XG5cbmRpc3BsYXlTdHVkZW50cyhzdHVkZW50c0xpc3QpO1xuY29uc3Qgc3R5bGVTaGVldEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGVTaGVldEVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVTaGVldDtcbmRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzdHlsZVNoZWV0RWxlbWVudCk7XG5kb2N1bWVudC50aXRsZSA9ICdUYXNrIDAnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9