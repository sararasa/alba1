document.querySelector(".rect-button").addEventListener("click", function() {
    // Creare un nuovo elemento di testo
    const newText = document.createElement("div");
    newText.classList.add("additional-text");
    newText.innerHTML = `<p>Unt venimolupta quas unt auditatur sam faccumque sum eri quam quis erum fuga. Aque nonsequid eosam, iditas endaerum con rehendit moluptat et omnia dest res doluptia doloressimus arum exerrum facea volupta aliquis se placi sum quiandi dolutassum rerum aut autem suntiatenem. Et et aut millique re sed minciatet reptatatquam quidell esedit repra a suntibus et volore con nostrum, officae pro officia tempore heneces cipsandit et as nos a simos sernat.
Modis dolorrovit ipient lat.</p>`;
    
const gifSection = document.querySelector(".gif");
gifSection.appendChild(newText);

    // Modificare lo stile del footer per farlo scalare
    const footer = document.querySelector(".footer");
    footer.style.position = "relative";
    footer.style.top = "auto";

    // Far scomparire il pulsante dopo il clic
    this.style.display = "none";
});

document.getElementById('submitButton').addEventListener('click', function() {
    window.location.href = 'thankyou.html'; // Redirect to thankyou.html when button is clicked
});