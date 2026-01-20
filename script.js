document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('tableBody');

    // Fetch the JSON data
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            renderTable(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            tableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:red;">Failed to load data. Ensure you are running this on a local server.</td></tr>`;
        });

    function renderTable(brands) {
        // Clear loading state
        tableBody.innerHTML = '';

        brands.forEach(brand => {
            const row = document.createElement('tr');

            // Title Cell
            const titleCell = document.createElement('td');
            titleCell.className = 'title-cell';
            titleCell.textContent = brand.title;

            // Description Cell
            const descCell = document.createElement('td');
            descCell.className = 'desc-cell';
            descCell.textContent = brand.description;

            // Link Cell
            const linkCell = document.createElement('td');
            const linkBtn = document.createElement('a');
            linkBtn.href = brand.link;
            linkBtn.textContent = 'View PDF';
            linkBtn.className = 'btn-link';
            linkBtn.target = '_blank'; // Open in new tab
            linkBtn.rel = 'noopener noreferrer'; // Security best practice

            linkCell.appendChild(linkBtn);

            // Append all to row
            row.appendChild(titleCell);
            row.appendChild(descCell);
            row.appendChild(linkCell);

            // Append row to table
            tableBody.appendChild(row);
        });
    }
});
