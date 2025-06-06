describe("Subreddit page", () =>  {

    it('Functions', () => {
        cy.viewport(1920, 1080)
        cy.viewport(412, 915)
        cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        //Login
        cy.get('#email').type('postsync060@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()
        cy.wait(2000)
        cy.get('.dashboard-title').should('have.text', 'DASHBOARD')
        cy.wait(2000)
        cy.get('.alert-content > button').click() //Click dismiss
        cy.wait(2000)

        //Navigate to subreddit page
        cy.get('.burger').click()
        cy.wait(2000)
        cy.get('[href="/subreddits"] > .light-mode > span').click() 
        cy.get('.subreddits-title').should('have.text', 'Subreddits')

        cy.get('.subreddits-menu-mobile > .search-input').type('flowers') //Search Subreddit

        //View & Edit subreddit rules
        cy.get('.subreddits-table > :nth-child(2) > :nth-child(4)').click()
        cy.wait(2000)
        cy.get('.title-input').clear().type("Flowers are Beautiful") //Title
        cy.wait(2000)
        cy.get('.mb-40 > :nth-child(2) > .dashboard-input').clear().type("Flowerss") //Comment

        cy.get('.repurpose-options > :nth-child(1) > .dropdown-check').click() //Image Repurpose YES
        cy.get('.repurpose-options > :nth-child(3) > .dropdown-check').click() //Image Repurpose NO

        cy.get('.dropdown-content').invoke('show')
        cy.wait(2000)
        cy.get('.tags-section > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Flairs
        cy.wait(2000)

    
        cy.get('.multiselect__select').type('New{enter}');
        cy.get('.pt-24 > :nth-child(2)').click() //Save button
        cy.get('[data-testid="toast-content"]').should("have.text", 'Rules saved successfully')
        cy.wait(3000)

        cy.get('.subreddits-table > :nth-child(2) > :nth-child(4)').click() //Open subreddit & Check details save or not
        cy.wait(3000)

        cy.get('.cancel-icon').click() //close popup

        //Check subreddit comment automatically display when scheduling manual post
        cy.get('.burger').click() //Navigate to scheduled page
        cy.wait(2000)
        cy.get('[href="/dashboard/scheduled"] > .light-mode > span').click() //Dashboard
        cy.wait(2000)

        cy.get('.baseButton').click() //Scheduled post
        cy.wait(2000)
        cy.get('.tabs > :nth-child(2)').click() //Manual post
        cy.wait(2000)
        cy.get('.connected-acc-dropdown').click() //connect account
        cy.get('.dropdown-content').invoke('show')
        cy.wait(2000)
        cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1)').click() //connect account
        cy.wait(2000)
        cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click()
        
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select subreddit
        cy.wait(3000)
        cy.get('.dropdown-content').invoke('hide')
        cy.wait(2000)

        cy.get('.cancel-icon').click() //Close popup

        cy.get('.burger').click()
        cy.wait(2000)
        cy.get('[href="/subreddits"] > .light-mode > span').click() 
        cy.get('.subreddits-title').should('have.text', 'Subreddits')
        


       /* //Delete Subreddit
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > div > .check').click()
        cy.get('.actions > .delete').click()  //Delete Button
        cy.get('[data-testid="toast-content"]').should("have.text", 'Subreddit deleted successfully') //Success Notification */



       /*  //Add Subreddit
        cy.get('.subreddits-menu > .actions > .no-border').click() //Click on Add subreddit
        cy.wait(2000)
        cy.get('.dashboard-input').type('flowers') //Type subreddit name
        cy.wait(2000)
        cy.get('.popup-footer > .baseButton').click() //Click on Add */

        })

    })