/*
 * File: main.spec.js
 * Project: xchange-converter
 * Created: Friday, September 10th 2021, 6:04:05 am
 * Last Modified: Friday, September 10th 2021, 7:29:19 am
 * Copyright © 2021 AMDE Agência
 */

import chai, {expect} from 'chai';
import * as child from 'child_process';
import {version} from '../package.json';

const exec = child.exec;
const xConverter = 'node -r esm ./src/main.js';

/**
 * using local var (done) to finalize the async method
 * it is necessary to replace \n because this is default behavior of console.log
 */
describe('Main CLI', () => {
  it('should return the version of cli', (done) => {
    exec(`${xConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(version);
      done();
    });
  });

  it('should return the description when xConverter --help', (done) => {
    exec(`${xConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('A CLI to convert EUR to any currency provided.'))
        .to.be.true;
      done();
    });
  });
});
