describe("Settings Page", () =>  {

    it.skip('Profile', () => {

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


    it.skip('Unlink Accounts', () => {

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
    

    it.skip('Connected Accounts', () => {

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
    
    
      it.skip('Payment methods', () => {
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
      
      //Navigate to settings page
      cy.get('.burger').click()
        cy.wait(2000)
        cy.get('.footer-menu > .menu-items > a.button > .light-mode > span').click()
        cy.wait(2000)

        cy.get('.mobile-sub-menu > .form-input').select('Payment methods') //Payment methods page
        cy.wait(2000)
      
      //First payment method add
      cy.get('[href="/settings#payment-methods"]').click() //Payment methods
      cy.get('.baseButton').click() //Add payment method
      
      cy.get(':nth-child(2) > .col-12 > .form-input').type('Testing PostSync') //Card Holder Name
      cy.get(':nth-child(3) > .col-12 > .form-input').type('ABC') //Address Line 1
      cy.get(':nth-child(4) > .col-12 > .form-input').type('XYZ') //Address Line 2
      cy.wait(2000)
      cy.get(':nth-child(5) > :nth-child(1) > .form-input').type('New York') //City
      cy.get(':nth-child(5) > :nth-child(2) > .form-input').type('New York') //State
      cy.get(':nth-child(6) > :nth-child(1) > .form-input').type('123456') //Zip Code
      cy.wait(2000)
      
      cy.get(':nth-child(6)>:nth-child(2)>:nth-child(2).form-input').select() //Country dropdown
      //cy.get('.dropdown-content > :nth-child(1)').click() //Country
      
      cy.wait(3000)
      cy.get('[name="__privateStripeFrame6493"]').type('4242424242424242') //Card Number
      cy.get('[name="__privateStripeFrame6494"]').type('1225') //Expiry Date
      cy.get('[name="__privateStripeFrame6495"]').type('123') //CVC
      
      //cy.get('.popup-footer > .red').click() //Save button
      
      //Second payment method add
      cy.get('[href="/settings#payment-methods"]').click()
      cy.get('.baseButton').click()  //Add payment method
      
      cy.get('[name="__privateStripeFrame3953"]').type("42424242424242")//Card Number
      cy.get('[name="__privateStripeFrame3954"]').type("1226") //Expire date
      cy.get('[name="__privateStripeFrame3955"]').type(123) //CVV
    
    
    })
    
    
    it.skip('Subscriptions', () => {
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

    it('Proxy', () => {

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
        cy.get('#account').select('u/Impossible_Step5937') //Select account
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
})