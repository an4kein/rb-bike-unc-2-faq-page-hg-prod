const express = require('express');
const app = express();

// Configuração do Open Redirect
app.get('/redirect', (req, res) => {
  const target = req.query.url;
  if (!target) {
    return res.status(400).send('URL missing! Use /redirect?url=<destination>');
  }

  // Atenção: Redireciona sem validação!
  res.redirect(target);
});

// Página simples
app.get('/', (req, res) => {
  res.send(`
    <h1>Bug Bounty Demo</h1>
    <p>Use o seguinte endpoint para redirecionamento: <code>/redirect?url=</code></p>
    <p>Exemplo: <a href="/redirect?url=https://example.com">Clique aqui</a></p>
  `);
});

// Porta configurada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
