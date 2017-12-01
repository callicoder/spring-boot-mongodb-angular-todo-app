import { AngularFrontendPage } from './app.po';

describe('angular-frontend App', () => {
  let page: AngularFrontendPage;

  beforeEach(() => {
    page = new AngularFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
