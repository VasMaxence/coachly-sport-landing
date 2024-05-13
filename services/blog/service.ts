import { BlogItem, BlogServiceResponse } from "./type";

///TODO: Implement fetchBlogList function

async function fecthBestBlogItem(): Promise<BlogItem[]> {
  return [
    {
      id: "1",
      title: "Un nouveau site web",
      createdDate: new Date("2023-01-01"),
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallis. Aliquam faucibus semper faucibus.\n\nNullam nibh massa, accumsan rutrum libero eget, viverra pretium magna. Aliquam venenatis eu massa id hendrerit.",
      imageUrl: "https://picsum.photos/200/300",

      _page: 1,
    },
    {
      id: "2",
      title: "Un nouveau site web",
      createdDate: new Date("2023-01-01"),
      mainDescription: "Découvrez notre nouveau site web",
      imageUrl: "https://picsum.photos/200/300",

      _page: 1,
    },
    {
      id: "3",
      title: "Un nouveau site web",
      createdDate: new Date("2023-01-01"),
      mainDescription: "Découvrez notre nouveau site web",
      imageUrl: "https://picsum.photos/200/300",

      _page: 1,
    },
  ];
}

async function fetchBlogItemById(blogId: string): Promise<BlogItem | null> {
  return {
    id: "1",
    title: "Un nouveau site web",
    createdDate: new Date("2023-01-01"),
    mainDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallis. Aliquam faucibus semper faucibus.\n\nNullam nibh massa, accumsan rutrum libero eget, viverra pretium magna. Aliquam venenatis eu massa id hendrerit.",
    imageUrl: "https://picsum.photos/200/300",

    _page: -1,
  };
}

async function fetchBlogList(page: number = 1): Promise<BlogServiceResponse> {
  try {
    const items: BlogItem[] = [
      {
        id: "1",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate condimentum malesuada. Suspendisse dignissim libero nibh, vitae bibendum arcu iaculis ac. Nullam in neque bibendum arcu malesuada convallis. Aliquam faucibus semper faucibus.\n\nNullam nibh massa, accumsan rutrum libero eget, viverra pretium magna. Aliquam venenatis eu massa id hendrerit.",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "2",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "3",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "4",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "5",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "6",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "7",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "8",
        title: "Un nouveau site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
      {
        id: "9",
        title: page === 1 ? "Un nouveau site web" : "Un autre site web",
        createdDate: new Date("2023-01-01"),
        mainDescription: "Découvrez notre nouveau site web",
        imageUrl: "https://picsum.photos/200/300",

        _page: page,
      },
    ];

    return {
      currentPage: page,
      totalPages: 4, //items.length / 9,
      blogItems: items,
    };
  } catch (e) {
    console.log(e);
    return {
      currentPage: 1,
      totalPages: 1,
      blogItems: [],
    };
  }
}

export { fetchBlogList, fetchBlogItemById, fecthBestBlogItem };
