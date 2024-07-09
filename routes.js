const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller")

router.get("/tempo", controller.renderizarPagina);
router.get("/noticias" ,controller.renderizarPaginaNoticias);



module.exports = router;
