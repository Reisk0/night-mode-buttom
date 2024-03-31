const body = document.querySelector("body");/*en la const body seleccionamos todo el body */
const toggle = document.getElementById("toggle");/*aqui usamos un elemento id por lo que se selcciona igual pero con el get element by id */
toggle.onclick = function() {/*aqui declaramos nuestra primera funcion en el toggle con el onclick*/
    toggle.classList.toggle('active');/*aqui al toggle se le agrara la clase active, esta clase active es descrita en nuestra css donde le pondremos que es lo que hara visualmente cuando se de el click */
    body.classList.toggle('active');/*como el body se vera afectado por la clse active tambien tendrems que declara una relacion entre la clase active y el body ya que este cambiara de color igual que el toggle */
};