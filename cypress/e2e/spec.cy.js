describe("Thunderflow App", () => {
  it("should allow typing and sending a message", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[placeholder="Type a message"]').type(
      " Hello Dr. Lu Tianxiang!"
    );
    cy.contains("Send").click();
    cy.contains("Hello Dr. Lu Tianxiang").should("exist");
  });
});
