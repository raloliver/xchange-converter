/*
 * File: main.js
 * Project: xchange-converter
 * Created: Friday, September 10th 2021, 6:04:05 am
 * Last Modified: Friday, September 10th 2021, 7:21:43 am
 * Copyright © 2021 AMDE Agência
 */

import commander from 'commander';
import {version} from '../package.json';
// const {version} = require('../package.json');

const program = commander;

program.version(version).parse(process.argv);
