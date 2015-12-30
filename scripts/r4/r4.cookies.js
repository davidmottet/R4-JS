;(function (window, document, undefined) {
	'use strict';
	var document = window.document, 
	message: {
		"fr": "Le site utilise des cookies pour vous offrir le meilleur service possible. En continuant votre navigation, vous en acceptez l'utilisation.",
		"en": "By continuing your visit to this site, you accept the use of cookies in accordance with our privacy policy."
	},

	link_message: {
		"fr": "En savoir plus",
		"en": "Read the article"
	},

	flavor: "chocolateCookie",

	styles: {
		container: {
			"width": "100%",
			"margin": "0 auto",
			"position": "fixed",
			"bottom": "0",
			"min-height": "auto",
			"text-align": "center",
			"padding": "10px 15px",
			"background-color": "#1D1D1D",
			"font-family": "Arial, sans-serif",
			"font-size": "13px",
			"line-height": "18px",
			"z-index": "50",
			"color": "white"
		},
		button: {
			"margin-left": "15px",
			"padding": "5px 10px",
			"background-color": "#383838",
			"font-size": "13px",
			"cursor": "pointer",
			"border-radius": "3px",
			"text-transform": "uppercase"
		},
		link: {
			"margin-left": "3px",
			"font-size": "13px",
			"color": "grey"
		}
	};

	R4.modules.cookies = {

		createInlineStyles: function(styles){

			var serialized = '';
			for ( var styleName in styles ) {
				if ( !styles.hasOwnProperty(styleName) ) {
					continue;
				}
				var styleValue = styles[styleName];
				if ( styleValue != null ) {
					serialized += styleName + ":" + styleValue + ";";
				}
			}
			return serialized || null;
		},

		getCookieLang: function(){
			return document.querySelector("html").getAttribute("lang");
		},

		haveCookie: function (_flavor) {
			if (document.cookie.indexOf(_flavor) >= 0) {
				return false;
			}
			return true;
		},

		addCookie: function(_flavor, _hunger, _size) {
			if (_size) {
				var date = new Date();
				date.setTime(date.getTime() + (_size * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			}else{
				var expires = "";
			}
			document.cookie = _flavor + "=" + _hunger + expires + "; path=/";
		},

		showCookies: function () {
			//container
			var cookie = document.createElement("div");
			cookie.textContent = this.message[this.getCookieLang()];
			cookie.id = "cookies";
			cookie.style.cssText = this.createInlineStyles(this.styles.container);
			//lien
			var cookieLink = document.createElement("a");
			cookieLink.textContent = link_message[this.getCookieLang()];
			cookieLink.href = 'http://www.cnil.fr/vos-obligations/sites-web-cookies-et-autres-traceurs/que-dit-la-loi/';
			cookieLink.target = "_blank";
			cookieLink.style.cssText = this.createInlineStyles(this.styles.link);
			//btn
			var cookieBtn = document.createElement("a");
			cookieBtn.textContent = 'OK';
			cookieBtn.style.cssText = this.createInlineStyles(this.styles.button);

			cookie.appendChild(cookieLink);
			cookie.appendChild(cookieBtn);
			document.body.appendChild(cookie);
			cookieBtn.onclick = function(){
				this.addCookie(flavor, true, 390);
				document.body.removeChild(cookie);
			}.bind(this);
		},

		setCookieStyles: function (obj) {
			if( obj.styles === undefined ){
				return;
			}
			//container
			this.styles.container["background-color"] = obj.styles.bg || this.styles.container["background-color"];
			this.styles.container["font-family"] = obj.styles.fontFamily || this.styles.container["font-family"];
			this.styles.container["color"] = obj.styles.textColor || this.styles.container["color"];
			//button
			this.styles.button["background-color"] = obj.styles.btnBg || this.styles.button["background-color"];
			this.styles.button["color"] = obj.styles.btnTextColor || this.styles.button["color"];
			this.styles.button["border-radius"] = obj.styles.btnBorderRadius || this.styles.container["border-radius"];
			//link
			this.styles.link["color"] = obj.styles.textColor || this.styles.link["color"];
		},

		init: function (obj) {
			this.setCookieStyles(obj);
			var brownie = this.haveCookie(this.flavor);
			if(brownie === true) {
				this.showCookies();
			}
		}
	}
}(window, window.document));
