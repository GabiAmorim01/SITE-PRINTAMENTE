# Printamente — página de links

Página responsiva para receber visitantes do Instagram e direcionar para o site de vendas, WhatsApp e loja na Shopee. HTML, CSS e JavaScript, sem dependências de instalação ou build.

## Desenvolvimento

```sh
cd /workspace/SITE-PRINTAMENTE
python3 -m http.server 3000 --bind 0.0.0.0
```

## Links

Links oficiais configurados em `printamenteLinks` no arquivo `app.js`:

- Site de vendas: https://www.printamente.com.br
- Shopee: https://shopee.com.br/printamente?categoryId=100632&entryPoint=ShopByPDP&itemId=58269094484
- WhatsApp: +55 31 97537-5289, com mensagem inicial.

Todos os links abrem em nova aba. Não há coleta ou armazenamento de dados.

## Publicação

Publique `index.html`, `styles.css`, `app.js` e a pasta `assets/` em uma hospedagem estática. O endereço público poderá ser colocado na bio do Instagram.

## Imagem de destaque

A imagem `assets/produtos-3d.png` foi gerada para ilustrar objetos de impressão 3D. Não é uma fotografia do estoque real da Printamente. Ela é exibida inteira, preservando sua proporção original.
