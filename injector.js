/**
 * INSERISCI QUA LE RIGHE DEGLI APPUNTI
 */
appunti =
    [
        "Inserisci qua i tuoi appunti!",
        "Supporta anche HTML! <a href='https://vitto.dev'>LINK YEAAAH</a>",
        "Fai finta che qua ci siano scritte cose utili...",
        "Ci puoi anche <b>formattare il testo</b>",
        "L'epoca dei bigliettini è finita."
    ];

/**
 * MODIFICA QUI IL TASTO DI TRIGGER
 * Quello di default è : "\", ovvero il backslash
 */
trigger = "\\";

/* ######################################################## */

/**
 * Funzione di aggiunta css nel tag style
 * @param {string} styleString
 */
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

// inietto gli stili della barra
addStyle(`
    .tipbar {
        margin-top: 12px;
        background: #ffffff;
        border: 1px solid rgba(0,0,0,.125);
        color: black;
        padding: 10px;
    }
    .tipsp {
        margin-left: 10px;
    }
    .tipselector{
        width: 40px;
    }
`);

// Inietto l'HTML della barra
oldPw = document.getElementById("page").innerHTML
document.getElementById("page").innerHTML =
`
    <div class="tipbar" id="tipbar" style="display: none;">
        <input type="number" value="0" id="tipnum" class="tipselector" min="0">
        <span id="tipsp" class="tipsp">...</span>
    </div>
` + oldPw

/**
 * Funzione che nasconde o mostra la barra quando viene chiamata
 */
function shTipbar() {
    var x = document.getElementById("tipbar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// controllo se il menù utente è disponibile per iniettare un tasto di hide/show
if (oldMenu = document.getElementById("action-menu-1-menu") != undefined) {
    // iniettando il toggle di hide/show
    oldMenu = document.getElementById("action-menu-1-menu").innerHTML
    document.getElementById("action-menu-1-menu").innerHTML +=
    `
        <a class="dropdown-item menu-action" role="menuitem" onclick="shTipbar()">
            <i class="icon fa fa-eye fa-fw " aria-hidden="true"></i>
            <span class="menu-action-text" id="actionmenuaction-6">Toggle Tipbar</span>
        </a>
    `
}

// ascolta per la pressione del tasto di hide/show
$(document).on("keypress", function (e) {
    if (e.originalEvent.key == "\\") {
        shTipbar();
    }
});

// al cambio del valore della box di scelta cambia l'appunto
// selezionandolo dall'array
$("#tipnum").on("input", function () {
    document.getElementById("tipsp").innerHTML = appunti[$(this).val() - 1];
});