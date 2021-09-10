#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const {version} = require('../package.json');

/*
 * File: main.js
 * Project: xchange-converter
 * Created: Friday, September 10th 2021, 6:04:05 am
 * Last Modified: Friday, September 10th 2021, 7:44:01 am
 * Copyright © 2021 AMDE Agência
 */

var program = _commander2.default;

program.version(_package.version).description('A CLI to convert EUR to any currency provided.').parse(process.argv);