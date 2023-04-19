import { parse } from "csv-parse/sync";
import fs from "fs";
import { resolve } from "path";
import { prisma } from "./";

const users = () => {
  const csv = resolve("src/prisma/fixtures/user.csv");
  const data = fs.readFileSync(csv);
  const records = parse(data) as [string, string][];
  return records.map((record) =>
    prisma.user.create({
      data: {
        name: record[0],
        email: record[1],
      },
    })
  );
};

const tags = () => {
  const csv = resolve("src/prisma/fixtures/tag.csv");
  const data = fs.readFileSync(csv);
  const records = parse(data) as [string, string][];
  return records.map((record) =>
    prisma.tag.create({
      data: {
        name: record[0],
      },
    })
  );
};

async function main() {
  await prisma.$transaction([...users(), ...tags()]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
