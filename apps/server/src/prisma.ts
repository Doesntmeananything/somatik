import fastifyPlugin from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";

import { PrismaClient } from "database";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export const prismaPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const prisma = new PrismaClient();

  await prisma.$connect();

  server.decorate("prisma", prisma);

  server.addHook("onClose", async (server) => {
    await server.prisma.$disconnect();
  });
});
