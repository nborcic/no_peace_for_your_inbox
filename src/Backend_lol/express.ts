import express, { urlencoded, json } from "express";
dotenv.config();
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

const URL = process.env.URL;
const port = process.env.PORT || 8000;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const famousList = [
  "list of email addresses you want to subscribe to",
  "scientology@gmail.com",
];

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const promises = famousList.map((famousEmail) => {
      axios.post(`${URL}/subscribe`, {
        email,
        famousEmail,
      });
    });

    await Promise.all(promises);
    res.status(200).send("Email subscribed");
  } catch (error) {
    console.error("Error subscribing:, error");
    res.status(500).send("Error subscribing");
  }
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
