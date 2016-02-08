//  Exemple
//  -----------------------------

;(function (window, document, undefined) {
	'use strict';
	var document = window.document;
	R4.modules.SameHeight = {
    var that,
    decalage = 0,
    max_width;

		//first function to call
		init : function (_tab, _max_width){
		  that = this;
			max_width = _max_width;

			tab_elem = document.querySelectorAll(_tab.toString());

			this.resize();
		},

		resize: function () {
			that = this;
			if(window.innerWidth > max_width){
				this.searchMaxHeight(tab_elem);
				this.applySameHeight(tab_elem);
			}
			window.addEventListener('resize', function(event){
				if(window.innerWidth > max_width){
					that.resetMaxHeight(tab_elem);
					that.searchMaxHeight(tab_elem);
					that.applySameHeight(tab_elem);
				}else{
					that.resetMaxHeight(tab_elem);
				}
			});
		},

		searchMaxHeight: function (_elements) {
			max_height = 0;
			for (var i = 0, len = _elements.length; i < len; i++) {
				var elem = _elements[i];
				if(elem.offsetHeight > max_height) {
					max_height = elem.clientHeight;
				};
			};
		},

		applySameHeight: function (_elements) {
			for (var i = 0, len = _elements.length; i < len; i++) {
				var elem = _elements[i];

				elem.style.height = max_height+'px';
			};
		},

		resetMaxHeight: function (_elements) {
			for (var i = 0, len = _elements.length; i < len; i++) {
				var elem = _elements[i];

				elem.style.height = '';
			};
		}
	}
}(window, window.document));

//  MADE WITH ❤  \\
//  -----------------------------
