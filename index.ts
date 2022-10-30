import express, { Application, Request, Response } from "express";
const dotenv = require('dotenv');

dotenv.config({path: `${__dirname}/config.env`});

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send('TypeScript server...');
});

const port = process.env.PORT;
try {
  app.listen(port, (): void => {
    console.log(`Server running... listening on port ${port}`);
  })
} catch (err) {
  console.log(err);
}