
  const searchIcon = document.getElementById("search-icon");
  const searchContainer = document.querySelector(".search-container");

  searchIcon.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
      const input = document.getElementById("search-input");
      if (searchContainer.classList.contains("active")) {
          input.focus();
      } else {
          input.value = "";
      }
  });

