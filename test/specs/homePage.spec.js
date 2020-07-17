import HomePage from "../pages/HomePage"

describe('HOME PAGE', () => {
    before (() => {
        HomePage.open()
    })

    describe('HOME PAGE FLIGHTS', () => {
    it('Flights is active', function () {
        expect(HomePage.fligtsTab.getAttribute('class')).contains('is-active');

    });

    it('Check Placeholder "From"', function () {
        expect(HomePage.fromInput.getAttribute('placeholder')).eq('From')

    });
    it('Check Placeholder "To', function () {
        expect(HomePage.toInput.getAttribute('placeholder')).eq('To')

    });

    it('Check placeholder "Depart"', function () {
        expect(HomePage.departDate.getAttribute('placeholder')).eq('Depart')


    });

    it('Check placeholder "Report"', function () {
        expect(HomePage.returnDate.getAttribute('placeholder')).eq('Return')

    });

    it('1 passenger ', function () {
        expect(HomePage.passengerField.getText()).eq('1 passenger');

    });

    it('Ticket = "economy"', function () {
        expect(HomePage.ticketClass.getText()).eq('economy');

    });
    it('Search for flights Ntn is clickable', function () {
        expect(HomePage.searchFirFlight.isClickable()).true;

    });

});
    describe('Hotels', () => {
        it('Click on hotel', function () {
            HomePage.hotelTab.click();
            expect(HomePage.hotelTab.getAttribute('class')).contains('is-active');
        });

        it('Placeholder = ""Your destination', function () {
            expect(HomePage.destinationHotel.getAttribute('placeholder')).eq('Your destination/hotel');


        });

        it('Placeholder = "Check In"', function () {
            expect(HomePage.checkIn.getAttribute('placeholder')).eq('Check in');


        });

        it('Placeholder = "Check Out"', function () {
            expect(HomePage.checkOut.getAttribute('placeholder')).eq('Check out');


        });
    });
})