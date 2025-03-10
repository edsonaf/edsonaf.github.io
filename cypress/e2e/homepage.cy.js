describe('Homepage', () => {
    it('should load the homepage', () => {
      cy.visit('/');
      cy.contains('Saint Software'); // Replace with actual text or element on your homepage
    });  
  });