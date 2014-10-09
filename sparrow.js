(function() {
	var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  	this.$ = function(id){
  		var about = {
			Version: 1.0, 
			Name: "SparrowJS",
			Description: "DOM Made Tiny",
			Author: "Garrett Stewart",
	};

	if (id) {

		if (window === this) {
			return new $(id);
		}

		this.e = document.getElementById(id);
		return this;

	} else {
		return this;
	}		

	return this;
  	};

  	// Selected(from selector above) element functions
$.prototype = {

		// Runs on startup (when the webpage loads)
		start: function(callback) {
			window.onload = callback;
			return this;
		},

		// Hides the selected element
		hide: function() {
				this.e.style.display = 'none';
				return this;
		},

		// Shows the selected element
		show: function() {
				this.e.style.display = 'inherit';
				return this;
		},

		// Sets the background color of the selected element
		bgcolor: function(color) {
				this.e.style.background = color;
				return this;
		},

		// If the selected element is being shown, hides the selected element
		// If the selected element is hidden, shows the selected element
		toggle: function() {
				if (this.e.style.display !== 'none') {
						this.e.style.display = 'none';
				} else {
						this.e.style.display = '';
				}
				return this;
		},

		// Sets the text of the selected element
		text: function(string) {
			this.e.innerHTML = string;
			return this;
		},

		// Sets the size of the selected element
		size: function (width, height) {
			this.e.style.height = height + 'px';
			this.e.style.width = width + 'px';
			return this;
		},

		// Sets the function to be called when the selected element is clicked
		click: function(callback) {
			this.e.addEventListener('click', callback, false);
			return this;
		},

		// Sets the color of the selected element
		color: function(color) {
			this.e.style.color = color;
			return this;
		},

		// Sets the font family and font size of the selected element
		font_array: function(family, size, color) {
			this.e.style.fontFamily = family;
			if (size && color) {
				this.e.style.fontSize = size + "px";
			} else {
				return true;
			}
			return this;
		},

		// Sets the function to be called whenever the selected element is hovered over and off
		hover: function(callbackIn, callbackOut) {
			this.e.addEventListener("mouseover", callbackIn);
			this.e.addEventListener("mouseout", callbackOut || callbackIn);
			return this;
		},

		// Adds a time to transition the value of a property of the selected element
		trans: function(property, sec) {
			this.e.style.transition = property + " " + sec + "s";
			return this;
		},

		// Returns the value of the content of the selected attribute
		val: function() {
			return this.e.value;
		},

		// Gets the value of the specified attribute of the selected element
		bound: function(attribute) {
			return this.e.getAttribute(attribute);
		},

		// Gets the value of the specified custom attribute of the selected element
		ibound: function(attribute) {
			return this.e.getAttribute("data-" + attribute);
		},

		// Binds a custom attribute to the selected element
		bindCustom: function(attribute, value) {
			this.e.setAttribute("data-" + attribute, value);
			return this;
		},

		// Calls function on selected element value change
		change: function(callback) {
			this.e.addEventListener("change", callback, false);
			return this;
		},

		// Returns whether or not the selected element is focused
		focus: function() {
			return this.e === document.activeElement && document.hasFocus();
		},

		// Sets the function to be called when the selected form element is submitted
		submit: function(callback) {
			this.e.addEventListener("submit", callback, false);
			return this;
		}
};
	// Class framework, inspired by John Resig's simple javascript inheritance 
	// Which was inspired by base2 and Prototype
  	$.make = function(prop) {
    var _super = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;
   	for (var name in prop) {
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            this._super = _super[name];
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
   	function $() {
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    $.prototype = prototype;
    $.prototype.constructor = $;
    $.extend = arguments.callee;
    return $;
  };
})();
