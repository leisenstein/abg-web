import { AgbWebPage } from './app.po';

describe('agb-web App', function() {
  let page: AgbWebPage;

  beforeEach(() => {
    page = new AgbWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
