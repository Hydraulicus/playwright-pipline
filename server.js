import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve(path.dirname(''));
const fileName = 'index.html';
app.use(express.static(path.join(__dirname, "dist")));
// app.use(express.static("public"));
// app.use(express.static("css"));
// app.use(express.static("js"));


app.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  res.sendFile(fileName, options, (err) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Sent:', fileName);
      }
    }
  )
});

app.listen(port,  () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
