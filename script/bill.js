  const savedOrder = localStorage.getItem('lastOrder');

        if (!savedOrder) {
            alert("Tidak ada data pesanan ditemukan!");
            window.location.href = 'index.html';
        } else {
            const orderData = JSON.parse(savedOrder);
            
            
            document.getElementById('receipt-date').innerText = orderData.date;
            document.getElementById('name').innerText = orderData.name;
            document.getElementById('table').innerText = orderData.table;
            document.getElementById('notes').innerText = orderData.notes || 'Tidak ada catatan';
            document.getElementById('cands').innerText = orderData.cands;
            document.getElementById('date').innerText = orderData.date;
            
            const subtotal = document.getElementById('well-subtotal');
            const disc = document.getElementById('well-diskon');
            const paj = document.getElementById('well-pajak');
            
            if (subtotal)subtotal.innerText = `Rp ${orderData.subtotal.toLocaleString('id-ID')}`;
            if (disc) disc.innerText = `Rp ${orderData.diskon.toLocaleString('id-ID')}`;
            if (paj) paj.innerText = `Rp ${orderData.pajak.toLocaleString('id-ID')}`;

    
            let listHtml = '';
            if (orderData.items && orderData.items.length > 0) {
                orderData.items.forEach(item => {
                    const subtotalItem = item.price * item.qty;
                listHtml += `
                    <div class="receipt-item">
                        <span>${item.name} (x${item.qty})</span>
                        <span>Rp ${subtotalItem.toLocaleString('id-ID')}</span>
                    </div>
            `;
        });
    }
            document.getElementById('receipt-list').innerHTML = listHtml;

            const grandTotal = orderData.totalBayar;
            document.getElementById('receipt-total-price').innerText = `Rp ${grandTotal.toLocaleString('id-ID')}`;
        }