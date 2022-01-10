import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthCookieApi } from "next-firebase-auth-cookies";

const loginEndpoint = (req: NextApiRequest, res: NextApiResponse) => {
  getAuthCookieApi({ req, res });
};

export default loginEndpoint;
