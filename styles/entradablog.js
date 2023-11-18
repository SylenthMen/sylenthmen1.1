document.addEventListener("DOMContentLoaded", function () {
    const entriesData = [
      { id: 1, title: "Contruccion de este sitio", content: "Te cuento un poco del como empece con este proyecto." },
      { id: 2, title: "Entrada 2", content: "Contenido de la Entrada 2" },
      { id: 3, title: "Entrada 3", content: "Contenido de la Entrada 3" },
      { id: 4, title: "Entrada 4", content: "Contenido de la Entrada 4" },
      { id: 5, title: "Entrada 5", content: "Contenido de la Entrada 5" },
      // Agrega más entradas según sea necesario
    ];

    const entriesContainer = document.getElementById("entries-container");
    const toggleModeButton = document.getElementById("toggle-mode");

    function renderEntries() {
      entriesContainer.innerHTML = "";

      entriesData.forEach((entry) => {
        const entryElement = document.createElement("div");
        entryElement.classList.add("entry");

        const titleElement = document.createElement("h2");
        const linkElement = document.createElement("a");

        linkElement.href = `entrada${entry.id}.html`;
        linkElement.textContent = entry.title;
        titleElement.appendChild(linkElement);

        const contentElement = document.createElement("p");
        contentElement.textContent = entry.content;

        entryElement.appendChild(titleElement);
        entryElement.appendChild(contentElement);

        entriesContainer.appendChild(entryElement);
      });
    }

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    toggleModeButton.addEventListener("click", toggleDarkMode);

    renderEntries();
  });