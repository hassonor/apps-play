/// <reference types="cypress" />

describe("Test Searching Facebook App", () => {
    it("Should has 1 Results", () => {
        cy.visit("http://localhost:3000");
        cy.get('.pa3').type("30");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('img').should('have.length', 3);
    });

    it("Should has empty results (not contacts) with age of 120", () => {
        cy.visit("http://localhost:3000");
        cy.get('.pa3').type("120");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('img').should('have.length', 0);
    });
})

describe("Test Searching Contacts By Age and Name", () => {
    it("Should has 1 results with  age of 30 and name of Mitzi Curtis", () => {
        cy.visit("http://localhost:3000");
        cy.get('.pa3').type("30 Mitzi%20Curtis");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('img').should('have.length', 1);
    });

    it("Should has empty results (not contacts) with age of 30 and name of Mitzi Cohen", () => {
        cy.visit("http://localhost:3000");
        cy.get('.pa3').type("30 Mitzi%20Cohen");
        cy.get('[data-cy=find]').click({force: true});
        cy.get('img').should('have.length', 0);
    });
})