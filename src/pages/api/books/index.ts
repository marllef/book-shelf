import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "~/services/MongoServices";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
      case "POST":
        res.status(200).json({
          data: await fetchData(),
        });
        break;
      default:
        res.status(505).json({
          title: "ERROR",
          message: `O metodo ${req.method} não é suportado!`,
        });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
