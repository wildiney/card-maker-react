import React, {Component} from 'react'
//import { render } from "react-dom"
//import { renderToString } from "react-dom/server"
import classes from './CardBuilder.module.css'
import html2pdf from 'html2pdf.js'
//import html2canvas from 'html2canvas'

class CardBuilder extends Component{


  exportCard = ()=>{
    const element = document.getElementById('vcard');
    html2pdf(element, 
                {
                  margin:0,
                  filename:'card.pdf',
                  image:{type:'jpeg', quality:1}, 
                  html2canvas:{dpi:300, letterRendering:false}, 
                  jsPDF:{orientation: 'portrait', unit:'mm',  format:'a6', putOnlyUsedFonts:true}
                }
            );

  }

  render(){
    return(
      <div>
        <div id="vcard" className={classes.cartao}>
<p>Teste 1</p>
<p>Teste 2</p>
<p>Teste 3</p>
<p>Teste 4</p>
</div>
        <button onClick={this.exportCard}>exportar</button>
      </div>
    );
  }
}

export default CardBuilder