const container = document.querySelector('.container');
const qrBtn = document.querySelector('#qr-form button');
const qrInput = document.querySelector('#qr-form input');
const qrImg = document.querySelector('#qr-code img');

function gerarQrCode(){
    const qrCodeInputValue = qrInput.value;

    if(!qrCodeInputValue) return;

    qrBtn.innerHTML = 'Gerando código...'
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrImg.addEventListener('load', () =>{
        container.classList.add('active');
        qrBtn.innerHTML = 'Código criado'
    })
};

qrBtn.addEventListener('click', ()=>{
    gerarQrCode();
})

qrInput.addEventListener('keydown', (e)=>{
    if(e.code === 'Enter'){
        gerarQrCode();
    }
})


/*limpeza */
qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        container.classList.remove('active');
        qrBtn.innerHTML = 'Gerador de qrcode...';
    }
})