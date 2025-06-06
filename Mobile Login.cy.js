describe("Login", () =>  {

    it('Functions', () => {
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
        cy.get('#username').type('PostSfrdnc5wr3636')
        cy.get('#email').type('postsynrc53fgw@yopmail.com')
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



        //Forget password
        cy.get('.tabs > :nth-child(1)').click() //Signin
         cy.get('.forgot-password').click()  //Forget password
         cy.get('#email').type('postsync060@yopmail.com') //Email
         cy.get('.baseButton').click() //Submit


  })        
}) 