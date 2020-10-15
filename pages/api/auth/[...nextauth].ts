import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
    providers: [
        Providers.GitHub({
            clientId:
                process.env.GITHUB_ID !== undefined
                    ? process.env.GITHUB_ID
                    : "",
            clientSecret:
                process.env.GITHUB_SECRET !== undefined
                    ? process.env.GITHUB_SECRET
                    : "",
        }),
    ],
    debug: process.env.NODE_ENV === "development",

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, options);
