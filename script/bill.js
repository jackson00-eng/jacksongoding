  const savedOrder = localStorage.getItem('lastOrder');

        if (!savedOrder) {
            alert("Tidak ada data pesanan ditemukan!");
            window.location.href = 'index1.html';
        } else {
            const orderData = JSON.parse(savedOrder);
            
            
            document.getElementById('receipt-date').innerText = orderData.date;
            document.getElementById('name').innerText = orderData.name;
            document.getElementById('table').innerText = orderData.table;
            document.getElementById('notes').innerText = orderData.notes || 'Tidak ada catatan';
            document.getElementById('cands').innerText = orderData.cands;
            document.getElementById('date').innerText = orderData.date;

            let listHtml = '';
            let grandTotal = 0;

            orderData.items.forEach(item => {
                const subtotal = item.price * item.qty;
                grandTotal += subtotal;

                listHtml += `
                    <div class="receipt-item">
                        <span>${item.name} (x${item.qty})</span>
                        <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
                    </div>
                `;
            });

            document.getElementById('receipt-list').innerHTML = listHtml;
            document.getElementById('receipt-total-price').innerText = `Rp ${grandTotal.toLocaleString('id-ID')}`;
        }