const perguntasERespostas = document.querySelectorAll(".item");
perguntasERespostas.forEach(function (item) {
	item.addEventListener("click", function () {
		const itemAtivoAtual = document.querySelector(".ativo");
		item.classList.add("ativo");
		if (itemAtivoAtual) {
			itemAtivoAtual.classList.remove("ativo");
		}
	});
});
