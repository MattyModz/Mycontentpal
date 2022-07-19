export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };

  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Pheripheal {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  body: [object];
}
