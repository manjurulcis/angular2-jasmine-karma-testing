import { TestJasminePage } from './app.po';

describe('test-jasmine App', function() {
  let page: TestJasminePage;

  beforeEach(() => {
    page = new TestJasminePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
