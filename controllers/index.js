const BotDb = require('../lib/db');

const dbPath = process.env.DB_PATH || '';
const botDb = new BotDb(dbPath);

const getAllWords = async (req, res) => {
  try {
    const words = await botDb.getAllWords();
    res.status(200).json(words);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWord = async (req, res) => {
  const { id } = req.query;

  try {
    const word = await botDb.getWord(id);
    res.status(200).json(word);
  } catch (err) {
    res.status(500).json(err);
  }
};

const postWord = async (req, res) => {
  const { keyword, response } = req.body;

  try {
    await botDb.insertWord(keyword, response);
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteWord = async (req, res) => {
  const { id } = req.body;

  try {
    await botDb.deleteWord(id);
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateWord = async (req, res) => {
  const { id, keyword, response } = req.body;

  try {
    await botDb.updateWord(id, keyword, response);
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllWords,
  getWord,
  postWord,
  deleteWord,
  updateWord,
};
