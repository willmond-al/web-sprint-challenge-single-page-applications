describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
})

const nameInput = () => cy.get("input[name='name']")
const instructionInput = () => cy.get("input[name='instructions']")
const sizeInput = () => cy.get ("input[name='size'")
const pepperoniBox = () => cy.get("input[name='pepperoni']")
const jalapenosBox = () => cy.get("input[name='jalapenos']")
const mushroomBox = () => cy.get("input[name='mushrooms']")
const pineappleBox = () => cy.get("input[name='pineapple']")
const orderBtn = () => cy.get("#order")

it('text can be added to text boxes', () => {
    nameInput()
    .should('have.value', '')
    .type('will-mondal')
    .should('have-value', 'will-mondal')
    
    instructionInput()
    .should('have.value', '')
    .type('test')
    .should('have-value', 'test')
})

it('test that you can have multiple toppings', () => {

    cy.contains("pepperoni").should("not.exist")
    cy.contains("jalapenos").should("not.exist")
    cy.contains("mushrooms").should("not.exist")
    cy.contains("pineapple").should("not.exist")
    pepperoniBox().check()
    jalapenosBox().check()
    mushroomBox().check()
    pineappleBox().check()
    
    nameInput()
    .type('test')

    sizeInput()
    .select('small(10)')

    orderBtn().click()
    cy.contains("pepperoni").should("exist")
    cy.contains("jalapenos").should("exist")
    cy.contains("mushrooms").should("exist")
    cy.contains("pineapple").should("exist")


})

it('test you can submit the form', () => {
    nameInput()
    .type('test')

    sizeInput()
    .select('small(10)')
    orderBtn().click()
    cy.contains('.order-container').should('exist')

    
})
// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form