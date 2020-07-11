import { Router } from 'express';

import csv from 'csvtojson';

import readline from 'readline';
import fs from 'fs';
import path from 'path';

import User from './app/models/User';

const routes = new Router();

async function convertCsvToJson(pathCsv) {
  const jsonArray = await csv().fromFile(pathCsv);

  return jsonArray;
}

function readLineByLine(pathCsv) {
  const readable = fs.createReadStream(pathCsv);

  const rl = readline.createInterface({
    input: readable,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    // Print each line
    console.log(line);
  });
}

routes.get('/', async (req, res) => {
  const pathCsv = path.join(__dirname, 'files/File.csv');

  // readLineByLine(pathCsv);
  const jsonArray = await convertCsvToJson(pathCsv);

  const users = await User.bulkCreate(jsonArray, { returning: true });

  return res.json(users);
});

export default routes;
