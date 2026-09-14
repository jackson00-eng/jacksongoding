document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById('history-table-body');
    if (!tbody) return;

    let allOrders = JSON.parse(localStorage.getItem('cafeOrders')) || [];

    if (allOrders.length === 0) {
    
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 6; 
        td.textContent = "Belum ada riwayat pesanan yang tersimpan.";
        td.style.textAlign = "center";
        td.style.padding = "20px";
        
        tr.appendChild(td);
        tbody.appendChild(tr);
       
    }

    allOrders.forEach(order => {
        const tr = document.createElement('tr');

        const tdDate = document.createElement('td');
        tdDate.textContent = order.date || '-';

        const tdName = document.createElement('td');
        tdName.textContent = order.name || '-';

        const tdTable = document.createElement('td');
        tdTable.textContent = order.table || '-';

        const tdCategory = document.createElement('td');
        tdCategory.textContent = order.category || 'Umum';

        let produkStr = '';
        if (order.items && order.items.length > 0) {
            produkStr = order.items.map(i => `${i.name} (x${i.qty})`).join(', ');
        }
        const tdItems = document.createElement('td');
        tdItems.textContent = produkStr;

        const tdTotal = document.createElement('td');
        const totalFinal = order.totalBayar || order.subtotal || 0;
        tdTotal.textContent = `Rp ${totalFinal.toLocaleString('id-ID')}`;

        tr.appendChild(tdDate);
        tr.appendChild(tdName);
        tr.appendChild(tdTable);
        tr.appendChild(tdCategory);
        tr.appendChild(tdItems);
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);
    });
});