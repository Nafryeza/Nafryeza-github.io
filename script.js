// navigasi ke halaman detail
function goToDetail(id) {
    // Navigasi ke file HTML berdasarkan ID yang diklik
    if (id === 'java') {
        window.location.href = 'java.html';
    } else if (id === 'egi') {
        window.location.href = 'egi.html';
    } else if (id === 'nafryeza') {
        window.location.href = 'nafryeza.html';
    } else {
        console.error('Halaman tidak ditemukan untuk ID:', id);
    }
}

// menggulir ke bagian kartu
function scrollToCards() {
    const cards = document.getElementById('cards');
    if (cards) {
        cards.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Bagian kartu tidak ditemukan.');
    }
}
