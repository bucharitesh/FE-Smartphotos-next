import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'terms',
      title: 'Terms',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'privacy',
      title: 'Privacy Policy',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
