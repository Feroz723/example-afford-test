const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/summary', (req, res) => {
  const tasks = req.body;
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const active = total - completed;

  res.json({ total, completed, active });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
