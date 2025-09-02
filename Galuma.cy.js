describe('Visit Galumatires Pickup Page', () => {
    it('should visit the pickup page with basic authentication', () => {
        cy.viewport(1475, 750)
        cy.visit('https://dev.galumatires.com/pick-up', {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }

             
        });

        //img
        cy.get('.banner-help')
        .should('have.css', 'height', '600px')
        .should('have.css', 'display', 'flex')
        .should('be.visible');


        //shop now btn
        cy.get('.col-4 > .content > .btn')
        .should('have.css', 'font-family', '"Red Hat Display", sans-serif')
        .should('have.css', 'border-radius', '5px')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgb(215, 16, 16)');
 

        // Validate header
        cy.get('.pick-up-main > .sec-heading > strong')
        .should('have.css', 'font-family', '"Red Hat Display", sans-serif')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('include.text', 'Pick Up your order')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'font-size', '50px');
       

        cy.get('.pick-up-main > .sec-heading > span')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('include.text', 'and save!')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '65px');
            
        // Validate main banner text color
        cy.get('.col-xs-12 > p')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '20px')
        .should('have.css', 'color', 'rgb(0, 0, 0)');
        
        // Validate all buttons have a consistent style
        cy.get('.col-4 > .content > .btn').each(($btn) => {
            cy.wrap($btn).should('have.css', 'background-color', 'rgb(215, 16, 16)');
            cy.wrap($btn).should('have.css', 'border-radius', '5px');
            cy.wrap($btn).should('have.css', 'color', 'rgb(255, 255, 255)');
        });

        // Validate main content section
        cy.get('.col-xs-12 > p')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '20px')
        .should('have.css', 'color', 'rgb(0, 0, 0)');

        // Validate FAQ section
        cy.get('.faq-section')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        // Validate footer background color
        cy.get('footer').should('have.css', 'background-color', 'rgb(60, 60, 59)');


        // Validate all buttons have a consistent style
        cy.get('.button > .btn').each(($btn) => {
        cy.wrap($btn).should('have.css', 'background-color', 'rgb(215, 16, 16)'); 
        cy.wrap($btn).should('have.css', 'border-radius', '5px');
        cy.wrap($btn).should('have.css', 'color', 'rgb(255, 255, 255)');
        });
                
        
        // Specific images validation
        cy.get('.col-sm-4 > .img-responsive').should('be.visible');
        cy.get('.img-container > .img-responsive').should('be.visible');
        cy.get(':nth-child(1) > .p-n > .img-fluid').should('be.visible');
        cy.get(':nth-child(2) > .p-n > .img-fluid').should('be.visible');
        cy.get(':nth-child(3) > .p-n > .img-fluid').should('be.visible');
        cy.get('.container > :nth-child(3) > :nth-child(1) > .img-fluid').should('be.visible');
        
        // Validate container content
        cy.get('.three-options-container > h2 > strong')
        .should('have.css', 'font-size', '32px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'color', 'rgb(0, 0, 0)');
        
        cy.get('.col-4 > .content > p')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '22px');
       
        cy.get('.col-4 > .content > .btn')
        .should('have.css', 'background-color', 'rgb(215, 16, 16)')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '20px')
        
        
        // Validate transport section
        cy.get('.three-options-container > h2 > strong').should('have.css', 'font-size', '32px');
        cy.get('.transport-p').should('have.css', 'color', 'rgb(33, 37, 41)');
        cy.get('.transport > .container > :nth-child(3) > :nth-child(2)').should('have.css', 'color', 'rgb(33, 37, 41)');

        //Heading List validation 
        cy.get('#heading-1')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-2')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-3')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');
        
        cy.get('#heading-4')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-5')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-6')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-7')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-8')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        cy.get('#heading-9')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'color', 'rgb(33, 37, 41)');

        // Validate FAQ section
        cy.get('.text-center > .sec-heading')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'font-size', '50px')
        .should('have.css', 'color', 'rgb(0, 0, 0)');

        
        // Validate footer elements css validation
        cy.get('.button > .btn')
        .should('have.css', 'border-radius', '5px')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgb(215, 16, 16)');
        
        cy.get('.d-flex > .form-control')
        .should('have.css', 'border-radius', '0px')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('be.visible');

        cy.get('.d-flex > .btn')
        .should('have.css', 'border-radius', '0px')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgb(215, 16, 16)');

        cy.get('.bottom_details > :nth-child(1) > a')
        .should('have.css', 'border-radius', '0px')
        .should('have.css', 'color', 'rgb(255, 255, 255)');

        cy.get('.bottom_details > :nth-child(2) > a')
        .should('have.css', 'border-radius', '0px')
        .should('have.css', 'color', 'rgb(255, 255, 255)');

        cy.get('.bottom_details > :nth-child(3) > a')
        .should('have.css', 'border-radius', '0px')
        .should('have.css', 'color', 'rgb(255, 255, 255)');

        //footer 
        cy.get('.first > :nth-child(1) > a')

        cy.get('.first > :nth-child(2) > a')

        cy.get('.first > :nth-child(3) > a')

        cy.get('.first > :nth-child(4) > a')

        cy.get('.first > :nth-child(5) > a')

        cy.get(' :nth-child(6) > a')




        //social links icon img
       cy.get('.col-md-4 > .social-icon > .list-unstyled > :nth-child(1) > a > .img-fluid')
       .should('have.css', 'width', '35px')
       .should('have.css', 'height', '35px')
       .should('have.css', 'display', 'inline')
       .should('be.visible');

       cy.get('.col-md-4 > .social-icon > .list-unstyled > :nth-child(2) > a > .img-fluid')
       .should('have.css', 'width', '35px')
       .should('have.css', 'height', '35px')
       .should('have.css', 'display', 'inline')
       .should('be.visible');
   
       cy.get('.col-md-4 > .social-icon > .list-unstyled > :nth-child(3) > a > .img-fluid')
       .should('have.css', 'height', '35px')
       .should('have.css', 'display', 'inline')
       .should('be.visible');

       cy.get('.col-md-4 > .social-icon > .list-unstyled > :nth-child(4) > a > .img-fluid')
       .should('have.css', 'width', '35px')
       .should('have.css', 'height', '35px')
       .should('have.css', 'display', 'inline')
       .should('be.visible');


         //shop now btn functionality
         //cy.get('.col-4 > .content > .btn').click();
         //cy.url().should("include", "https://dev.galumatires.com/shop-tire");
         cy.wait(3000);

         //cy.get('.home-button').click();

    });

    });


    
    








   