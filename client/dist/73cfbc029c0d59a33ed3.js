const continueButton=document.getElementById("continue-button");continueButton.addEventListener("click",(async()=>{const e=document.getElementById("results-container"),t=document.getElementsByClassName("simple-container")[0];document.getElementById("simple-recommend-body").style.display="none",e.style.display="grid",e.style.gridTemplateColumns="repeat(3, minmax(0, 1fr))",e.style.paddingLeft="5px",e.style.paddingRight="5px",e.style.justifyItems="center",e.style.alignItems="center",t.style.width="70%";const n=Math.floor(100*Math.random())+1;await randomGeneralGames(e,6,"normal",n)}));