/**************************************************************************************************************************************************
/* Global Objects 
/**************************************************************************************************************************************************/




/**************************************************************************************************************************************************
/* MAIN 
/**************************************************************************************************************************************************/

// Main function to be executed after page load
function main() {

    // Sets AsciiDoc file from url query string 
    const params = new URLSearchParams(location.search);
    let aDocName = params.get('aDoc');
    if (aDocName === null || aDocName === '') {
        aDocName = 'indice';
    }
    aDoc = aDocs.find(aDoc => aDoc.name === aDocName);
    
    // Updates UI with HTML content from AsciiDoc file
    updateDocContents(aDoc);
}


/**************************************************************************************************************************************************
/* Data Functions 
/**************************************************************************************************************************************************/




/**************************************************************************************************************************************************
/* UI Functions 
/**************************************************************************************************************************************************/

// Updates UI with HTML content from AsciiDoc file
function updateDocContents(aDoc) {

    // Updates UI
    let html = Asciidoctor().convert(aDoc.contents);
    html = html
            .replaceAll('<div class="title">Important</div>', '<div class="title" style="color:red">❗ IMPORTANTE</div>')
            .replaceAll('<div class="title">Warning</div>', '<div class="title" style="color:orange">⚠️ ATENCIÓN</div>');
    document.getElementById('adoc-contents').innerHTML = html;

    // Updates UI for 'Índice' section
    if (aDoc.name === 'indice') {
        //html = ``;
        //document.getElementById('tabla-ejercicios-div').innerHTML = html;
    }
    
    // Updates Latex rendering
    MathJax.typeset();
}



/**************************************************************************************************************************************************
/* Test
/**************************************************************************************************************************************************/

function test() {

    let adocName = 'gei_1-4_e2';
    fetch(`https://raw.githubusercontent.com/alelentini/pye-resueltos/master/docs/${adocName}.adoc`) 
        .then(response => response.text())
        .then(result => updateDocContents(result));
}