describe('Activity screen', function() {
    let user;

    before(function () {
        cy.request({
            method: 'POST',
            url: "/cur/login",
            qs: {
                principal:Cypress.env('username'),
                password:Cypress.env('password')
            }
        })
            .its('body')
            .then(res => {
            user = res
        })
    });

    beforeEach(function setUser () {
        cy.visit({
            url: '/#' + user.result.fiServers[0],
            qs: {
                ut: user.result.authToken
            }
        });
        cy.url().should('include','/activity');
    })

    it('Activity screen has Title', function() {
        cy.get('h1 > span', {timeout:20000}).contains('Points Activity');
    })
})