const shell = require('shelljs');

shell.echo("Hello World from shell js");


// semantic versioning
// _________________________________________

// for example shelljs have the version: 0.8.5, 0 is for major, 8 is for minor, 5 is for patch changes: major.minor.patch
// if you add "^" symbol to the start: ^0.8.5 it means auto update up to major changes: 0.x.x
// if you add "~" symbol to the start: ~0.8.5 it means auto update up to minor changes: 0.8.x
// if you do not add anything to the start: 0.8.5 it means only the current version will be used