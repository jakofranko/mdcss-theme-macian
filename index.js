var ejs  = require('ejs');
var fs   = require('fs');
var path = require('path');

module.exports = function (themeopts) {
	// set theme options object
	themeopts = Object(themeopts);

	// set theme logo
	themeopts.logo = themeopts.logo || 'https://i.imgur.com/3rqeZXi.png';

	// set theme title
	themeopts.title = themeopts.title || 'Macian Style Guide';

    // set macian css location
    themeopts.macianLocation = themeopts.macianLocation || 'https://unpkg.com/macian/macian.min.css';

	// return theme
	return function (docs) {
		// set assets directory and template
		docs.assets   = path.join(__dirname, 'assets');
		docs.template = path.join(__dirname, 'template.ejs');

		// set theme options
		docs.themeopts = themeopts;

        console.log('mdcss docs list', docs.list);

        docs.list.forEach(function(item) {console.log(item.children)});

		// return promise
		return new Promise(function (resolve, reject) {
			// read template
			fs.readFile(docs.template, 'utf8', function (error, contents) {
				// throw if template could not be read
				if (error) reject(error);
				else {
					// set compiled template
					docs.template = ejs.compile(contents)(docs);

					// resolve docs
					resolve(docs);
				}
			});
		});
	};
};

module.exports.type = 'mdcss-theme';
