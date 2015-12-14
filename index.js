#!/usr/bin/env node
var log = console.log.bind(console);
var fs = require('fs'),
	path = require('path'),
	jsonFile = require('jsonfile');

var moduleDirs = fs.readdirSync('node_modules').filter(function (file) {
	return fs.statSync(path.join('node_modules', file)).isDirectory();
});

var projectDirName = process.cwd().split(path.sep).reverse()[0]

var includeDirs = [];

moduleDirs.forEach(function(moduleDir){
	var packageJSON = path.join('node_modules', moduleDir, 'package.json')
	if ( fs.existsSync(packageJSON) ) {
		var packageManifest = jsonFile.readFileSync(packageJSON)
		if ( packageManifest.private ) {
			log('private module', moduleDir)
			includeDirs.push(moduleDir)
		}
	}
})

var sublimeProjectContents = {
	"folders":
		[
			{
				"path": "node_modules",
				"folder_include_patterns": includeDirs,
			},
			{
				"path": "."
			}
		]
}

jsonFile.writeFileSync(projectDirName+'.sublime-project', sublimeProjectContents, {spaces: 2})
