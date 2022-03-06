/* eslint-env browser */
/* global Prism */

document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('pre code[class^="lang"]'), function (code) {
        debugger;
		// set pre, wrap, opts, and get meta data from code
		var pre  = code.parentNode;
		var conf = {};
		var text = String(code.textContent || code.innerText || '');
        var lang = code.className.match(/^language-(\w+)/);

		// // get meta data from code class
		// code.className.replace(/^lang-(\w+)(?::(\w+))?/, function ($0, $1, $2) {
		// 	if ($2) return 'example:' + $2 + ',lang:' + $2;
        //
		// 	if ($1 === 'example') return 'example:html';
        //
		// 	return 'lang:' + $1;
		// }).split(/\s*,\s*/).forEach(function (opt) {
		// 	opt = opt.split(':');
        //
		// 	conf[opt.shift().trim()] = opt.join(':').trim();
		// });
        //
		// code.removeAttribute('class');

		// conditionally create code examples
		if (lang[1] in examples.lang) {
			examples.lang[lang[1]](pre, text, conf);
		}
	});
});
