// import

import contactFormValidations from "./assets js/validaciones_formulario.js";

// Asignación de eventos en el momento en que el documento cargue (DOM ContentLoaded)
const d = document;

d.addEventListener("DOMContentLoaded", e => {
    contactFormValidations();
});