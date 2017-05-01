import { CustomComponentPage } from './app.po';

describe('custom-component App', () => {
  let page: CustomComponentPage;

  beforeEach(() => {
    page = new CustomComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
