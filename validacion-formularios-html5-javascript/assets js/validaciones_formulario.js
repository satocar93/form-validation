const d = document;

export default function contactFormValidations() {
    const $form = d.querySelector(".contact-form"),
        // Seleccionar todos los elementos con la clase contact-form y que tengan el atributo "required". es decir, la información puesta en los inputs del formulario, que se guardan en forma de variable que es el valor del atributo name dentro de la etiqueta input
        $inputs = d.querySelectorAll(".contact-form [required]");
    console.log($inputs);

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    d.addEventListener("keyup", e => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            // console.log($input, pattern);
            if (pattern && $input.value !== "") {
                console.log("El input tiene patrón");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
            
            if (!pattern) {
                console.log("El input NO tiene patrón");
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    });
};