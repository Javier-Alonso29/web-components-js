class CandidateCard extends HTMLElement {
  constructor() {
    super();

    // Obtén los valores de los atributos personalizados
    this.fullName = this.getAttribute("full-name") || "";
    this.position = this.getAttribute("position") || "";
    this.img = this.getAttribute("img") || "";
    this.nationality = this.getAttribute("nationality") || "";
    this.skills = this.getAttribute("skills") || "";
    this.profile = this.getAttribute("profile") || "";

    this.card = `
            <div class="relative bg-white p-6 rounded-lg shadow-lg w-96">
              <div class="grid grid-cols-2 gap-2">
                <div style="margin-top: -50px;">
                  <div class="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                    <!-- Image -->
                    <img src="${this.img}" alt="${this.fullName}" class="w-full h-full object-cover rounded-full">
                  </div>
                  <div class="mt-4">
                    <h2 class="text-xl font-bold">${this.fullName}</h2>
                    <p class="text-gray-600">${this.position}</p>
                  </div>
                </div>
                <div class="ml-6 flex-1">
                  <div class="flex justify-end space-x-4">
                    <!-- Social Media Icons -->
                    <a
                        slot="social-icons"
                        href="https://www.linkedin.com/in/javier-alonso-dev/"
                        target="_blank"
                        class="bg-blue-500 rounded-full text-white p-2 cursor-pointer"
                        >
                        <img
                        src="./assets/img/brand-linkedin.png"
                        class="w-6 h-6"
                        alt="linkedin"
                        />
                        </a>

                        <a
                                slot="social-icons"
                                href="https://github.com/Javier-Alonso29"
                                target="_blank"
                                class="bg-gray-800 rounded-full text-white p-2 cursor-pointer"
                                >
                                <img
                                src="./assets/img/brand-github.png"
                                class="w-6 h-6"
                                alt="github"
                                />
                        </a>
                  </div>
                  <div class="absolute" style="margin-top: 70px; right: 20px">
                    <button id="view-profile" class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                  </div>
                </div>
              </div>
            </div>`;
  }

  connectedCallback() {
    this.innerHTML = this.card;
    const button = this.querySelector("#view-profile");
    button.addEventListener("click", () => {
      this._viewProfile();
    });
  }

  _viewProfile() {
    const modal = document.createElement("accenture-profile-modal");
    modal.setAttribute("full-name", this.fullName);
    modal.setAttribute("nationality", this.nationality);
    modal.setAttribute("skills", this.skills);
    modal.setAttribute("profile", this.profile);
    document.body.appendChild(modal);
  }
}

customElements.define("accenture-card", CandidateCard);
