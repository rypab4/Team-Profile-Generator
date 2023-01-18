//this js runs application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

//add constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Employee');
const Intern = require('./lib/Intern');

