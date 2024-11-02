describe('CSS LOCATORS', ()=>{
    it('css locators', ()=>{
        cy.visit('https://vtu.ng/dashboard/?action=register')
        cy.get('#reg_username').type('adebayo1')
        cy.get('#reg_email').type('odiboend@gmail.com')
        cy.get('#reg_password').type('12345678')
        cy.get('#reg_billing_phone').type('09070809060')
        cy.get("input[value='Register']").click()
        
    })
})