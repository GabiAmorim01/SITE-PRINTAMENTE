'use strict';
// Adicione apenas os endereços oficiais fornecidos pela Printamente.
const printamenteLinks = {
  sales: 'https://www.printamente.com.br',
  shopee: 'https://shopee.com.br/printamente#product_list',
};
document.getElementById('year').textContent = new Date().getFullYear();
for (const [name, address] of Object.entries(printamenteLinks)) {
  if (!address) continue;
  let url;
  try { url = new URL(address); } catch { continue; }
  if (url.protocol !== 'https:') continue;
  const link = document.getElementById(`${name}-link`);
  link.href = url.href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.removeAttribute('aria-disabled');
  link.querySelector('.pending')?.remove();
  const notice = document.createElement('span');
  notice.className = 'sr-only';
  notice.textContent = ' (abre em nova aba)';
  link.append(notice);
}
