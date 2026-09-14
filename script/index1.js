const menue = [
        { id: 1, category:"drink", name: "The Manhattan Gold Dust", price: 220000, img:"asset/MGD.jpg", desc:"Perpaduan rasa kopi cold brew yang kuat dan bersih, berpadu dengan kehangatan serta aroma kompleks dari barel wiski (kayu ek, karamel, dan vanila lembut).", penyajian:"Disajikan di dalam gelas kristal berat dengan bongkahan es transparan, dihiasi lembaran emas 24 karat yang melayang di permukaan serta semburan minyak esensial dari burnt orange peel."},
        { id: 2, category:"drink", name: "Midnight Noir Velvet", price: 135000, img:"asset/MNV.jpg", desc:"Rasa pahit manis yang seimbang antara espresso pekat beraroma arang dan cokelat Valrhona, dilembutkan oleh keharuman lavender serta kehalusan susu oat.", penyajian:"Disajikan dalam cangkir keramik hitam matte dengan taburan bunga lavender kering di atas busa susu yang tebal."}, 
        { id: 3, category:"drink", name: "Chrysler Smoked Nitro", price: 150000, img:"asset/CSN.jpg", desc:"Sensasi creamy instan di lidah dengan tekstur mirip Guinness namun berbasis kopi, diperkaya dengan aroma kayu apel yang memberikan kesan smoky elegan.", penyajian:"Menggunakan tabung nitro khusus dan ditutup kubah kaca yang menangkap asap kayu apel, dibuka tepat di hadapan tamu untuk pengalaman aromatik maksimal."},
        { id: 4, category:"drink", name: "24K Golden Obsidian Flat White", price: 195000, img:"asset/24KGOFW.jpg", desc:"Keasaman buah yang cerah dan kompleks khas kopi geisha Panama, menyatu sempurna dengan manisnya laktosa susu organik dan kilau emas murni.", penyajian:": Latte art presisi tinggi di atas cangkir transpora berlapis ganda, disempurnakan dengan taburan serbuk emas 24k di atas crema kopi."},
        { id: 5, category:"drink", name: "Velvet Truffle Mocha", price: 165000, img:"asset/VTM.jpg", desc:"Mewah dan membumi (earthy). Rasa cokelat hitam yang dalam berpadu misterius dengan aroma khas minyak truffle putih yang harum semerbak.", penyajian:"Dihidangkan dengan serutan cokelat artisan dan setetes kecil minyak truffle murni di pinggiran cangkir."},
        { id: 6, category:"drink", name: "Obsidian Cold Drip Elegance", price: 140000, img:"asset/OCDE.jpg", desc:"Ekstraksi murni selama 18 jam menghasilkan body kopi yang bersih tanpa rasa asam berlebih, menonjolkan notes buah kering dan cokelat hitam.", penyajian: "Dituang perlahan di atas bola es kristal besar di dalam gelas rocks, ditemani batang kayu manis yang dibakar ujungnya untuk membangkitkan indra penciuman."},
        { id: 7, category:"drink", name: "Smoked Sea Salt Caramel Latte", price: 125000, img:"asset/SSSCL.jpg", desc:"Perpaduan kontras antara manisnya karamel rumahan, gurihnya garam laut hitam Maldon, dan kelembutan whipped cream vanila murni.", penyajian: "Disajikan dalam gelas tinggi dengan lelehan karamel di dinding gelas dan taburan kristal garam hitam di atas cream."},
        { id: 8, category:"drink", name: "Saffron & Cardamom Cortado", price: 175000, img:"asset/SCC.jpg", desc:"espresso yang tegas berpadu dengan kehangatan rempah Timur Tengah; saffron memberikan warna kuning keemasan serta aroma metalik-floral yang unik.", penyajian: "Disajikan dalam gelas cortado kecil dengan helaian benang saffron asli mengapung di atas permukaannya."},
        { id: 9, category:"drink", name: "Black Diamond Matcha", price: 160000, img:"asset/BDM.jpg", desc:"Rasa umami khas Uji matcha seremonial yang pekat dan berumput halus, diseimbangkan oleh kebersihan rasa dari arang aktif dan manis tipis agave.", penyajian: "Disajikan menggunakan mangkuk teh tradisional Jepang (chawan) dengan estetika modern berwarna hitam pekat."},
        { id: 10, category:"drink", name: "Aero-Botanical Espresso Tonic", price: 130000, img:"asset/ABET.png", desc:"Kesegaran instan dari tonik berkarbonasi tinggi, berpadu dengan kepahitan espresso, kesegaran bunga elderflower, dan aroma herbal rosemary.", penyajian: "Gelas highball diisi es kristal, irisan lemon tipis, setangkai rosemary bakar yang mengepulkan asap aromatik, dan tonik yang dituangkan terpisah."},
        { id: 11, category:"drink", name: "Elysian Rose Gold Tea Latte", price: 185000, img:"asset/ERGTL.jpg", desc:"Wangi bunga mawar yang feminin dan menenangkan berpadu dengan kelembutan teh Earl Grey berkafein sedang serta susu gandum yang creamy.", penyajian: "Dihidangkan dalam teko kaca transparan bersama cangkir serasi, dihiasi kilau cairan pigmen merah muda berkilau keemasan."},
        { id: 12, category:"drink", name: "Noir Smoked Fashioned (Non-Alcoholic)", price: 155000, img:"asset/NSF.jpg", desc:"Kompleks, tebal, dan menyerupai koktail klasik beralkohol tinggi. Ada rasa manis dari mapel, pahit aromatik dari bitters, serta jejak asap kayu oak.", penyajian:"Disajikan di dalam gelas berukir berat dengan es besar, diasap di dalam wadah kedap udara sebelum disajikan ke meja." },
        { id: 13, category:"food", name: "Black Marble Truffle Tart", price: 280000, img:"asset/BMTT.jpg", desc:"Rasa pahit manis cokelat 85% bertemu dengan gurihnya garam laut dan aroma tanah yang khas dari irisan segar black truffle.", penyajian: ": Disajikan di atas piring marmer hitam, dipotong presisi dengan pisau khusus dan diambil menggunakan pinset berlapis emas"},
        { id: 14, category:"food", name: "Golden Opera Cake", price: 250000, img:"asset/GOC.jpg", desc:"Lapisan kue yang sangat lembap dengan dominasi rasa kopi Arabika, mentega, dan cokelat pekat yang meleleh di mulut.", penyajian: "Bentuk kubus geometris sempurna dengan lembaran emas tipis menutupi seluruh permukaan atasnya secara simetris."},
        { id: 15, category:"food", name: "Smoked Caviar & Brioche Toast", price: 650000, img:"asset/SCBT.jpg", desc:"Kontras antara kerenyahan roti brioche hangat bermentega, kelembutan krim keju truffle, dan sensasi 'meletup' asin gurih dari kaviar Ossetra.", penyajian: "Disajikan di atas nampan kayu dengan aksen kuningan; kaviar diambil menggunakan sendok mutiara kecil untuk menjaga kemurnian rasa."},
        { id: 16, category:"food", name: "Wagyu A5 Mini Sliders", price: 580000, img:"asset/4.jpg", desc:"Lemak daging Wagyu A5 yang lumer di lidah, berpadu dengan keju Gruyère leleh dan keharuman jamur duxelles yang gurih (savory).", penyajian: "Disajikan hangat di dalam kotak mini khusus dengan bendera kecil berlogo Cafe Well di atas roti arang hitam berpendar debu emas."},
        { id: 17, category:"food", name: "Charcoal Gold Croissant", price: 190000, img:"asset/CGC.jpg", desc:"Lapisan renyah (flaky) di luar, lembut di dalam, dengan isian krim pistachio hijau cerah yang manis kacang dan kaya rasa", penyajian: "Ditata di atas piring saji hitam dengan taburan serbuk emas berkilau di sepanjang lipatan croissant."},
        { id: 18, category:"food", name: "Noir Lobster Roll", price: 490000, img:"asset/NLR.jpg", desc:"PDaging lobster segar yang manis alami berpadu dengan saus tarragon mayo yang creamy herbal di dalam roti arang lembut.", penyajian: "Disajikan hangat dengan kentang goreng tipis (shoestring fries) berbalut minyak truffle dan piring saji batu hitam."},
        { id: 19, category:"food", name: "Truffle & Burrata Crostini", price: 320000, img:"asset/TdBC.jpg", desc:"Tekstur keju burrata yang lumer di dalam berpadu dengan kerenyahan roti sourdough, disempurnakan aroma minyak truffle dan manisnya madu liar.", penyajian: "Disusun rapi di atas papan saji marmer, diberi tetesan minyak truffle mengkilap dan taburan lada hitam kasar."},
        { id: 20, category:"food", name: "Dark Velvet Cheesecake", price: 210000, img:"asset/DVC.jpg", desc:"Tekstur dense dan creamy khas New York cheesecake dengan intensitas cokelat hitam yang kuat, didukung dasar biskuit arang yang renyah.", penyajian: "Dipotong rapi tanpa cela, dihiasi serutan cokelat halus dan buah beri merah segar sebagai penyeimbang rasa."},
        { id: 21, category:"food", name: "Gold-Dusted Mille-Feuille", price: 230000, img:"asset/GDMF.jpg", desc:"Lapisan puff pastry karamelisasi yang sangat renyah (crisp), berpadu dengan diplomat cream vanila Tahiti yang lembut beraroma harum.", penyajian: "Disusun horizontal dengan lembaran emas murni menghiasi bagian atas kue, disajikan bersama saus buah beri di sisi piring."},
        { id: 22, category:"food", name: "Smoked Duck & Fig Tartine", price: 270000, img:"asset/SDFT.jpg", desc:"Perpaduan rasa smoky dari bebek asap, manis legit dari buah tin segar, serta keasaman ringan dari keju kambing berkualitas.", penyajian: "Ditata artistik di atas potongan roti gandum tebal, diberi garnis microgreens dan tetesan cuka balsamiki tua."},
        { id: 23, category:"food", name: "Saffron Macaron Selection", price: 350000, img:"asset/SMS.jpg", desc:"Cangkang makaron luar yang renyah dengan bagian tengah lembut (chewy), diisi ganache infusi saffron yang eksotis dan sentuhan karamel asin.", penyajian: "Dikemas dalam kotak khusus bergaya perhiasan dengan stempel lilin (wax seal) bertuliskan logo Shaka"},
        { id: 24, category:"food", name: "Artisan Cheese & Honey Board", price: 850000, img:"asset/ACHB.jpg", desc:"Eksplorasi rasa keju dunia mulai dari yang creamy, berjamur (blue cheese), hingga yang gurih tajam, dinetralkan oleh manisnya madu sarang lebah murni.", penyajian: "Disajikan di atas papan kayu ek besar lengkap dengan pisau keju khusus, sarang lebah utuh (honeycomb), buah zaitun, dan kacang panggang."}
    ];

    let cart = {};

    function renderMenu() {
        const wrapper = document.getElementById('menue-wrap');

        const foodList = menue.filter(m => m.category === 'food');
        const beverageList = menue.filter(m => m.category === 'drink');

        let html = '';

        html += `<h2 class="category-title">La Boissons </h2>`;
        html += `<div class="menu-contain">`;
        beverageList.forEach(menu => {
            html += generateCardHTML (menu)
        });
        html += `</div>`;

        html += `<h2 class="category-title">La Nourriture </h2>`;
        html += `<div class="menu-contain">`;
        foodList.forEach(menu => {
            html += generateCardHTML (menu)
        });
        html += `</div>`;
        
        wrapper.innerHTML = html;
    }

    function generateCardHTML(menue){
        let qty = cart[menue.id] || 0;
        return `
            <div class="card-contain">
                <div class="card-in" onclick="toggleCard(this)">
                    <div class="card-front">
                        <img src="${menue.img}" alt="${menue.name}">
                        <h3>${menue.name}</h3>
                        <h6>x</h6>
                        <p>Rp ${menue.price.toLocaleString('id-ID')}</p>
                    </div>

                    <div class="card-back" >
                        <div class="card-lay">
                            <h4>Profil Rasa & Karakter:</h4>
                            <p>${menue.desc}</p>
                            <h4>Detail penyajian :</h4>
                            <p>${menue.penyajian}<p>
                        </div>
                    </div>
                </div>

                 <div class="action-card">
                            ${qty === 0 ? `
                                <button class="btn-card" onclick="change(${menue.id}, 1)">prendre | pesan</button>
                            ` : `
                                <div class="control-order">
                                    <button class="act-btn" onclick="change(${menue.id}, -1)">-</button>
                                    <span class="quantity">${qty}</span>
                                    <button class="act-btn" onclick="change(${menue.id}, 1)">+</button>
                                </div>
                            `}
                 </div>   
            </div>
        `;

      }

    function toggleCard(element) {
        element.classList.toggle('flipped');
    } 

    function change(id, delta) {
        if(!cart[id]) cart[id] = 0;
        cart[id] += delta;
        if (cart[id] <= 0) delete cart[id];
        renderMenu();
    }

    function orderProcess() {
        const inputName = document.getElementById('name').value.trim();
        const table = document.getElementById('table').value.trim();
        const notes = document.getElementById('notes').value.trim();
        const date = document.getElementById('date').value.trim();
        const cands = document.getElementById('cands').value.trim();
        const selectCategory = document.getElementById('category').value.trim();
        const orderedIds = Object.keys(cart);
    
        if (!inputName) {
            alert("Mohon masukkan nama anda dahulu!");
            document.getElementById('name').focus();
            return;
        }    

        if (!table) {
            alert("Mohon masukkan nomor meja yang anda berada");
            document.getElementById('table').focus();
            return;
        }  

        if (orderedIds.length === 0) {
            alert("Silakan memilih 1 hidangan terlebih dulu");
            return;
        }  
    
        let subtotal = 0;
        let itemsArray = [];

        orderedIds.forEach(id => {
            const menu = menue.find(m => m.id == id);
            const itemSubtotal = menu.price * cart[id];
            subtotal += itemSubtotal;

            itemsArray.push({
                name: menu.name,
                qty: cart[id],
                price: menu.price
            });
        });

        let diskon = 0;
        if (selectCategory === "Member") {
            diskon = subtotal * 0.10;
        }

        const pajak = (subtotal - diskon) * 0.10;
        const totalBayar = (subtotal - diskon) + pajak;

        let orderData = {
            id: Date.now(),
            name: inputName,
            table:table,
            notes:notes,
            date: date,
            cands: cands,
            category: selectCategory,
            subtotal: subtotal,
            diskon: diskon,
            pajak: pajak,
            totalBayar: totalBayar,
            items: itemsArray
        };
        
        let allOrders = JSON.parse(localStorage.getItem('cafeOrders')) ||[];
        allOrders.push(orderData);

        localStorage.setItem('cafeOrders',JSON.stringify(allOrders));
        localStorage.setItem('lastOrder', JSON.stringify(orderData));
        
        window.location.href= 'bill.html';


    }

    renderMenu();