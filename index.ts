const express = require("express");

const app = express();
const PORT = 8000;

app.get('/', (req: any, res: any) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT} ⚡️`);
})

console.log('hello typescript !!!!');
