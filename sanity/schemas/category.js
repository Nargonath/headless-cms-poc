export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Products',
      name: 'products',
      type: 'reference',
      to: [{ type: 'product' }],
    },
  ],
};
