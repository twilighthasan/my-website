const express = require('express');
const path = require('path');
const speech = require('speech-to-text');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/audio', async (req, res) => {
  const text = req.query.text || '';

  try {
    const audio = await speech.synthesizeSpeech({
      text: text,
      voice: 'en-US',
      outputFormat: 'mp3'
    });

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename="audio.mp3"');
    res.send(audio);
  } catch (error) {
    res.status(500).send('Ошибка при конвертации текста в аудио');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
