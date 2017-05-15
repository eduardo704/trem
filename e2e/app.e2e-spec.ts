import { TremDasOnzePage } from './app.po';

describe('trem-das-onze App', () => {
  let page: TremDasOnzePage;

  beforeEach(() => {
    page = new TremDasOnzePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
