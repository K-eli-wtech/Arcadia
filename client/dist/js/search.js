document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("search-input"),n=document.getElementById("search-results"),t=document.getElementById("result");async function a(e="",n,t={}){try{let a;switch(n){case"title":a="/api/title";break;case"genre":a="/api/genre";break;case"developer":a="/api/developer";break;case"platform":a="/api/platform";break;case"rating":a="/api/rating";break;case"year":a="/api/year";break;default:a="/api/advancedSearch"}const r=await fetch(`http://localhost:3000${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,searchType:n,...t})});return await r.json()}catch(e){console.error("Error fetching data:",e)}}function r(e){const n=e.name||"Unknown Game",t=e.released?function(e){const n=new Date(e),t=n.getDate();return`${["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]} ${t}, ${n.getFullYear()}`}(e.released):"Unknown Release Date",a=e.background_image||"../images/NoImageFound.png",r=e.rating||"Not rated yet",s=e.genres||[],i=Array.isArray(s)?s.map((e=>e.name)).join(", "):"Unknown Genre",o=e.platforms||[],c=Array.isArray(o)?o.map((e=>e.platform.name)).join(", "):"Unknown Platform";return`\n      <div class="card" id="${e.id}">\n      <div class="card-image">\n        <img src="${a}" alt="${n}" />\n      </div>\n      <div class="card-content">\n        <h3 class="name">${n}</h3>\n        <p class="base">Release Date: </p><p>${t}</p>\n        <p class="base">Genres: </p><p>${i}</p>\n        <p class="base">Rating: </p>${r}</p>\n        <p class="base">Platforms: </p><p>${c}</p>\n      </div>\n      </div>\n    `}function s(e){return new URLSearchParams(window.location.search).get(e)}e.addEventListener("keypress",(s=>{"Enter"===s.key&&async function(){const s=e.value;if(!s){for(t.textContent="Please enter a search query";n.firstChild;)n.removeChild(n.firstChild);return}let i,o,c;s.includes(":")?([i,...c]=s.split(":"),o=c.join(":").trim()):(i="title",o=s);const l=await a(o,i,{});if(!l||!l.length){for(t.textContent="No results found";n.firstChild;)n.removeChild(n.firstChild);return}const d=l.map(r).join("");t.textContent="",n.innerHTML=d}()}));const i=s("platform"),o=s("year"),c=s("rating"),l=s("genre");(i||o||c||l)&&async function(){const e=s("platform"),i=s("year"),o=s("rating"),c={platformId:e,year:i,minRating:o?20*o-19:void 0,maxRating:20*o,genreId:s("genre")},l=await a(null,"advanced",c);if(!l||!l.length){for(t.textContent="No results found";n.firstChild;)n.removeChild(n.firstChild);return}const d=l.map(r).join("");t.textContent="",n.innerHTML=d}()}));