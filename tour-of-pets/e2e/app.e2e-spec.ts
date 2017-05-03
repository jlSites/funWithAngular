import { TourOfPetsPage } from './app.po';

describe('tour-of-pets App', () => {
  let page: TourOfPetsPage;

  beforeEach(() => {
    page = new TourOfPetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
