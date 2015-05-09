var banners = ["Inscreva-se!", "Apenas R$ 40,00"];

var bannerAtual = 0;

function trocaBanner () {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').
	textContent = banners[bannerAtual];
}
setInterval(trocaBanner, 3000);