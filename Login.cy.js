describe("Login", () =>  {

    it('Functions', () => {
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
        cy.wait(2000)
        cy.get('.dashboard-title').should('have.text', 'DASHBOARD')

        //Logout
        cy.get('.avatar').click()
        cy.wait(2000)
        cy.get('.profile-dropdown > :nth-child(2)').click()
        cy.wait(2000)


        //Signup with new user
        cy.get('.tabs > :nth-child(2)').click()
        cy.get('#username').type('PostSfdnc5wr3636')
        cy.get('#email').type('postsync53fgw@yopmail.com')
        cy.get('#password').type('Testing@123')
        cy.wait(2000)
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.success-title').should('have.text', 'Your account has been successfully created') //Verifiy navigation to success page

        cy.get('.btn').click() //Back to login

        //Signup with existing user/ Not valid Password
        cy.wait(3000)
        cy.get('.tabs > :nth-child(2)').click()
        cy.get('#username').type('PostSync')
        cy.get('#email').type('postsync052@yopmail.com')
        cy.get('#password').type('Testing')
        cy.get('.btn').click()
        cy.get('[data-testid="toast-content"]').should('have.text', 'Password does not meet all requirements') //Not valid Password
        cy.wait(6000)

        cy.get('#password').clear().type('Testing@123')
        cy.wait(2000)
        cy.get('.btn').click()
        cy.get('[data-testid="toast-content"]').should('have.text', 'Username or email already exists') //Verify user already exists
        cy.wait(4000)


        //Forget password
        cy.get('.tabs > :nth-child(1)').click() //Signin
         cy.get('.forgot-password').click()  //Forget password
         cy.get('#email').type('postsync060@yopmail.com') //Email
         cy.get('.baseButton').click() //Submit

    })    


}) 