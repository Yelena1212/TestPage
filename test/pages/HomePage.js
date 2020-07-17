import  BasePage from "./BasePage";

class HomePage extends BasePage{
    get fromInput(){
        return $('#origin') }
    get toInput() {
        return $('#destination') }
    get departDate(){
        return $$('input.trip-duration__date-input')[0]
    }
    get returnDate(){
        return $$('input.trip-duration__date-input')[1]}
    get fligtsTab(){ return $('li.--avia')}
    get passengerField(){return $('.additional-fields__label')}
    get ticketClass(){return $('.additional-fields__label.--is-gray')}
    get searchFirFlight(){return $('//div[@class="avia-form__submit"]//span[@class="_button_text_3oKFG"]')}
    get hotelTab(){return $$('[data-goal="hotelTab"]')[1]}
    get destinationHotel(){return $('#destination')}
    get checkIn(){return $$('.trip-duration__date-input')[0]}
    get checkOut(){return $$('.trip-duration__date-input')[1]}



    open(url) {
        super.open('/');
    }
}

export default new HomePage();