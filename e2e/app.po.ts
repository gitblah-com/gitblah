import { browser, element, by } from 'protractor';

export class GitblahPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bla-root h1')).getText();
  }
}
