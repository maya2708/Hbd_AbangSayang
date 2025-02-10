let starsClicked = 0;

function openEnvelope() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('greeting-card').classList.remove('hidden');
}

document.getElementById('submit-button').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input').value;
    if (nameInput.toLowerCase() === "hermu gufiran") { // Pastikan case-insensitive
        document.getElementById('greeting-card').classList.add('hidden');
        document.getElementById('star-container').classList.remove('hidden');
        document.getElementById('name-display').innerText = nameInput;
    } else {
        alert("Nama harus 'hermu gufiran'");
    }
});

function clickStar(star) {
    if (!star.classList.contains('clicked')) {
        star.classList.add('clicked');
        starsClicked++;
        if (starsClicked === 5) {
            setTimeout(() => {
                document.getElementById('star-container').classList.add('hidden');
                document.getElementById('waiting-message').classList.remove('hidden');
                document.getElementById('waiting-message').innerHTML = `Tunggu yaa hermu sayangnya mayaa...`;
                setTimeout(() => {
                    document.getElementById('waiting-message').classList.add('hidden');
                    document.getElementById('birthday-message').classList.remove('hidden');
                }, 2000); // Tampilkan ucapan setelah 2 detik
            }, 500); // Tampilkan pesan setelah 0.5 detik
        }
    }
}

document.getElementById('cake').addEventListener('click', function() {
    alert("Kue ini penuh dengan kebahagiaan!");
});

document.getElementById('balloon').addEventListener('click', function() {
    alert("Balon ini membawa harapan dan impian!");
});

function openCard() {
    const cardMessage = document.getElementById('card-message');
    cardMessage.classList.add('open'); // Tambahkan kelas untuk animasi membuka kartu
    cardMessage.classList.remove('hidden'); // Tampilkan kartu ucapan
}

function showPolaroids() {
    document.getElementById('card-message').classList.add('hidden');
    document.getElementById('birthday-message').classList.add('hidden');
    document.getElementById('polaroid-container').classList.remove('hidden');

    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach((polaroid, index) => {
        setTimeout(() => {
            polaroid.style.opacity = 1;
        }, index * 200);
    });
}

function showLove() {
    const loveContainer = document.getElementById('love-container');
    loveContainer.classList.remove('hidden');

    for (let i = 0; i < 20; i++) {
        const love = document.createElement('div');
        love.classList.add('love');
        love.style.left = Math.random() * 100 + 'vw';
        love.style.top = Math.random() * 100 + 'vh';
        loveContainer.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 2000);
    }
}
function openCard() {
    const cardMessage = document.getElementById('card-message');
    const ucapanImage = document.getElementById('ucapan-image');
    
    cardMessage.classList.add('open'); // Tambahkan kelas untuk animasi membuka kartu
    cardMessage.classList.remove('hidden'); // Tampilkan kartu ucapan
    ucapanImage.style.display = 'block'; // Tampilkan gambar
}
function closeCard() {
    const cardMessage = document.getElementById('card-message');
    cardMessage.classList.add('hidden'); // Menyembunyikan kartu ucapan
}