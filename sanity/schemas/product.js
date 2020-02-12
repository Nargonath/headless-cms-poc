export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => [Rule.required(), Rule.min(0)],
    },
    {
      title: 'Buyers',
      name: 'buyers',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: { type: 'category', validation: Rule => Rule.required() },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
