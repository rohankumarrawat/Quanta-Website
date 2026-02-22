/**
 * Full-Text Search for Quanta Website
 * Indexes all content and provides search functionality
 */

const SearchEngine = {
  // Content index - maps search terms to pages and sections
  index: [
    {
      id: 1,
      title: "Introduction",
      page: "index.html",
      section: "#introduction",
      content:
        "Welcome to Quanta documentation. High-performance systems programming language. Data Density and Smart Compilation.",
      keywords: ["introduction", "quanta", "welcome", "documentation"],
    },
    {
      id: 2,
      title: "Core Features",
      page: "index.html",
      section: "#core_features",
      content:
        "Quanta offers high-performance systems programming with memory-aware data types. Features include data density, smart compilation, LLVM integration.",
      keywords: ["features", "core", "performance", "compilation", "memory"],
    },
    {
      id: 3,
      title: "File Structure",
      page: "index.html",
      section: "#file_structure",
      content:
        "Project structure includes include directory with lexer, parser, codegen, optimizer, and utils. Source files in src directory.",
      keywords: ["file", "structure", "directory", "project", "organization"],
    },
    {
      id: 4,
      title: "Customization",
      page: "index.html",
      section: "#customization",
      content:
        "Customize your Quanta installation and configuration settings. Modify CSS files and JavaScript for custom behavior.",
      keywords: ["customization", "settings", "configuration", "css", "javascript"],
    },
    {
      id: 5,
      title: "Installation",
      page: "installation.html",
      section: "#installation",
      content:
        "Install Quanta compiler and dependencies. Follow step-by-step guide for Windows, macOS, and Linux systems.",
      keywords: ["installation", "install", "setup", "dependencies", "compiler"],
    },
    {
      id: 6,
      title: "Getting Started",
      page: "installation.html",
      section: "#getting-started",
      content:
        "Get started with Quanta. Write your first program, understand syntax basics, and run your code.",
      keywords: ["getting started", "first program", "hello world", "start", "begin"],
    },
    {
      id: 7,
      title: "System Requirements",
      page: "installation.html",
      section: "#requirements",
      content:
        "System requirements: C++ compiler, CMake, LLVM. Minimum 2GB RAM and 500MB disk space.",
      keywords: ["requirements", "system", "minimum", "compiler", "cmake"],
    },
    {
      id: 8,
      title: "Language Syntax",
      page: "source.html",
      section: "#syntax",
      content:
        "Learn Quanta syntax including variables, functions, control flow, data types, and operators.",
      keywords: ["syntax", "language", "variables", "functions", "operators"],
    },
    {
      id: 9,
      title: "Data Types",
      page: "source.html",
      section: "#data-types",
      content:
        "Quanta data types include int, float, bool, strings, and arrays. Memory-aware byte types for dense layouts.",
      keywords: ["data types", "int", "float", "array", "string"],
    },
    {
      id: 10,
      title: "Functions and Methods",
      page: "source.html",
      section: "#functions",
      content:
        "Define and call functions in Quanta. Support for overloading, recursion, and first-class function types.",
      keywords: ["function", "method", "call", "define", "overload"],
    },
    {
      id: 11,
      title: "Control Flow",
      page: "source.html",
      section: "#control-flow",
      content:
        "Control flow statements: if/else, switch, for loops, while loops, and do-while loops in Quanta.",
      keywords: ["control flow", "if", "switch", "loop", "while"],
    },
    {
      id: 12,
      title: "Content Guide",
      page: "content.html",
      section: "#content",
      content:
        "Documentation content guidelines, writing style, and formatting standards for Quanta documentation.",
      keywords: ["content", "guide", "documentation", "writing", "style"],
    },
    {
      id: 13,
      title: "Changelog",
      page: "change.html",
      section: "#changelog",
      content:
        "Version history and changelog. Latest updates, bug fixes, and new features in each Quanta release.",
      keywords: ["changelog", "version", "history", "release", "update"],
    },
    {
      id: 14,
      title: "Contributors",
      page: "thanks.html",
      section: "#contributors",
      content:
        "Special thanks to all contributors, maintainers, and supporters of the Quanta project.",
      keywords: ["thanks", "contributors", "acknowledgments", "team", "support"],
    },
  ],

  /**
   * Initialize search functionality
   */
  init: function () {
    this.attachEventListeners();
  },

  /**
   * Attach event listeners to search input and button
   */
  attachEventListeners: function () {
    const searchInput = document.querySelector(".form-doct input[type='search']");
    const searchBtn = document.querySelector(".search-btn");

    if (!searchInput || !searchBtn) return;

    // Search on button click
    searchBtn.addEventListener("click", () => {
      this.performSearch(searchInput.value);
    });

    // Search on Enter key
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.performSearch(searchInput.value);
      }
    });

    // Real-time search as user types (optional enhancement)
    searchInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
        this.performSearch(e.target.value);
      } else {
        this.closeSearchResults();
      }
    });
  },

  /**
   * Perform search and display results
   */
  performSearch: function (query) {
    if (!query.trim()) {
      this.closeSearchResults();
      return;
    }

    const results = this.search(query);
    this.displayResults(query, results);
  },

  /**
   * Search through index
   */
  search: function (query) {
    const lowerQuery = query.toLowerCase();
    const results = [];

    this.index.forEach((item) => {
      const contentMatch = item.content.toLowerCase().includes(lowerQuery);
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowerQuery)
      );

      if (contentMatch || titleMatch || keywordMatch) {
        // Calculate relevance score
        let score = 0;
        if (titleMatch) score += 10;
        if (keywordMatch) score += 5;
        if (contentMatch) score += 1;

        results.push({
          ...item,
          score: score,
        });
      }
    });

    // Sort by relevance score
    results.sort((a, b) => b.score - a.score);
    return results;
  },

  /**
   * Display search results in modal
   */
  displayResults: function (query, results) {
    let modal = document.getElementById("search-results-modal");

    if (!modal) {
      modal = this.createResultsModal();
      document.body.appendChild(modal);
    }

    const resultsContainer = modal.querySelector(".search-results-list");
    const resultsCount = modal.querySelector(".search-results-count");

    // Clear previous results
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<div class="search-no-results">No results found for "<strong>' +
        this.escapeHtml(query) +
        '</strong>"</div>';
      resultsCount.textContent = "0 results";
    } else {
      results.forEach((result) => {
        const resultItem = document.createElement("a");
        resultItem.href = result.page + result.section;
        resultItem.className = "search-result-item";
        resultItem.innerHTML = `
          <div class="result-title">${this.highlightQuery(result.title, query)}</div>
          <div class="result-page">${result.page}</div>
          <div class="result-preview">${this.highlightQuery(result.content, query)}</div>
        `;

        resultItem.addEventListener("click", (e) => {
          e.preventDefault();
          this.closeSearchResults();
          window.location.href = resultItem.href;
        });

        resultsContainer.appendChild(resultItem);
      });

      resultsCount.textContent =
        results.length + " result" + (results.length !== 1 ? "s" : "");
    }

    modal.classList.add("active");
  },

  /**
   * Create search results modal
   */
  createResultsModal: function () {
    const modal = document.createElement("div");
    modal.id = "search-results-modal";
    modal.className = "search-results-modal";
    modal.innerHTML = `
      <div class="search-results-overlay"></div>
      <div class="search-results-container">
        <div class="search-results-header">
          <h2>Search Results</h2>
          <span class="search-results-count">0 results</span>
          <button class="search-results-close">
            <i class="ri-close-line"></i>
          </button>
        </div>
        <div class="search-results-list"></div>
      </div>
    `;

    // Close button
    modal
      .querySelector(".search-results-close")
      .addEventListener("click", () => {
        this.closeSearchResults();
      });

    // Close on overlay click
    modal
      .querySelector(".search-results-overlay")
      .addEventListener("click", () => {
        this.closeSearchResults();
      });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeSearchResults();
      }
    });

    return modal;
  },

  /**
   * Close search results modal
   */
  closeSearchResults: function () {
    const modal = document.getElementById("search-results-modal");
    if (modal) {
      modal.classList.remove("active");
    }
  },

  /**
   * Highlight query terms in text
   */
  highlightQuery: function (text, query) {
    const regex = new RegExp(`(${this.escapeRegex(query)})`, "gi");
    return text.replace(regex, "<mark>$1</mark>").substring(0, 150) + "...";
  },

  /**
   * Escape HTML special characters
   */
  escapeHtml: function (text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  },

  /**
   * Escape regex special characters
   */
  escapeRegex: function (text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  },
};

// Initialize search when DOM is ready
$(document).ready(function () {
  SearchEngine.init();
});
