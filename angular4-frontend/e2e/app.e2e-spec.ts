import { Angular4FrontendPage } from './app.po';

describe('angular4-frontend App', () => {
  let page: Angular4FrontendPage;

  beforeEach(() => {
    page = new Angular4FrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
