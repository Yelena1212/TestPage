class HomePage {
    get searchBox() {
        return $('#global-search-input');
    }

    get goBtn() {
        return $('#global-search-submit');
    }

    open() {
        browser.url('https://www.walmart.com');
    }


// submitSearch(){
//         this.goBtn.click();
// }

    searchFor(val) {
        this.searchBox.setValue(val);
        this.goBtn.click();
    }

    checkPageTitleContains(val) {
        expect(browser.getTitle()).includes('Walmart');
    }

}


    export default new HomePage();