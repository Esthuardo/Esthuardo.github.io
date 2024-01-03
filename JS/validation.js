var dni = document.getElementById("dni");
var phone_number = document.getElementById("phone_number");
var email = document.getElementById("email");
var checked = document.getElementById("checked");
var form = document.getElementById("form");
var replace = document.getElementById("replace");
// Agregamos validaciones a los inputs

function validateNumberInput(input) {
  input.value = input.value.replace(/[^\d]/g, "");
}

dni.addEventListener("input", function () {
  validateNumberInput(this);
});
phone_number.addEventListener("input", function () {
  validateNumberInput(this);
  var firstDigit = this.value.charAt(0);
  if (firstDigit !== "9") {
    alert("El número de telefono debe iniciar con 9");
    this.value = this.value.replace(/[^9]/, "");
  }
});

// Agregamos validacion al boton

function validateData(e) {
  if (dni.value === "" || phone_number.value === "" || email === "") {
    alert("Debe completar todos los campos");
    e.preventDefault();
    return false;
  }
  if (checked.checked === false) {
    alert("Debes aceptar la cláusula de información y consentimiento");
    checked.focus();
    e.preventDefault();
    return false;
  }
  return true;
}

//Cambiar de HTML

function showResults() {
  //FORMA EN CASO NO SE EJECUTE COMO SERVIDOR LOCAL
  replace.innerHTML = `
  <section class="replaceResult" id="replaceResult">
    <section class="factoring_results">
      <hgroup class="results">
        <h3>Monto a desembolsar:</h3>
        <h2>S/1,000</h2>
        <h4>
          Tasa de interés efectiva anual: 23% <br />
          La Tasa es referencial.
        </h4>
      </hgroup>
      <section class="text">
        <p class="text1">
          Sabemos que estás interesado en el producto, por eso dentro de las 24
          horas hábiles siguientes, 9-6pm, un ejecutivo BanBif se comunicará
          contigo al número brindado para brindarte mayor información.
        </p>
        <p class="text2">
          Las comisiones del producto pueden ser consultadas en el Tarifario
          General de BanBif, disponible en nuestra página web www.banbif.pe
        </p>
      </section>
    </section>
  </section>
  `;
  //FORMA EN CASO SE EJECUTE EN SERVIDOR LOCAL

  // fetch("../pages/simulation_result.html")
  //   .then((response) => response.text())
  //   .then((html) => {
  //     replace.innerHTML = html;
  //   })
  //   .catch((error) => {
  //     console.error("Error al cargar resultados.html", error);
  //   });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateData() === true) {
    showResults();
  }
});
