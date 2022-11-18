import { FastifyInstance } from "fastify";

interface Querystring {
  username: string;
  password: string;
}

interface Headers {
  "h-Custom": string;
}

export const authRoutes = async (server: FastifyInstance) => {
  const { prisma } = server;

  server.get<{ Querystring: Querystring; Headers: Headers }>(
    "/auth",
    {
      preValidation: (request, reply, done) => {
        const { username, password } = request.query;
        done(username !== "admin" ? new Error("Must be admin") : undefined);
      },
    },
    async (request, reply) => {
      const customHeader = request.headers["h-Custom"];

      return `logged in!`;
    }
  );
};
