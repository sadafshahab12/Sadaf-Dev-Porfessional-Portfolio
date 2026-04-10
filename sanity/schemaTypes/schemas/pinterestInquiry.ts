import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'inquiry',
  title: 'Pinterest Pricing Inquiries',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'plan',
      title: 'Selected Plan',
      type: 'string',
    }),
    defineField({
      name: 'niche',
      title: 'Pinterest URL / Niche',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true, 
    }),
  ],
});