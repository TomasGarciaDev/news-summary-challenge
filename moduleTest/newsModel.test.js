const NewsModel = require('../module/newsModel');

describe('NewsModel', () => {
  it('returns an empty array', () => {
    const newsModel = new NewsModel();
    expect(newsModel.getArticles()).toEqual([]);
  })
})