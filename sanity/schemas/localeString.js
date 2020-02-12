const supportedLanguages = [
  { id: 'en', title: 'English' },
  { id: 'es', title: 'Spanish' },
  { id: 'fr', title: 'French', isDefault: true },
];

export default {
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
