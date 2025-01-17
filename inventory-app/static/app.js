document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("inventory-table").querySelector("tbody");
    const addButton = document.getElementById("add-laptop-btn");
  
    const laptops = [
      { assetNo: "12345", status: "In Stock", returnDate: null },
      { assetNo: "67890", status: "Deployed", returnDate: "2025-02-15" },
    ];
  
    function renderTable() {
      table.innerHTML = ""; // Clear existing rows
      laptops.forEach((laptop, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${laptop.assetNo}</td>
          <td>${laptop.status}</td>
          <td>${laptop.returnDate || "N/A"}</td>
        `;
        table.appendChild(row);
      });
    }
  
    addButton.addEventListener("click", () => {
      const assetNo = prompt("Enter Asset No:");
      const status = prompt("Enter Status (In Stock or Deployed):");
      const returnDate = status === "Deployed" ? prompt("Enter Return Date (YYYY-MM-DD):") : null;
  
      laptops.push({ assetNo, status, returnDate });
      renderTable();
    });
  
    renderTable();
  });
  