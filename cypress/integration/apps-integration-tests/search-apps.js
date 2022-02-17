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

// describe("Test Searching Contacts By Age and Name", () => {
//     it("Should has 1 results with  age of 30 and name of Mitzi Curtis", () => {
//         cy.visit("http://localhost:3000");
//         cy.get('.pa3').type("30 Mitzi%20Curtis");
//         cy.get('[data-cy=find]').click({force: true});
//         cy.get('img').should('have.length', 1);
//     });
//
//     it("Should has empty results (not contacts) with age of 30 and name of Mitzi Cohen", () => {
//         cy.visit("http://localhost:3000");
//         cy.get('.pa3').type("30 Mitzi%20Cohen");
//         cy.get('[data-cy=find]').click({force: true});
//         cy.get('img').should('have.length', 0);
//     });
// })