export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: "title",
        type: "string",
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
