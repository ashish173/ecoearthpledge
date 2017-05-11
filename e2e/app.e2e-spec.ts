import { EcoearthpledgePage } from './app.po';

describe('ecoearthpledge App', () => {
  let page: EcoearthpledgePage;

  beforeEach(() => {
    page = new EcoearthpledgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
