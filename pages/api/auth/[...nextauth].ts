import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Adapters from "next-auth/adapters";

const prisma = new PrismaClient();

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
        Providers.Facebook({
            clientId:
                process.env.FACEBOOK_ID !== undefined
                    ? process.env.FACEBOOK_ID
                    : "",
            clientSecret:
                process.env.FACEBOOK_SECRET !== undefined
                    ? process.env.FACEBOOK_SECRET
                    : "",
        }),
        Providers.Google({
            clientId:
                process.env.GOOGLE_ID !== undefined
                    ? process.env.GOOGLE_ID
                    : "",
            clientSecret:
                process.env.GOOGLE_SECRET !== undefined
                    ? process.env.GOOGLE_SECRET
                    : "",
        }),
    ],
    debug: process.env.NODE_ENV === "development",
    secret: process.env.AUTH_SECRET,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    adapter: Adapters.Prisma.Adapter({ prisma }),
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, options);
