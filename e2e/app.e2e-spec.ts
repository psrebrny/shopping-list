import { TheBasicsPage } from './app.po';

describe('the-basics App', () => {
  let page: TheBasicsPage;

  beforeEach(() => {
    page = new TheBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
