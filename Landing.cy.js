describe("Landing Page Automation", () =>  {

    it('Functions', () => {

        cy.viewport(1920, 1080)
        cy.visit(" https://dev.postsync.ai/ ", {
            auth: {
              username: 'admin',
              password: 'subreddittest'
            }
          })

        cy.get('.nav > :nth-child(3)').click() //Features
        cy.wait(2000)

        cy.get('.nav > :nth-child(2)').click() //Pricing
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
        cy.get('.container > .row > .button').click()
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

        //Plans
        cy.get('.nav > :nth-child(2)').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=free');
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get(':nth-child(2) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=pro');
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get(':nth-child(3) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=advanced');
        cy.wait(2000)
        cy.go(-1)

        cy.wait(2000)
        cy.get(':nth-child(4) > .btn').click()
        cy.url().should('eq', 'https://dev.postsync.ai/register?plan=enterprise');
        cy.wait(2000)
        cy.go(-1)



    });        
});