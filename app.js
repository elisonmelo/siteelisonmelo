/* Monta os botões e ícones a partir do config.js */

const ICONES = {
  crescimento:
    '<path d="M4 19.5h16"/><path d="M5 15l4.5-4.5 3 3L19 7"/><path d="M14.5 7H19v4.5"/>',
  sistema:
    '<rect x="3" y="4.5" width="18" height="15"/><path d="M7 10l3 2.5L7 15"/><path d="M12.5 15H16"/>',
  site:
    '<rect x="3" y="4.5" width="18" height="15"/><path d="M3 9h18"/><path d="M6 6.8h.01M8.5 6.8h.01"/>',
  seta: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  instagram:
    '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><path d="M16.6 7.4h.01"/>',
  whatsapp:
    '<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5z"/><path d="M9.2 8.6c-.3 1 .3 2.6 1.7 4s3 2 4 1.7l.6-1.2-1.7-1-.8.7c-.6-.3-1.6-1.3-1.9-1.9l.7-.8-1-1.7z"/>',
  linkedin:
    '<rect x="4" y="4" width="16" height="16"/><path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13c0-1.4 1-2.5 2.3-2.5S16 11.4 16 13v3"/>',
  email: '<rect x="3" y="5.5" width="18" height="13"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
};

const NOMES = {
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  linkedin: "LinkedIn",
  email: "E-mail",
};

function icone(nome, classe) {
  return (
    `<svg class="${classe || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
    `stroke-width="1.5" stroke-linecap="square" aria-hidden="true">${ICONES[nome] || ""}</svg>`
  );
}

function linkWhatsApp(mensagem) {
  const numero = String(WHATSAPP || "").replace(/\D/g, "");
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem || "")}`;
}

function texto(valor) {
  const el = document.createElement("span");
  el.textContent = valor || "";
  return el.innerHTML;
}

/* Botões principais */
document.getElementById("links").innerHTML = LINKS.map((item, i) => {
  const href = item.url || linkWhatsApp(item.mensagem);
  return `
    <li class="surge" style="--d: ${(0.52 + i * 0.07).toFixed(2)}s">
      <a class="link${item.destaque ? " link--destaque" : ""}" href="${texto(href)}" target="_blank" rel="noopener">
        ${icone(item.icone, "link__icone")}
        <span>
          <span class="link__titulo">${texto(item.titulo)}</span>
          <span class="link__descricao">${texto(item.descricao)}</span>
        </span>
        ${icone("seta", "link__seta")}
      </a>
    </li>`;
}).join("");

/* Ícones de redes: WhatsApp sempre, o resto vem do config */
const redes = [{ rede: "whatsapp", url: linkWhatsApp(MENSAGEM_GERAL) }, ...REDES];
document.getElementById("redes").innerHTML = redes
  .map(({ rede, url }) =>
    url
      ? `<li><a href="${texto(url)}"${url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"'} aria-label="${NOMES[rede] || rede}">${icone(rede)}</a></li>`
      : `<li><span title="${NOMES[rede] || rede}: preencha a url no config.js">${icone(rede)}</span></li>`
  )
  .join("");

/* Rodapé */
document.getElementById("cta-geral").href = linkWhatsApp(MENSAGEM_GERAL);

const instagram = REDES.find((r) => r.rede === "instagram" && r.url);
const rodapeInstagram = document.getElementById("rodape-instagram");
if (instagram) rodapeInstagram.href = instagram.url;
else {
  rodapeInstagram.hidden = true;
  rodapeInstagram.parentElement.classList.add("barra--sem-instagram");
}

if (!String(WHATSAPP || "").replace(/\D/g, "")) {
  console.warn("Link na bio: preencha o número em WHATSAPP no config.js.");
}
