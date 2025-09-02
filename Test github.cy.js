describe("Settings Page", () =>  {

    it('Profile', () => {

        cy.viewport(1920, 1080)
        cy.visit("https://dev.postsync.ai/login")

        //Login
        cy.get('#email').type('postsync060@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()

        //Navigate to settings page
        cy.get('[href="/settings#profile"] > .dark-mode > span').click()
        cy.wait(2000)

        cy.get(':nth-child(1) > :nth-child(1) > .form-input').type('Post') //First Name
        cy.get(':nth-child(1) > :nth-child(2) > .form-input').type('Sync') //Last Name
        cy.wait(3000)
        cy.get('.col-12 > #country').select('Asia/Dubai') //Time Zone

        //Billing Info
        cy.get('.billing-info > :nth-child(2) > .col-12 > .form-input').type('ABC Street') //Address Line 1
        cy.get('.billing-info > :nth-child(3) > .col-12 > .form-input').type('XYZ Street') //Address Line 2
        cy.get(':nth-child(4) > :nth-child(1) > .form-input').type('New York') //City
        cy.get(':nth-child(4) > :nth-child(2) > .form-input').type('New York') //State
        cy.get(':nth-child(5) > :nth-child(1) > .form-input').type('123456') //Zip Code
        cy.wait(3000)
        cy.get(':nth-child(2) > #country').select('United States') //Country


        cy.get('.profile-upload > .baseButton').click() //Update Button 
        cy.wait(2000)


        //Update Password
        cy.get('.profile-password-change > :nth-child(2) > .col-12 > .form-input').type('Testing') //Current Password
        cy.get('.profile-password-change > :nth-child(3) > :nth-child(1) > .form-input').type('Testing') //New Password
        cy.get(':nth-child(3) > :nth-child(2) > .form-input').type('Testing') //Confirm Password
        cy.get(':nth-child(1) > :nth-child(2) > .baseButton').click() //Update Password Button

        cy.get('[data-testid="toast-body"]').should("have.text", 'Successfully updated')



    })
 })