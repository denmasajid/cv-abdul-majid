const printButton = document.querySelector("#printBtn");
const imageButtons = document.querySelectorAll(".view-image");
const pdfButtons = document.querySelectorAll(".view-pdf");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#imageModalLabel");
const imageModalElement = document.querySelector("#imageModal");
const imageModal = imageModalElement && window.bootstrap ? new bootstrap.Modal(imageModalElement) : null;
const pdfModalElement = document.querySelector("#pdfModal");
const pdfModal = pdfModalElement && window.bootstrap ? new bootstrap.Modal(pdfModalElement) : null;
const pdfFrame = document.querySelector("#pdfFrame");
const pdfTitle = document.querySelector("#pdfModalLabel");
const pdfOpenLink = document.querySelector("#pdfOpenLink");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}

imageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    const title = button.dataset.title || "Dokumen";

    if (modalImage && modalTitle && imageModal) {
      modalImage.src = image;
      modalImage.alt = `Preview ${title}`;
      modalTitle.textContent = title;
      imageModal.show();
    } else {
      window.open(image, "_blank");
    }
  });
});

pdfButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pdf = button.dataset.pdf;
    const title = button.dataset.title || "Dokumen PDF";

    if (pdfFrame && pdfTitle && pdfOpenLink && pdfModal) {
      pdfFrame.src = pdf;
      pdfOpenLink.href = pdf;
      pdfTitle.textContent = title;
      pdfModal.show();
    } else {
      window.open(pdf, "_blank");
    }
  });
});

if (pdfModalElement) {
  pdfModalElement.addEventListener("hidden.bs.modal", () => {
    if (pdfFrame) {
      pdfFrame.src = "";
    }
  });
}

document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse.show");

    if (navbarCollapse && window.bootstrap) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
  });
});
