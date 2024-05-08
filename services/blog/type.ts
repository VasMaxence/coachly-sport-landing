interface BlogItem {
  // only for pagination, set by API
  _page: number;

  id: string;
  title: string;
  createdDate: Date;
  mainDescription: string;
  imageUrl: string;
  imageAlt?: string;
}

interface BlogServiceResponse {
  blogItems: BlogItem[];
  currentPage: number;
  totalPages: number;
}

export { BlogItem, BlogServiceResponse };
