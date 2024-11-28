// storage-adapter-import-placeholder
import { resolve } from "node:path";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { UsersCollection } from "@/modules/admin/collections/user";
import { MediaCollection } from "@/modules/admin/collections/media";
import { MoviesCollection } from "@/modules/admin/collections/movie";
import { TagsCollection } from "@/modules/admin/collections/tag";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    UsersCollection,
    MediaCollection,
    MoviesCollection,
    TagsCollection,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  onInit: async (payload) => {
    if (process.env.NODE_ENV === "development") {
      const users = await payload.find({
        collection: "users",
      });

      if (users.docs.length === 0) {
        await payload.create({
          collection: "users",
          data: {
            email: "admin@gmail.com",
            password: "123",
            role: "admin",
          },
        });
      }

      const movies = await payload.find({
        collection: "movies",
      });

      if (movies.docs.length === 0) {
        const tag = await payload.create({
          collection: "tags",
          data: {
            name: "Anime",
          },
        });
        const tag2 = await payload.create({
          collection: "tags",
          data: {
            name: "Horor",
          },
        });

        const poster = await payload.create({
          collection: "media",
          filePath: resolve(
            __dirname,
            "../../../../src/modules/admin/stub/naruto.jpg",
          ),
          data: {
            alt: "Naruto poster",
          },
        });

        await payload.create({
          collection: "movies",
          data: {
            name: "Naruto",
            poster: poster.id,
            tags: [
              {
                relationTo: "tags",
                value: tag.id,
              },
            ],
          },
        });
        await payload.create({
          collection: "movies",
          data: {
            name: "Naruto 2",
            poster: poster.id,
            tags: [
              {
                relationTo: "tags",
                value: tag.id,
              },
            ],
          },
        });
        await payload.create({
          collection: "movies",
          data: {
            name: "Naruto 3",
            poster: poster.id,
            tags: [
              {
                relationTo: "tags",
                value: tag2.id,
              },
            ],
          },
        });
      }
    }
  },
});
