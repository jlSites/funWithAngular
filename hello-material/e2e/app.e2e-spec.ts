import { HelloMmmPage } from './app.po';

describe('hello-mmm App', () => {
  let page: HelloMmmPage;

  beforeEach(() => {
    page = new HelloMmmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
