context('Api', () => {
    it('returns a JSON response of user information for the test user', () => {
        cy.request({
            url: 'users/me', 
            headers: {
                Authorization: Cypress.env("token")
            }
        })
        .then((response) => {
            expect(response.body).contains("tdenkinger@gmail.com")
        })
    });

    it('returns data about a video shared by the test user', () => {
        cy.request({
            url: 'jamms/get/yq75iZzk', 
            headers: {
                Authorization: Cypress.env("token")
            }
        })
        .then((response) => {
            expect(response.body).contains("Puddles Pity Party - In The End - [Official Video]")
        })
    });

    it('returns metrics about a video', () => {
        cy.request({
            url: 'events/metrics/get/yq75iZzk', 
            headers: {
                Authorization: Cypress.env("token")
            }
        })
        .then((response) => {
            expect(response.body).contains("metrics")
        })
    });


})