/// <reference types="cypress" />

describe("Test Searching ", () => {
    it("Should has 10 Results", () => {
        cy.visit("http://localhost:3000");

        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)

        })
    });

    it("Should has 4 Results", () => {
        cy.visit("http://localhost:3000");
        cy.get('[placeholder=Search]').type("b");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(4)

        })
    });

    it("Should has 0 Results", () => {
        cy.visit("http://localhost:3000");
        cy.get('[placeholder=Search]').type("b1341245");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(0)

        })
    });

    it("Should has Facebook title card", () => {
        cy.visit("http://localhost:3000");
        cy.get('[placeholder=Search]').type("facebook");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('h2').should('have.text', 'Facebook')
    });

    it("Should has Facebook title card", () => {
        cy.visit("http://localhost:3000");
        cy.get('[placeholder=Search]').type("Facebook");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('h2').should('have.text', 'Facebook')
    });

})


describe("Test Buttons and Navigation ", () => {
    it("Searching + Restore to Default", () => {
        cy.visit("http://localhost:3000");
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })
        cy.get('[data-cy=btn-ghost]').click({force: true});
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })
        cy.get('[placeholder=Search]').type("Facebook");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('h2').should('have.text', 'Facebook')

        cy.get('[data-cy=btn-ghost]').click({force: true});
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })

    });

    it("Navigation Test 1", () => {
        cy.visit("http://localhost:3000");
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })
        cy.get('[data-cy=about-us-link]').click({force: true});
        cy.url().should('eq', 'http://localhost:3000/about')

        cy.get('[data-cy=home-link]').click({force: true});
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })
        cy.url().should('eq', 'http://localhost:3000/')

    });

    it("Navigation Test 2", () => {
        cy.visit("http://localhost:3000");
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })
        cy.get('[data-cy=about-us-link]').click({force: true});
        cy.url().should('eq', 'http://localhost:3000/about')

        cy.get('[data-cy=home-link]').click({force: true});
        cy.get('.list-of-items').find('h2').should(($listOfElements) => {
            expect($listOfElements).to.have.length(10)
        })
        cy.url().should('eq', 'http://localhost:3000/')

    });


})




