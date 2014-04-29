
function _(id) {

	var about = {
			Version: 0.01, 
			Name: "SparrowJS",
			Author: "Garrett Stewart",
	};

	if (id) {

		if (window === this) {
			return new _(id);
		}

		this.e = document.getElementById(id);
		return this;

	} else {
		return about;
	}		

	return this;
}

_.prototype = {
		hide: function() {
				this.e.style.display = 'none';
				return this;
		},

		show: function() {
				this.e.style.display = 'inherit';
				return this;
		},

		bgcolor: function(color) {
				this.e.style.background = color;
				return this;
		},

		toggle: function() {
				if (this.e.style.display !== 'none') {
						this.e.style.display = 'none';
				} else {
						this.e.style.display = '';
				}
				return this;
		},

		text: function(string) {
			this.e.innerHTML = string;
			return this;
		},

		size: function (width, height) {
			this.e.style.height = height + 'px';
			this.e.style.width = width + 'px';
			return this;
		},

		click: function(callback) {
			this.e.addEventListener('click', callback, false);
			return this;
		},

		color: function(color) {
			this.e.style.color = color;
			return this;
		},

		font_array: function(family, size) {
			this.e.style.fontFamily = family;
			if (size) {
				this.e.style.fontSize = size + "px";
			} else {
				return true;
			}
			return this;
		},

		hover: function(callbackIn, callbackOut) {
			this.mouseenter(callbackIn).mouseleave(callbackOut);
			return this;
		}
};
