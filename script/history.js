 function loadHistory() {
           const tableBody = document.getElementById('history-table-body');
           const savedOrders = JSON.parse(localStorage.getItem('cafeOrders')) || [];

           if (savedOrders.length === 0) {
               tableBody.innerHTML = `
                   <tr>
                       <td colspan="6" class="empty-msg">Belum ada riwayat pesanan yang tercatat.</td>
                   </tr>
               `;
               return;
           }
           
           savedOrders.sort((a,b) => new Date(a.date) - new Date(b.date));

           let html = '';
           // Urutkan dari pesanan terbaru ke terlama menggunakan .slice().reverse()
           savedOrders.slice().reverse().forEach(order => {
               let totalPrice = 0;
               let itemsHtml = '<ul class="item-list">';

               order.items.forEach(item => {
                   let subtotal = item.price * item.qty;
                   totalPrice += subtotal;
                   itemsHtml += `<li>${item.name} (x${item.qty})</li>`;
               });
               itemsHtml += '</ul>';

              html += `
        <tr>
            <td data-label="Waktu:">${order.date}</td>
            <td data-label="Pelanggan:">${order.name}</td>
            <td data-label="No. Meja:">Meja ${order.table}</td>
            <td data-label="Menu:">${itemsHtml}</td>
            <td data-label="Catatan:" ">${order.notes ? order.notes : '<span>-</span>'}</td>
            <td data-label="Total:" class="total-price">Rp ${totalPrice.toLocaleString('id-ID')}</td>
        </tr>
        `;
           });

           tableBody.innerHTML = html;
       }

       function clearHistory() {
           if (confirm("Apakah Anda yakin ingin menghapus semua riwayat pesanan di tabel ini?")) {
               localStorage.removeItem('cafeOrders');
               loadHistory();
           }
       }

       // Jalankan fungsi saat halaman dimuat
       loadHistory();