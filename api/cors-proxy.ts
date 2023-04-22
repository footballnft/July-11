import Cors from "cors";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors({
  origin: "*",
  methods: ["GET"],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);

  const url = "https://farms-api.pancakeswap.com/price/cake";
  const response = await axios.get(url);

  res.status(200).json(response.data);
}
