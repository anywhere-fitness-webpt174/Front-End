describe("Classes", () => {
  it("test the test", () => {
    expect(true).to.equal(true);
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000/add-class");
  });

  const className = () => cy.get('input[name="className"]');
  const classType = () => cy.get('input[name="classType"]');
  const startTime = () => cy.get('input[name="startTime"]');
  const duration = () => cy.get('select[name="duration"]');
  const intesity = () => cy.get('select[name="intesity"]');
  const location = () => cy.get('input[name="location"]');
  const maxClassSize = () => cy.get('input[name="maxClassSize"]');
  const addClassButton = () => cy.get(".addClassButton");
  const sampleText = "This is some sample text";

  it("The element exist and can recieve text", () => {
    className().should("exist");
    className().type(sampleText);

    classType().should("exist");
    classType().type(sampleText);

    startTime().should("exist");
    startTime().type(sampleText);

    duration().should("exist");
    duration().select("30 Minutes");

    intesity().should("exist");
    intesity().select("3");

    location().should("exist");
    location().type(sampleText);

    maxClassSize().should("exist");
    maxClassSize().type(sampleText);

    addClassButton().should("exist");
    addClassButton().click();
    className().should('be.empty')
  });
});
