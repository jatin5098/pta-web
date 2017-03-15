import { PtaWebPage } from './app.po';

describe('pta-web App', () => {
  let page: PtaWebPage;

  beforeEach(() => {
    page = new PtaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
