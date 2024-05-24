class ProfileModal extends HTMLElement {
    constructor() {
      super();
      this.handleKeydown = this.handleKeydown.bind(this);
    }
  
    connectedCallback() {
      this.render();
      // Event listener para el botón de cerrar
      this.querySelector('#close-modal').addEventListener('click', () => {
        this.closeModal();
      });
  
      // Event listener para cerrar al hacer clic fuera del contenido del modal
      this.querySelector('#modal-overlay').addEventListener('click', (event) => {
        if (event.target === this.querySelector('#modal-overlay')) {
          this.closeModal();
        }
      });
  
      // Event listener para cerrar con la tecla Esc
      document.addEventListener('keydown', this.handleKeydown);
    }
  
    disconnectedCallback() {
      // Remove the event listener when the component is removed from the DOM
      document.removeEventListener('keydown', this.handleKeydown);
    }
  
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    }
  
    closeModal() {
      this.remove();
    }
  
    render() {
      const fullName = this.getAttribute("full-name") || "";
      const nationality = this.getAttribute("nationality") || "";
      const skills = this.getAttribute("skills") || "";
      const profile = this.getAttribute("profile") || "";
  
      this.innerHTML = `
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" id="modal-overlay">
          <div class="bg-white p-6 rounded-lg shadow-lg w-96" id="modal-content">
            <h2 class="text-xl font-bold mb-4">${fullName}</h2>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Profile:</strong> ${profile}</p>
            <div class="flex justify-end">
                <button id="close-modal" class="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">Close</button>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("accenture-profile-modal", ProfileModal);