const testHelper = require('./utils/test_helper');

test('dummy returns one', () => {
  const blogs = [];

  const result = testHelper.dummy(blogs);
  expect(result).toBe(1);
});

const emptyBlogs = [];

const oneBlog = [
  {
    title: 'testing', author: 'me', url: 'http://urmom.com', likes: 1, id: '653814eb1acc778a93b1fd7f',
  },
];

const threeBlogs = [
  {
    title: 'testing', author: 'me', url: 'http://urmom.com', likes: 3, id: '6538150d1acc778a93b1fd82',
  },
  {
    title: 'testing2', author: 'Luke', url: 'http://urmom.com', likes: 2, id: '65381545e79566362603b086',
  },
  {
    title: 'testing3', author: 'Luke', url: 'http://urmom.com', likes: 7, id: '6538168c8349a4553ea62407',
  },
];

describe('totalLikes', () => {
  test(' of empty blogs array', () => {
    expect(testHelper.totalLikes(emptyBlogs)).toBe(0);
  });

  test(' of 1 blog array', () => {
    expect(testHelper.totalLikes(oneBlog)).toBe(1);
  });
  test(' of 3 blog array', () => {
    expect(testHelper.totalLikes(threeBlogs)).toBe(12);
  });
});

describe('favoriteBlog', () => {
  test(' of empty blogs array', () => {
    expect(testHelper.favoriteBlog(emptyBlogs)).toBe(undefined);
  });

  test(' of 1 blog array', () => {
    expect(testHelper.favoriteBlog(oneBlog)).toBe(oneBlog[0]);
  });
  test(' of 3 blog array', () => {
    expect(testHelper.favoriteBlog(threeBlogs)).toBe(threeBlogs[2]);
  });
});

describe('mostBlogs', () => {
  test(' of empty blogs array', () => {
    expect(testHelper.mostBlogs(emptyBlogs)).toStrictEqual({ author: undefined, blogs: undefined });
  });

  test(' of 1 blog array', () => {
    expect(testHelper.mostBlogs(oneBlog)).toStrictEqual({ author: 'me', blogs: 1 });
  });
  test(' of 3 blog array', () => {
    expect(testHelper.mostBlogs(threeBlogs)).toStrictEqual({ author: 'Luke', blogs: 2 });
  });
});

describe('mostLikes', () => {
  test(' of empty blogs array', () => {
    expect(testHelper.mostLikes(emptyBlogs)).toStrictEqual(undefined);
  });

  test(' of 1 blog array', () => {
    expect(testHelper.mostLikes(oneBlog)).toStrictEqual({ author: 'me', likes: 1 });
  });
  test(' of 3 blog array', () => {
    expect(testHelper.mostLikes(threeBlogs)).toStrictEqual({ author: 'Luke', likes: 9 });
  });
});
