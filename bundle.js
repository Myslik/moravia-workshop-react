/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var grid_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(grid_1.Grid, null), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var header_1 = __webpack_require__(4);
	var body_1 = __webpack_require__(6);
	var Grid = (function (_super) {
	    __extends(Grid, _super);
	    function Grid() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Grid.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid" },
	            React.createElement(header_1.Header, null),
	            React.createElement(body_1.Body, null)));
	    };
	    return Grid;
	}(React.Component));
	exports.Grid = Grid;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var headerCell_1 = __webpack_require__(5);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Header.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid-header" },
	            React.createElement(headerCell_1.HeaderCell, null),
	            React.createElement(headerCell_1.HeaderCell, null),
	            React.createElement(headerCell_1.HeaderCell, null)));
	    };
	    return Header;
	}(React.Component));
	exports.Header = Header;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var HeaderCell = (function (_super) {
	    __extends(HeaderCell, _super);
	    function HeaderCell() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    HeaderCell.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid-header-cell" }, "HCell"));
	    };
	    return HeaderCell;
	}(React.Component));
	exports.HeaderCell = HeaderCell;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var row_1 = __webpack_require__(7);
	var Body = (function (_super) {
	    __extends(Body, _super);
	    function Body() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Body.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid-body" },
	            React.createElement(row_1.Row, null),
	            React.createElement(row_1.Row, null),
	            React.createElement(row_1.Row, null)));
	    };
	    return Body;
	}(React.Component));
	exports.Body = Body;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var cell_1 = __webpack_require__(8);
	var Row = (function (_super) {
	    __extends(Row, _super);
	    function Row() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Row.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid-row" },
	            React.createElement(cell_1.Cell, null),
	            React.createElement(cell_1.Cell, null),
	            React.createElement(cell_1.Cell, null)));
	    };
	    return Row;
	}(React.Component));
	exports.Row = Row;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var Cell = (function (_super) {
	    __extends(Cell, _super);
	    function Cell() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Cell.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid-row-cell" }, "Cell"));
	    };
	    return Cell;
	}(React.Component));
	Cell.defaultProps = {
	    width: 100
	};
	exports.Cell = Cell;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzAwMDg1N2M0OTkyMThlMWZlODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJDZWxsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NlbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esb0NBQStCO0FBQy9CLHVDQUFzQztBQUN0QyxxQ0FBOEI7QUFFOUIsU0FBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxXQUFJLE9BQUcsRUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNyQyxDQUFDOzs7Ozs7O0FDUEYsd0I7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBK0I7QUFFL0IsdUNBQWtDO0FBQ2xDLHFDQUE4QjtBQVU5QjtLQUEwQix3QkFBdUM7S0FBakU7O0tBU0EsQ0FBQztLQVJHLHFCQUFNLEdBQU47U0FDSSxNQUFNLENBQUMsQ0FDSCw2QkFBSyxTQUFTLEVBQUMsWUFBWTthQUN2QixvQkFBQyxlQUFNLE9BQUc7YUFDVixvQkFBQyxXQUFJLE9BQUcsQ0FDTixDQUNULENBQUM7S0FDTixDQUFDO0tBQ0wsV0FBQztBQUFELEVBQUMsQ0FUeUIsS0FBSyxDQUFDLFNBQVMsR0FTeEM7QUFUWSxxQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JqQixvQ0FBK0I7QUFFL0IsMkNBQTBDO0FBTTFDO0tBQTRCLDBCQUFtQztLQUEvRDs7S0FVQSxDQUFDO0tBVEcsdUJBQU0sR0FBTjtTQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFLLFNBQVMsRUFBQyxtQkFBbUI7YUFDOUIsb0JBQUMsdUJBQVUsT0FBRzthQUNkLG9CQUFDLHVCQUFVLE9BQUc7YUFDZCxvQkFBQyx1QkFBVSxPQUFHLENBQ1osQ0FDVCxDQUFDO0tBQ04sQ0FBQztLQUNMLGFBQUM7QUFBRCxFQUFDLENBVjJCLEtBQUssQ0FBQyxTQUFTLEdBVTFDO0FBVlkseUJBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSbkIsb0NBQStCO0FBTS9CO0tBQWdDLDhCQUF1QztLQUF2RTs7S0FRQSxDQUFDO0tBUEcsMkJBQU0sR0FBTjtTQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFLLFNBQVMsRUFBQyx3QkFBd0IsWUFFakMsQ0FDVCxDQUFDO0tBQ04sQ0FBQztLQUNMLGlCQUFDO0FBQUQsRUFBQyxDQVIrQixLQUFLLENBQUMsU0FBUyxHQVE5QztBQVJZLGlDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZCLG9DQUErQjtBQUUvQixvQ0FBNEI7QUFNNUI7S0FBMEIsd0JBQWlDO0tBQTNEOztLQVVBLENBQUM7S0FURyxxQkFBTSxHQUFOO1NBQ0ksTUFBTSxDQUFDLENBQ0gsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjthQUM1QixvQkFBQyxTQUFHLE9BQUc7YUFDUCxvQkFBQyxTQUFHLE9BQUc7YUFDUCxvQkFBQyxTQUFHLE9BQUcsQ0FDTCxDQUNULENBQUM7S0FDTixDQUFDO0tBQ0wsV0FBQztBQUFELEVBQUMsQ0FWeUIsS0FBSyxDQUFDLFNBQVMsR0FVeEM7QUFWWSxxQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JqQixvQ0FBK0I7QUFFL0IscUNBQThCO0FBTTlCO0tBQXlCLHVCQUFnQztLQUF6RDs7S0FVQSxDQUFDO0tBVEcsb0JBQU0sR0FBTjtTQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7YUFDM0Isb0JBQUMsV0FBSSxPQUFHO2FBQ1Isb0JBQUMsV0FBSSxPQUFHO2FBQ1Isb0JBQUMsV0FBSSxPQUFHLENBQ04sQ0FDVCxDQUFDO0tBQ04sQ0FBQztLQUNMLFVBQUM7QUFBRCxFQUFDLENBVndCLEtBQUssQ0FBQyxTQUFTLEdBVXZDO0FBVlksbUJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSaEIsb0NBQStCO0FBTS9CO0tBQTBCLHdCQUFpQztLQUEzRDs7S0FZQSxDQUFDO0tBUEcscUJBQU0sR0FBTjtTQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFLLFNBQVMsRUFBQyxxQkFBcUIsV0FFOUIsQ0FDVCxDQUFDO0tBQ04sQ0FBQztLQUNMLFdBQUM7QUFBRCxFQUFDLENBWnlCLEtBQUssQ0FBQyxTQUFTO0FBQzlCLGtCQUFZLEdBQUc7S0FDbEIsS0FBSyxFQUFFLEdBQUc7RUFDYixDQUFDO0FBSE8scUJBQUkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzAwMDg1N2M0OTkyMThlMWZlODgiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vZ3JpZFwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEdyaWQgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElSb3csIElDb2x1bW4sIElBZGFwdGVyLCBJUXVlcnksIElTb3J0aW5nIH0gZnJvbSBcIi4vYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkU3RhdGUge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUdyaWRQcm9wcywgSUdyaWRTdGF0ZT4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPEJvZHkgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ncmlkLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uLCBJU29ydGluZyB9IGZyb20gXCIuL2FkYXB0ZXJcIjtcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gXCIuL2hlYWRlckNlbGxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlclByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUhlYWRlclByb3BzLCB2b2lkPiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGwgLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckNlbGxQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSGVhZGVyQ2VsbFByb3BzLCB2b2lkPiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLWhlYWRlci1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICBIQ2VsbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWFkZXJDZWxsLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUm93LCBJQ29sdW1uIH0gZnJvbSBcIi4vYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9yb3dcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJvZHlQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQm9keVByb3BzLCB2b2lkPiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgLz5cclxuICAgICAgICAgICAgICAgIDxSb3cgLz5cclxuICAgICAgICAgICAgICAgIDxSb3cgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2R5LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uLCBJUm93IH0gZnJvbSBcIi4vYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUm93UHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUm93UHJvcHMsIHZvaWQ+IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPENlbGwgLz5cclxuICAgICAgICAgICAgICAgIDxDZWxsIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Jvdy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNlbGxQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2VsbFByb3BzLCB2b2lkPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZ3JpZC1yb3ctY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgQ2VsbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NlbGwudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==