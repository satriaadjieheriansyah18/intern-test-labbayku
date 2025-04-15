function displaySearchResults() {
    var query = new URLSearchParams(window.location.search).get("query");
    var searchResults = document.getElementById("search-results");
    var results = [];
  
    // mencari melalui file-file
    if (query.toLowerCase().includes("layanan")) {
      results.push({ title: "Halal Tour", url: "halaltour.html" });
    }
    if (query.toLowerCase().includes("q&a")) {
      results.push({ title: "Q&A", url: "q&a.html" });
    }
    if (query.toLowerCase().includes("tentang kami")) {
      results.push({ title: "Tentang Kami", url: "tentangkami.html" });
    }
    if (query.toLowerCase().includes("home") || query.toLowerCase().includes("index")) {
      results.push({ title: "Home", url: "index.html" });
    }
  
    // menampilkan hasil pencarian
    searchResults.innerHTML = "";
    results.forEach(function(result) {
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      link.href = result.url;
      link.textContent = result.title;
      listItem.appendChild(link);
      searchResults.appendChild(listItem);
    });
  }
  
  // Jalankan fungsi displaySearchResults ketika file hasil-pencarian.html diakses
  window.onload = displaySearchResults;