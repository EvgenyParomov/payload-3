// storage-adapter-import-placeholder
import {postgresAdapter} from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import {UsersCollection} from "@/modules/admin/collections/user";
import {MediaCollection} from "@/modules/admin/collections/media";
import {MoviesCollection} from "@/modules/admin/collections/movie";



const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [UsersCollection, MediaCollection, MoviesCollection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    }
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})