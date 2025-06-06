describe("Scheduled Posts", () =>  {

    it('Scheduled Automate post', () => {

        cy.viewport(1920, 1080)
        cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })
  
        //Login
        cy.get('#email').type('postsync062@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()
        //cy.wait(2000)
        cy.get('.dashboard-title').should('have.text', 'DASHBOARD')
        cy.wait(2000)
  
        //Navigate to subreddit page
  
        cy.get('.baseButton').click()
  
        cy.wait(2000)
        cy.get('.dropdown-content').invoke('show')
        cy.wait(2000)
        cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > a > .dropdown-check').click() //connect account
        cy.wait(2000)
        cy.get('.tags-section > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select Media tag
        cy.wait(2000)
        cy.get('.tags-section > :nth-child(2) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select Subreddit tag
        cy.wait(2000)
        cy.get('.mt-20 > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select date
        cy.get('.pt-24 > :nth-child(2)').click() //Scheduled button
        cy.wait(2000)

        cy.get('[data-testid="toast-content"]').should('have.text', 'Post Scheduled')//Post Scheduled
        //cy.get('[data-testid="toast-content"]').should('have.text', 'No available media to schedule posts') //error notification

    })

    it('Schedule Manual Post', () => {

        cy.viewport(1920, 1080)
        cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        //Login
        cy.get('#email').type('postsync062@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()

        //Scheduled a Manual post
        cy.wait(3000)
        cy.get('.baseButton').click() //Scheduled button
        cy.get('.tabs > :nth-child(2)').click() //Manual post
        cy.get('.dropdown-content').invoke('show')
        cy.get('.schedule-popup-left > :nth-child(1) > .dropdown > .dropdown-content > a > .dropdown-check').click() //connect account

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select subreddit
        cy.wait(2000)

        cy.get('.mb-40 > :nth-child(2) > :nth-child(1) > :nth-child(2) > .dashboard-input').type('Beautiful Flowers') //Post Comment
        cy.wait(2000)

        cy.get('.generate-title > img').click() //Generate Title
        cy.wait(3000)

        //cy.get('.tags-section.mt-20 > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Flairs

        cy.get('.tags-section.mt-20 > :nth-child(2) > .dashboard-input').click() //Select date & time
        cy.get('.id-2025-03-27 > .vc-day-content').click() //Select date
        cy.get('#time-input').type('09:30') //Select past time
        cy.get('.save-btn').click() //Save button
        cy.get('[data-testid="toast-content"]').should('have.text', 'Past date and time cannot be selected')//Failed Notification

        cy.wait(2000)
        cy.get('#time-input').type('10:30') //Select Future time
        cy.get('.save-btn').click() //Save button

        cy.get('.nsfw-options > :nth-child(1) > .dropdown-check').click() //NSFW
        cy.wait(2000)
        cy.get('.nsfw-options > :nth-child(1) > .dropdown-check').click() 
        cy.wait(2000)

        cy.get('.nsfw-options > :nth-child(3) > .dropdown-check').click() //Spoiler
        cy.wait(2000)
        cy.get('.nsfw-options > :nth-child(3) > .dropdown-check').click()
        cy.wait(2000)

        cy.get('.pink-text').click() //Library
        cy.wait(3000)

        cy.get('.library-image').click() //Select image
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


    it('Post Count Validation check', () => {

        cy.viewport(1920, 1080)
        cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        //Login
        cy.get('#email').type('postsync000@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()

        //Post count validation check according to the subscription plan
        cy.wait(3000)
        cy.get('.baseButton').click() //Scheduled button
        cy.get('.tabs > :nth-child(2)').click() //Manual post
        cy.get('.dropdown-content').invoke('show')
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown > .dropdown-content > :nth-child(8) > .dropdown-check').click() //connect account

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select subreddit

        cy.get('.mb-40 > :nth-child(2) > :nth-child(1) > :nth-child(2) > .dashboard-input').type('Beautiful Flowers') //Post Comment

        cy.get('.generate-title > img').click() //Generate Title
        cy.wait(3000)

        //cy.get('.tags-section.mt-20 > :nth-child(1) > .dropdown > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Flairs

        cy.get('.tags-section.mt-20 > :nth-child(2) > .dashboard-input').click() //Select date & time
        cy.get('.id-2025-03-28 > .vc-day-content').click() //Select date
        cy.get('#time-input').type('12:30') //Select time

        cy.get('.save-btn').click() //Save button

        cy.get('.nsfw-options > :nth-child(1) > .dropdown-check').click() //NSFW
        cy.wait(2000)
        cy.get('.nsfw-options > :nth-child(1) > .dropdown-check').click() 
        cy.wait(2000)

        cy.get('.nsfw-options > :nth-child(3) > .dropdown-check').click() //Spoiler
        cy.wait(2000)
        cy.get('.nsfw-options > :nth-child(3) > .dropdown-check').click()
        cy.wait(2000)

        cy.get('.pink-text').click() //Library
        cy.wait(3000)

        cy.get('[src="https://postsync-uploads-prod.s3.eu-west-2.amazonaws.com/uploaded_1740992162345_0.png"]').click() //Select image
        //cy.get('.green').click() //Add button
        cy.wait(3000)

        cy.get('.pt-24 > :nth-child(2)').click() //Scheduled button

        cy.get('[data-testid="toast-content"]').should('have.text', 'Limit for the plan has been reached')//Failed Notification
        cy.wait(2000)

    })


    it('Calendar & Post history', () => {

        cy.viewport(1920, 1080)
        cy.visit(" https://dev.postsync.ai/login ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        //Login
        cy.get('#email').type('postsync062@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()

        //Navigate to Calendar page
        cy.wait(2000)
        cy.get('.dashboard-menu > :nth-child(2) > a').click() //Calendar

        cy.wait(2000)
        cy.get('.tabs > :nth-child(2)').click() //Weekly
        cy.wait(2000)
        cy.get('.tabs > :nth-child(1)').click() //Daily
        cy.wait(2000)
        cy.get('.tabs > :nth-child(3)').click() //Monthly
        cy.wait(2000)


        //Navigate to post history page
        cy.get(':nth-child(3) > a').click() //Post History
        cy.wait(2000)

        cy.get('.dropdown-content').invoke('show')
        cy.wait(2000)

        //Filter By Subreddit
        cy.get('.dashboard-filters-left > :nth-child(1) > .dropdown-content > a > .dropdown-check').click() //Select subreddit
        cy.get('.posted-table > :nth-child(2) > :nth-child(3)').should('have.text', 'flowers') //Check filer by subreddit
        cy.wait(2000)
        cy.get('.dashboard-filters-left > :nth-child(1) > .dropdown-content > a > .dropdown-check').click()


        //Filter By Date
        cy.get(':nth-child(2) > .dropdown-content > :nth-child(1) > .dropdown-check').click() //Select 7 Days

        //cy.get('.posted-table > :nth-child(2) > :nth-child(3)').should('have.text', 'Flowers') //Check post history

    }) 

   
})