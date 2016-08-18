import fs from 'fs';
import test from 'ava';
import postcss from 'postcss';
import dedupe from '../src/index';

function read(file) {
  return fs.readFileSync(`./fixtures/${file}.css`, 'utf8');
}

test('should removes duplicates', t => {
  const fileName = 'dedupe';
  const expected = read(`${fileName}.out`).trim();
  return postcss([dedupe()])
    .process(read(fileName))
    .then(result => {
      t.deepEqual(result.css.trim(), expected);
    });
});
