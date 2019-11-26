const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(
    `<h1>Página de inicio del servidor</h1><h2>Para acceder a los datos de los empleados, accede a la API interna</h2>`
  );
});

module.exports = router;
