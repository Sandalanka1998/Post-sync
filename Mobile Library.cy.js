describe("Library page", () =>  {

    it('Functions', () => {

        cy.viewport(412, 915)
        cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        //Login
        cy.get('#email').type('postsync060@yopmail.com') //Email
        cy.get('#password').type('Testing')  //Password
        cy.get('.btn').click()  //Login


        //Navigate to library page
        cy.get('.burger').click()
        cy.wait(2000)
        cy.get('[href="/library"] > .light-mode > span').click() //Library
        cy.wait(2000)
        cy.get('.library-title').should('have.text', 'Library')

        cy.get('.no-border').click() //Upload Media
        cy.wait(2000)
        cy.get('.drop-zone-content > .baseButton').click() //Select Media
        cy.wait(2000)


        //Upload Image 01
        const yourFixturePath = 'testimage.jpg';
        cy.get("input[type='file']").attachFile(yourFixturePath)
        cy.wait(3000)
        cy.get('[loading="false"]').click()
        cy.wait(2000)
        cy.get('[data-testid="toast-content"]').should('have.text', 'Files Uploaded Succesfully')


        //Upload Image 02
        cy.wait(2000)
        cy.get('.no-border').click() //Upload Media
        cy.wait(2000)
        cy.get('.drop-zone-content > .baseButton').click() //Select Media
        const MyFixturePath = 'image.jpeg';
        cy.get("input[type='file']").attachFile(MyFixturePath)
        cy.wait(3000)
        cy.get('[loading="false"]').click()
        cy.get('[data-testid="toast-content"]').should('have.text', 'Files Uploaded Succesfully')

        cy.get('.dropdown-content').invoke('show')

        //cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1)').click() //Assign tags
        cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1)').click() //Assign tags
        cy.wait(2000)
        
        //cy.get('.multiselect__tags').type("Testing") //Type Tag name
        cy.get('.multiselect__tags').type('Testing{enter}') //Add Tag

        cy.get('.popup-footer > .baseButton').click() //Click assign tag button
        cy.get('[data-testid="toast-content"]').should("have.text", 'Tags updated successfully') //Success Notification


        cy.wait(4000)
        cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(3)').click() //Delete image
        cy.wait(4000)
        cy.get('[data-testid="toast-content"]').should('have.text', 'Media deleted successfully') //Success Notification

        cy.get('.dropdown-content').invoke('hide')

    })

})