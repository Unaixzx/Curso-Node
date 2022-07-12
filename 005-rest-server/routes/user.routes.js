//Express
import { Router } from "express";

//Mis_Importaciones
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/user.controller.js";

const router = Router();

//*GET(Leer)
//userGet no lleva():
//lee el código y luego cuando utilizas la ruta se ejecuta la función que tenemos por referencia
router.get("/", userGet);

//*PUT(Actualizar)
router.put("/:id", userPut);

//*POST(Insertar)
router.post("/", userPost);

//*DELETE(Eliminar)
router.delete("/", userDelete);

//*PATCH
router.patch("/", userPatch);

/*
  //*Enviar con Status
  router.get("/error", (req, res) => {
    res.status(503).json({
      message: "Internal server error",
    });
  });
  */

export { router };
