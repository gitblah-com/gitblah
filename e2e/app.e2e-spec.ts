import { GitblahPage } from './app.po';

describe('gitblah App', function() {
  let page: GitblahPage;

  beforeEach(() => {
    page = new GitblahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bla works!');
  });
});
