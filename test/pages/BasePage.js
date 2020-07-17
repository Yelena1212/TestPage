 export default class BasePage {


    get homePageLink(){
        return $('.navbar__logo-text')}

    open (url){
        browser.url(url)
    }

}
