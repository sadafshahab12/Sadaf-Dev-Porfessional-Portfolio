import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name (Lucide)',
      description: 'Enter the name of the Lucide icon (e.g., Database, Layout, Bot)',
      type: 'string',

      options: {
        list: [
          { title: 'Database', value: 'Database' },
          { title: 'Layout', value: 'Layout' },
          { title: 'Bot', value: 'Bot' },
          { title: 'Trending Up', value: 'TrendingUp' },
          { title: 'Share', value: 'Share2' },
          { title: 'Target', value: 'Target' },
        ],
      },
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits/Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add 3 key benefits for this service',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort services on the website (1, 2, 3...)',
    }),
  ],
})