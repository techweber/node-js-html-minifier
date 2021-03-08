var minify = require('html-minifier').minify;

var result = minify('<html> <title> This is my page </title> <body> <p title="blah" id="moo">foo</p> </body> <html>',{
	removeAttributeQuotes: true,
	collapseWhitespace: true,
	removeTagWhitespace: true
});

console.log(result);