export const generateQueryString = ({ id, tags }) => {
  //   const limit = 5;
  let queryString =
    tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`;
  return queryString;
};
