describe("Settings Page", () =>  {

    it('Profile', () => {

            cy.viewport(1920, 1080)
            cy.visit("https://dev.postsync.ai/login")

            //Login
            cy.get('#email').type('postsyncplan@yopmail.com')
            cy.get('#password').type('Testing')
            cy.get('.btn').click()

            //Navigate to settings page
            cy.get('[href="/settings#profile"] > .dark-mode > span').click()
            cy.wait(2000)
            cy.get('[href="/settings#subscriptions"]').click() //Subscription
            cy.wait(2000)
            cy.get('.progress-text').should('have.text', '0 / 5') //Check the progress bar


            /*cy.get(':nth-child(1) > .btn').click() //Pro plan
            cy.wait(4000)
            cy.get('.progress-text').should('have.text', '0 / 1000') //Check the progress bar
            cy.wait(2000)

            cy.get(':nth-child(2) > .btn').click() //Advance plan
            cy.wait(4000)
            cy.get('.progress-text').should('have.text', '0 / 5000') //Check the progress bar
            cy.wait(2000)

            cy.get('.justify-bettween.pt-25 > :nth-child(3) > .btn').click() //Enterprise plan
            cy.wait(4000)
            cy.get('.progress-text').should('have.text', '0 / 15000') //Check the progress bar */
            cy.wait(2000)



            


    })

})