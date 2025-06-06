describe("Automate post", () =>  {

    it.skip('Functions', () => {
        cy.viewport(412, 915)
    
        cy.visit(" https://dev.postsync.ai/login ", {
          auth: {
            username: 'admin',
            password: 'subreddittest'
          }
        })

        //Login
        cy.get('#email').type('postsync049@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()
        cy.wait(2000)
        cy.get('.dashboard-title').should('have.text', 'DASHBOARD')
        cy.wait(2000)

        cy.get('.baseButton').click()
  
        cy.wait(2000)
        cy.get('.connected-acc-dropdown').click() //connect account
        cy.get('.dropdown-content').invoke('show')
        cy.wait(2000)
        cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1)').click() //connect account
        cy.wait(2000)
        cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click()
        cy.wait(2000) 
        cy.get('.tags-section > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select Media tag
        cy.wait(2000)
        cy.get('.tags-section > :nth-child(2) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select Subreddit tag
        cy.wait(2000)
        cy.get('.mt-20 > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select date
        cy.get('.dropdown-content').invoke('hide')
        cy.wait(2000)
        cy.get('.pt-24 > :nth-child(2)').click() //Scheduled button
        cy.wait(2000)

        cy.get('[data-testid="toast-content"]').should('have.text', 'Post Scheduled')//Post Scheduled notification

    

    })


      it('Functions', () => {
        cy.viewport(412, 915)
      
          cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })
  
          //Login
          cy.get('#email').type('postsync049@yopmail.com')
          cy.get('#password').type('Testing')
          cy.get('.btn').click()
          cy.wait(2000)
          cy.get('.dashboard-title').should('have.text', 'DASHBOARD')
          cy.wait(2000)
  
          cy.get('.baseButton').click() //Scheduled button

          cy.wait(2000)
          cy.get('.tabs > :nth-child(2)').click() //Manual post
          cy.wait(2000)
          cy.get('.connected-acc-dropdown').click() //connect account
          cy.get('.dropdown-content').invoke('show')
          cy.wait(2000)
          cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1)').click() //connect account
          cy.get('.connected-acc-dropdown').click() //Shrink dropdown
          cy.wait(2000)

    
          cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select subreddit
          cy.wait(2000)

          //cy.get('.mb-40 > :nth-child(2) > :nth-child(1) > :nth-child(2) > .dashboard-input').type('Beautiful Flowers') //Post Comment
          //cy.wait(2000)

          cy.get('.generate-title > img').click() //Generate Title
          cy.wait(3000)

          //cy.get('.tags-section.mt-20 > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Flairs

          cy.get('.tags-section.mt-20 > :nth-child(2) > .dashboard-input').click() //Select date & time
          cy.get('.id-2025-03-28 > .vc-day-content').click() //Select date
          cy.get('#time-input').type('09:30') //Select past time
          cy.get('.save-btn').click() //Save button
          cy.get('[data-testid="toast-content"]').should('have.text', 'Past date and time cannot be selected')//Failed Notification

          cy.wait(2000)
          cy.get('#time-input').type('12:30') //Select Future time
          cy.get('.save-btn').click() //Save button

          cy.get('.dropdown-content').invoke('hide')
          cy.wait(2000)

          cy.get('.nsfw-options > :nth-child(1) > .dropdown-check').click() //NSFW
          cy.wait(2000)
          cy.get('.nsfw-options > :nth-child(1) > .dropdown-check').click() 
          cy.wait(2000)

          cy.get('.nsfw-options > :nth-child(3) > .dropdown-check').click() //Spoiler
          cy.wait(2000)
          cy.get('.nsfw-options > :nth-child(3) > .dropdown-check').click()
          cy.wait(2000)

          cy.get('.pink-text').click() //Library
          cy.wait(4000)

          cy.get('.media-library > [src="https://postsync-uploads-dev.s3.eu-west-2.amazonaws.com/uploaded_1743069296451_0.png"]').click() //Select image
          cy.wait(2000)
          //cy.get('.green').click() //Add button

          cy.get('.pt-24 > :nth-child(2)').click() //Scheduled button

          cy.wait(2000)
          cy.get('[data-testid="toast-content"]').should('have.text', '1 Post(s) Scheduled Successfully')//Success Notification
          cy.wait(2000)

          cy.get('.scheduled-table > :nth-child(2) > :nth-child(4)').should('have.text', 'flowers') //Check scheduled post
          cy.wait(2000)

          cy.get(':nth-child(2) > .edit-post').click() //Edit post
          cy.wait(3000)
          cy.get('.pt-24 > :nth-child(2)').click() //Scheduled button
          cy.get('[data-testid="toast-content"]').should('have.text', 'Post Updated')//Success Notification




})
})