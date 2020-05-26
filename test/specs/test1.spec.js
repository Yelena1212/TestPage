import HomePage from "../pages/HomePage";


describe('should find and add TV to cart', ()=> {
    it('should open walmart website', ()=> {
        HomePage.open();
        // browser.url('https://www.walmart.com');
       // browser.pause(5000);
    })


    it('should verify that page is correct', ()=>{
       // const actual =  browser.getTitle();
       // const expected = 'Walmart';
       // expect(actual).includes(expected);
        HomePage.checkPageTitleContains('Walmart');
    })

    it('should search for TV',()=>{
        HomePage.searchFor('TV');
       // HomePage.setValue('TV')
        //browser.findElement('#global-search-input', 'TV');
        // browser.pause(3000);
        // HomePage.click();
        //browser.keys('Enter');
        browser.pause(3000);
        // $('[data-automation-id="pickup_and_delivery-2-day-delivery"]').click();
        // browser.waitUntil( ()=>  $('[data-automation-id="pickup_and_delivery-2-day-delivery"]').isDisplayed());
        // $('[data-automation-id="pickup_and_delivery-2-day-delivery"]').scrollIntoView();
        // browser.pause(3000);
    });


});