export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username',
      name: 'username',
      type: 'string',
      validation: Rule => [
        Rule.required(),
        Rule.regex(/^.*@[a-z]*\..{2,}$/, { name: 'email' }),
      ],
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
  ],
};
