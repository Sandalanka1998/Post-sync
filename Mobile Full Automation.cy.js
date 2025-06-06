describe("Post Sync All Mobile Functions", () =>  {

    it('Mobile Landing page', () => {

        cy.viewport(412, 915)
        cy.visit("https://dev.postsync.ai/", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        cy.get('.burger').click() //Side bar
        cy.wait(2000)
        cy.get('.overlay-menu > :nth-child(4)').click()
        cy.wait(3000)


        cy.get('.burger').click() //Side bar
        cy.wait(2000)
        cy.get('.overlay-menu > :nth-child(3)').click() //Pricing
        cy.wait(2000)

        cy.get('.plans-item-section > :nth-child(1)').click() //Free
        cy.wait(2000)
        cy.get('.plans-item-section > :nth-child(2)').click() //Pro
        cy.wait(2000)
        cy.get('.plans-item-section > :nth-child(3)').click() //Advanced
        cy.wait(2000)
        cy.get('.plans-item-section > :nth-child(4)').click() //Enterprise
        cy.wait(2000)


        //Frequently Asked Questions
        cy.get(':nth-child(1) > .faq-question').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .faq-answer').should('be.visible')

        cy.get(':nth-child(2) > .faq-question').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .faq-answer').should('be.visible')

        cy.get(':nth-child(3) > .faq-question').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .faq-answer').should('be.visible')

        cy.get(':nth-child(4) > .faq-question').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .faq-answer').should('be.visible')

        cy.get(':nth-child(5) > .faq-question').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .faq-answer').should('be.visible')

        cy.get(':nth-child(6) > .faq-question').click()
        cy.wait(2000)
        cy.get(':nth-child(6) > .faq-answer').should('be.visible')
        cy.wait(2000)


        //Legal
        cy.get('.legal-ul > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('.main-title').should('have.text', 'Terms of Service')
        cy.wait(2000)

        cy.get('.legal-ul > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('.main-title').should('have.text', 'DMCA & Content Responsibility Policy')
        cy.wait(2000)

        cy.get('.legal-ul > :nth-child(3) > a').click()
        cy.wait(2000)
        cy.get('.main-title').should('have.text', 'Disclaimer')
        cy.wait(2000)

        cy.get(':nth-child(4) > a').click()
        cy.wait(2000)
        cy.get('.main-title').should('have.text', 'Cookie Policy')
        cy.wait(2000)

        cy.get(':nth-child(5) > a').click()
        cy.wait(2000)
        cy.get('.main-title').should('have.text', 'Privacy Policy')
        cy.wait(2000) 


        //Blog page
        cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('.main-title').should('have.text', 'Expert Tips and Strategies for GrowingYour Success')

        cy.get(':nth-child(1) > .card-body').click() //Single blog
        cy.wait(3000)
        cy.get('.row > a').click() //Back to blog
        cy.wait(2000)


        //NSFW
        cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(3) > a').click()
        cy.wait(4000)


        cy.get(':nth-child(1) > .multiselect__select').click()
        cy.wait(3000)
        //cy.get(':nth-child(3)>.multiselect__option--highlight').click()
        //cy.wait(2000) 


        //Checking navigate to Sign in/ Sign up page
        cy.get('.logo > img').click() //Home
        cy.get('.main-container > .button > .action-text').click()
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get('.mt-15 > .button').click()
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get('#save > .save-div > .main-container > .col-51 > :nth-child(4) > .button').click()
        cy.wait(2000)
        cy.go(-1)

        cy.get('.burger').click() //Side bar
        cy.get('.overlay-menu > :nth-child(3)').click() //Pricing
        cy.wait(2000)

        
        
        //Plans
        cy.get('.plans-item-section > :nth-child(1)').click() //Free
        cy.wait(2000)
        cy.get(':nth-child(1) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=free');
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get('.plans-item-section > :nth-child(2)').click() //Pro
        cy.wait(2000)
        cy.get(':nth-child(2) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=pro');
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get('.plans-item-section > :nth-child(3)').click() //Advanced
        cy.wait(2000)
        cy.get(':nth-child(3) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=advanced');
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get('.plans-item-section > :nth-child(4)').click() //Enterprise
        cy.wait(2000)
        cy.get(':nth-child(4) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=enterprise');
        cy.wait(2000)
        cy.go(-1)



    });
    
    
    it('Mobile Login', () => {
        cy.viewport(412, 915)
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
        cy.wait(2000)
        cy.get('.dashboard-title').should('have.text', 'DASHBOARD')

        //Logout
        cy.get('.burger').click()
        cy.wait(2000)
        cy.get('p.button').click()
        cy.wait(2000)


        //Signup with new user
        cy.get('.tabs > :nth-child(2)').click()
        cy.get('#username').type('PostSync5wrw37636')
        cy.get('#email').type('postsync053we5@yopmail.com')
        cy.get(':nth-child(3) > :nth-child(3) > #password').type('Testing')
        cy.get(':nth-child(4) > :nth-child(3) > #password').type('Testing')
        cy.wait(2000)
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.success-title').should('have.text', 'Your account has been successfully created') //Verifiy navigation to success page

        cy.get('.btn').click() //Back to login

        //Signup with existing user/ Passwords do not match
        cy.wait(3000)
        cy.get('.tabs > :nth-child(2)').click()
        cy.get('#username').type('PostSync')
        cy.get('#email').type('postsync052@yopmail.com')
        cy.get(':nth-child(3) > :nth-child(3) > #password').type('Testing')
        cy.get(':nth-child(4) > :nth-child(3) > #password').type('Test')
        cy.get('.btn').click()
        cy.get('[data-testid="toast-content"]').should('have.text', 'Passwords do no match') //Passwords do not match
        cy.wait(6000)

        cy.get(':nth-child(4) > :nth-child(3) > #password').clear().type('Testing')
        cy.wait(2000)
        cy.get('.btn').click()
        cy.get('[data-testid="toast-content"]').should('have.text', 'Username or email already exists') //Verify user already exists
        cy.wait(4000)


        //Forget password
        cy.get('.tabs > :nth-child(1)').click() //Signin
         cy.get('.forgot-password').click()  //Forget password
         cy.get('#email').type('postsync060@yopmail.com') //Email
         cy.get('.baseButton').click() //Submit
/*
    })    

        it.skip('Validations', () => {

        /*cy.viewport(1920, 1080)
        cy.visit("https://dev.postsync.ai/register")
        cy.get('#username').type('PostSync')
        cy.get('#email').type('postsync0538bfbfb8hrew@yopmail.com')
        cy.get(':nth-child(3) > :nth-child(3) > #password').type('Testing')
        cy.get(':nth-child(4) > :nth-child(3) > #password').type('Testing')
        cy.wait(2000)
        cy.get('.btn').click()*/

    }) 
  
  
    it('Mobile Automate posts', () => {
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

        cy.get('[data-testid="toast-content"]').should('have.text', 'Posts Scheduled')//Post Scheduled notification

    

    })


    it('Mobile Manual Posts', () => {
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
          cy.get('.id-2025-04-02 > .vc-day-content').click() //Select date
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

        it('Calendar & Post history', () => {

          cy.viewport(412, 915);
          cy.visit("https://dev.postsync.ai/login", {
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
          cy.get('.burger').click() //Calendar
          cy.get('.row > .menu > .menu-items > .dashboard-menu > :nth-child(2) > a').click() //Calendar
      
          cy.wait(2000)
          cy.get('.tabs > :nth-child(2)').click() //Weekly
          cy.wait(2000)
          cy.get('.tabs > :nth-child(1)').click() //Daily
          cy.wait(2000)
          cy.get('.tabs > :nth-child(3)').click() //Monthly
          cy.wait(2000)
      
      
          //Navigate to post history page
          cy.get('.burger').click()
          cy.wait(2000)
          cy.get('.row > .menu > .menu-items > .dashboard-menu > :nth-child(3) > a').click() //Post History
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
          cy.wait(2000)

         //cy.get('.posted-table > :nth-child(2) > :nth-child(3)').should('have.text', 'Flowers') //Check post history

      
         cy.get('.tabs > :nth-child(2)').click() //Failed Posts
         cy.wait(2000)
      
          //cy.get('.posted-table > :nth-child(2) > :nth-child(3)').should('have.text', 'Flowers') //Check post history
      
      }) 


        it('Mobile Library', () => {

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

        
        it('Mobile Subreddits', () => {
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

            it('Mobile Profile', () => {

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
        
                //Navigate to settings page
                cy.get('.burger').click()
                cy.wait(2000)
                cy.get('.footer-menu > .menu-items > a.button > .light-mode > span').click()
                cy.wait(2000)
        
        
                cy.get(':nth-child(1) > :nth-child(1) > .form-input').clear().type('Post') //First Name
                cy.get(':nth-child(1) > :nth-child(2) > .form-input').clear().type('Sync') //Last Name
                cy.wait(3000)
                cy.get('.col-12 > #country').select('Asia/Dubai') //Time Zone
        
                //Billing Info
                cy.get('.billing-info > :nth-child(2) > .col-12 > .form-input').clear().type('ABC Street') //Address Line 1
                cy.get('.billing-info > :nth-child(3) > .col-12 > .form-input').clear().type('XYZ Street') //Address Line 2
                cy.get(':nth-child(4) > :nth-child(1) > .form-input').clear().type('New York') //City
                cy.get(':nth-child(4) > :nth-child(2) > .form-input').clear().type('New York') //State
                cy.get(':nth-child(5) > :nth-child(1) > .form-input').clear().type('123456') //Zip Code
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

            it.skip('Mobile Unlink Accounts', () => {

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
            
                //Navigate to settings page
                cy.get('.burger').click()
                cy.wait(2000)
                cy.get('.footer-menu > .menu-items > a.button > .light-mode > span').click()
                cy.wait(2000)
            
                //cy.get('.mobile-sub-menu > .form-input').click() 
                cy.get('.mobile-sub-menu > .form-input').select('Connected accounts') 
                cy.wait(2000)
          
                cy.get('.unlink').click() //Unlink account
                cy.get('.red').click() //Confirm unlink
                cy.get('[data-testid="toast-body"]').should("have.text", 'Unlinked Account') //Notfication
                cy.wait(3000)
            
            })

            it('Mobile Connected Accounts', () => {

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
            
                //Navigate to settings page
                cy.get('.burger').click()
                cy.wait(2000)
                cy.get('.footer-menu > .menu-items > a.button > .light-mode > span').click()
                cy.wait(2000)
          
                //cy.get('.mobile-sub-menu > .form-input').click() 
                cy.get('.mobile-sub-menu > .form-input').select('Connected accounts') 
                cy.wait(2000)
            
                cy.get('.baseButton').click() //Click on connect reddit account
                cy.get('.red').click() 
            
            
            })


            it.skip('Mobile Subscriptions', () => {
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
                
                //Navigate to settings page
                cy.get('.burger').click()
                  cy.wait(2000)
                  cy.get('.footer-menu > .menu-items > a.button > .light-mode > span').click()
                  cy.wait(2000)
          
                  cy.get('.mobile-sub-menu > .form-input').select('Subscription') //Subscription page
                  cy.wait(2000)
                  
              
              })

              it('Mobile Proxy', () => {

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
          
                  cy.get('.burger').click() //Side Bar
                  cy.wait(2000)
                  cy.get('.footer-menu > .menu-items > a.button').click() //Settings
                  cy.wait(2000)
          
                  cy.get('.mobile-sub-menu > .form-input').select('Proxy') //Proxy page
                  cy.wait(2000)
                  cy.get('.baseButton').click() //Add custom proxy
                  cy.wait(2000)
                  cy.get('#account').select('u/Impossible_Step5937') //Select account
                  cy.wait(2000)
          
                  cy.get(':nth-child(3) > .col-12 > .form-input').type('Testing PostSync') //HTTP Proxy Name
                  cy.get('.red').click() //Add proxy
                  cy.wait(2000)
                  cy.get('[data-testid="toast-content"]').should("have.text", 'Proxies added successfully.') //Notification
          
          
                  cy.get('.baseButton').click() //Add custom proxy
                  cy.wait(2000)
                  cy.get('#account').select('u/Suspicious_Put_5846') //Select account
                  cy.wait(2000)
                  cy.get(':nth-child(2) > input').click() //Socks
                  cy.wait(2000)
                  cy.get(':nth-child(3) > .col-12 > .form-input').type('Testing PostSync') //Socks Proxy Name
                  cy.get('.red').click() //Add proxy
                  cy.wait(2000)
                  cy.get('[data-testid="toast-content"]').should("have.text", 'Proxies added successfully.') //Notification
          
          
                  cy.wait(2000)
                  cy.get(':nth-child(2) > :nth-child(4) > div > .unlink').click() //Remove proxy
                  cy.get('[data-testid="toast-content"]').should("have.text",'Deleted successfully')//
          
            })

});