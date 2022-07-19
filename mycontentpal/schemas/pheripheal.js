export default {
  name: "pheripheal",
  title: "Peripheal",
  type: "document",
  fields: [
    {
      name: "title",
      description: "Keep titles short",
      title: "Title",
      type: "string",
    },
    { name: "description", title: "Description", type: "string" },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
