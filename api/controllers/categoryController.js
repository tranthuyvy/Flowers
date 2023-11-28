import { db } from "../db.js";

export const getCategorys = (req, res) => {
  const q = "SELECT * FROM categorys";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};
