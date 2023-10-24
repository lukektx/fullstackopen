/* eslint no-unused-vars: 0 */
const _ = require('lodash');

const dummy = (blogs) => 1;

const totalLikes = (blogs) => blogs.reduce((total, e) => (total + e.likes), 0);

const favoriteBlog = (blogs) => {
  const mostLikes = Math.max(...blogs.map((blog) => blog.likes));
  return blogs.find((blog) => blog.likes === mostLikes);
};

const mostBlogs = (blogs) => {
  const counts = _.countBy(blogs, (blog) => blog.author);
  const maxAuthor = _.maxBy(_.keys(counts), (author) => counts[author]);
  return {
    author: maxAuthor,
    blogs: counts[maxAuthor],
  };
};

const mostLikes = (blogs) => {
  const groups = _.groupBy(blogs, (blog) => blog.author);
  const likes = _.map(_.keys(groups), (key) => ({
    author: key,
    likes: _.sumBy(groups[key], 'likes'),
  }));
  return _.maxBy(likes, 'likes');

  // const maxLikes = _.maxBy(_.keys(counts), (author) => counts[author]);
  // return {
  //   author: maxAuthor,
  //   blogs: counts[maxAuthor],
  // };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
