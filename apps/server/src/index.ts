import fastify from "fastify";

import { authRoutes } from "./auth";
import { prismaPlugin } from "./prisma";

const server = fastify({ logger: true });

server.register(prismaPlugin);

server.register(authRoutes);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
