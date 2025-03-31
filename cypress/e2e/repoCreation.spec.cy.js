describe("Repository Creation", () => {
  it("should allow a user to create a new repository", () => {
    cy.visit("/login");
    cy.get("#username").type("testuser");
    cy.get("#password").type("password123");
    cy.get("#login-button").click();

    cy.contains("New Repository").click();
    cy.get("#repo-name").type("Test Repository");
    cy.get("#repo-description").type("This is a test repository.");
    cy.get("#create-repo-button").click();

    cy.contains("Test Repository").should("be.visible");
  });
});
