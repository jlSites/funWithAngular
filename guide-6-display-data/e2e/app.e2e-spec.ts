import { QuickstartCliPage } from './app.po';

describe('quickstart-cli App', () => {
  let page: QuickstartCliPage;

  beforeEach(() => {
    page = new QuickstartCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
