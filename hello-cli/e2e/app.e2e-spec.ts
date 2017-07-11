import { HelloCliPage } from './app.po';

describe('hello-cli App', () => {
  let page: HelloCliPage;

  beforeEach(() => {
    page = new HelloCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
