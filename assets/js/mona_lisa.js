// Code for this script came from Ed Welch's Astronautz blog
// http://astronautz.com/wordpress/html5-eyes-that-follow-the-mouse/

"use strict"; 

var context;
var backWidth = 960;
var backHeight = 640;
var logging = true;
var canvas;
var extraHeight;
var atlas;
var logElement;
var xCanvas;
var yCanvas;
var xMouse = 0;
var yMouse = 0;
var xMinMouse = 0;
var yMinMouse = 0;
var xMaxMouse = 400;
var yMaxMouse = 400;
var eyeRight = new Eye();
var eyeLeft = new Eye();

function getCoords(event) 
{
	xMouse = event.clientX;
	yMouse = event.clientY + window.pageYOffset;
};

// iPhone touch support
function getCoordsTouch(event) 
{
	var touch = event.touches[0];
	if (touch)
	{
		xMouse = touch.pageX;
		yMouse = touch.pageY + window.pageYOffset;
	}
};

function Eye()
{
	this.m_x;
	this.m_y;
	// m_xOrig, m_yOrig is center, between min and max pos
	this.m_xOrig;
	this.m_yOrig;
	this.m_xMin;
	this.m_xMax;
	this.m_yMin;
	this.m_yMax;
	this.m_width;
	this.m_height;
	this.m_xAtlas;
	this.m_yAtlas;
	this.setSize = function(width, height)
	{
		this.m_width = width;
		this.m_height = height;
	}
	this.setAtlas = function(x, y)
	{
		this.m_xAtlas = x;
		this.m_yAtlas = y;
	}
	this.setMax = function(x, y)
	{
		this.m_xMax = x;
		this.m_yMax = y;
	}
	this.setMin = function(x, y)
	{
		this.m_xMin = x;
		this.m_yMin = y;
	}
	this.init = function(x, y)
	{
		this.m_xOrig = (this.m_xMax-this.m_xMin)/2 + this.m_xMin;
		this.m_yOrig = (this.m_yMax-this.m_yMin)/2 + this.m_yMin;
		this.m_x = this.m_xOrig;
		this.m_y = this.m_yOrig;
	}
	this.update = function()
	{
		var xDiff = xMouse-(xCanvas+this.m_xOrig);
		var yDiff = yMouse-(yCanvas+this.m_yOrig);
		// first calculate x pos
		if (yDiff == 0)
		{
			if (xDiff > 0)
			{
				this.m_x = this.m_xMax;
			}
			else
			{
				this.m_x = this.m_xMin;
			}
			this.m_y = this.m_yOrig;
		}
		else
		{
			var slope = xDiff/yDiff;
			if (yDiff > 0)
			{
				this.m_x = slope*(this.m_xMax-this.m_xMin) + this.m_xMin;
			}
			else
			{
				this.m_x = -slope*(this.m_xMax-this.m_xMin) + this.m_xMin;
			}
		}
		// then calculate y pos
		if (xDiff == 0)
		{
			if (yDiff > 0)
			{
				this.m_y = this.m_yMax;
			}
			else
			{
				this.m_y = this.m_yMin;
			}
			this.m_x = this.m_xOrig;
		}
		else
		{
			var slope = yDiff/xDiff;
			if (xDiff > 0)
			{
				this.m_y = slope*(this.m_yMax-this.m_yMin) + this.m_yMin;
			}
			else
			{
				this.m_y = -slope*(this.m_yMax-this.m_yMin) + this.m_yMin;
			}
		}
		if (this.m_x > this.m_xMax)
		{
			this.m_x = this.m_xMax;
		}
		else if (this.m_x < this.m_xMin)
		{
			this.m_x = this.m_xMin;
		}
		if (this.m_y > this.m_yMax)
		{
			this.m_y = this.m_yMax;
		}
		else if (this.m_y < this.m_yMin)
		{
			this.m_y = this.m_yMin;
		}
	}

	this.render = function()
	{
		// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		// round it to a integer to prevent subpixel positioning
		var x = Math.round(this.m_x);
		var y = Math.round(this.m_y);
		
		context.drawImage(atlas, this.m_xAtlas, this.m_yAtlas,
			this.m_width, this.m_height, x, y, this.m_width, this.m_height);  
	}
};


function init()
{
	canvas = document.getElementById('mona_lisa');
	if (canvas.getContext)
	{
		context = canvas.getContext('2d');
	}
	else
	{
		return;
	}
	logElement = document.getElementById('log');
	atlas = new Image();  
	atlas.src = '/img/mona_lisa.svg';
	atlas.onload = function()
	{ 
		window.addEventListener ("mousemove", getCoords, true);
		// add support for iPhone, etc.
		document.addEventListener("touchstart", getCoordsTouch, true);
		// find position of canvas and store
		xCanvas = canvas.offsetLeft;
		yCanvas = canvas.offsetTop;
		var elem = canvas.offsetParent;
		while (elem)
		{
			xCanvas += elem.offsetLeft;
			yCanvas += elem.offsetTop;
			elem = elem.offsetParent;
		}

		backWidth = 315;
		backHeight = 402.5;
		canvas.width = backWidth;
		canvas.height = backHeight;
		eyeRight.setSize(6.5, 6.5);
		eyeRight.setMin(138, 62);
		eyeRight.setMax(152, 64);
		eyeRight.setAtlas(87, 80);
		eyeRight.init();
		eyeLeft.setSize(6.5, 6.5);
		eyeLeft.setMin(102, 68);
		eyeLeft.setMax(112, 70);
		eyeLeft.setAtlas(87, 80);
		eyeLeft.init();
		requestAnimFrame(render);
	};  
}

// shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 17);
              };
    })();

  
function render() 
{  
	if (logging && logElement)
	{
		logElement.innerHTML = "xMouse=" + xMouse + " yMouse=" + yMouse;
	}
	// draw base graphic first
	context.drawImage(atlas, 0, 0, backWidth, backHeight, 0, 0, backWidth, backHeight);  
	eyeRight.update();
	eyeLeft.update();
	eyeRight.render();
	eyeLeft.render();
	requestAnimFrame(render);  
}
