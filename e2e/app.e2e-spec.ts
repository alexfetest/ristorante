import { AlexFeTestPage } from './app.po';

describe('alex-fe-test App', () => {
  let page: AlexFeTestPage;

  beforeEach(() => {
    page = new AlexFeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
