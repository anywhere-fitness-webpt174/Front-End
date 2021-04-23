describe("Classes", () => {
  it("test the test", () => {
    expect(true).to.equal(true);
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000/add-class");
  });

  const className = () => cy.get('input[name="className"]');
  const sampleText = "This is some sample text";

  it('The element exist and can recieve text', () => {
      className().should('exist');
      className().type(sampleText);
  })

});
