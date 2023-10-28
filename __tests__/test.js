describe("displays content", () => {
  const doc = document;

  it("generates main content", () => {
    const main = doc.getElementById("main-content");
    expect(main).toBeDefined();
  });

  it("generates gallery", () => {
    const gallery = doc.getElementById("gallery-container");
    expect(gallery).toBeDefined();
  });

  it("generates contact form", () => {
    const contactForm = doc.getElementById("contact-form");
    expect(contactForm).toBeDefined();
  });

  it("generates footer", () => {
    const footer = doc.getElementById("footer");
    expect(footer).toBeDefined();
  });
});
