import { UptocloudPage } from './app.po';

describe('uptocloud App', () => {
  let page: UptocloudPage;

  beforeEach(() => {
    page = new UptocloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
