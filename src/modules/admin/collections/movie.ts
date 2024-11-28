import type { CollectionConfig } from 'payload'

export const MoviesCollection: CollectionConfig = {
    slug: 'movies',
    fields: [
        {type: 'text', name: 'name'},
        {type: 'upload',relationTo: 'media', name: 'poster' }
    ],
}