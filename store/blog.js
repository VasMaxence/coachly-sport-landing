// store/index.js
export const state = () => ({
  blogPosts: [],
  currentPage: 1,
  totalPages: null,
});

export const mutations = {
  setBlogPosts(state, { posts, totalPages }) {
    state.blogPosts = posts;
    state.totalPages = totalPages;
  },
  setCurrentPage(state, page) {
    state.currentPage = page;
  },
};
