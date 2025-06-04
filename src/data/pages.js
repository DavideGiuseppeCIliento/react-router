export default {
  HOME: () => "/",
  ABOUT: () => "/about-us",
  POSTS: () => "/posts",
  POST_CREATE: () => "/posts/create",
  POST_DETAIL: (id = ":id") => `/posts/${id}`,
};
