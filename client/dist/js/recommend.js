const selectedGenres=new Set,genresGrid=document.getElementById("genres-grid"),continueButton=document.getElementById("continue-button"),resultsParagraph=document.getElementById("result"),container=document.getElementsByClassName("container")[0];genresGrid.addEventListener("click",(e=>{if(e.target.closest(".genre-card")){const t=e.target.closest(".genre-card");t.classList.toggle("selected");const n=t.dataset.id;selectedGenres.has(n)?selectedGenres.delete(n):selectedGenres.add(n)}})),continueButton.addEventListener("click",(async()=>{if(3===selectedGenres.size)if("Continue"===continueButton.textContent){continueButton.textContent="Again",document.getElementById("genre-selection-container").style.display="none",container.style.width="90%";const e=document.getElementById("results-container");e.style.display="flex";const t=Array.from(selectedGenres).map((t=>{const n=gameGenres.find((e=>e.id===parseInt(t))),s=document.createElement("div");s.className="genre-results-container";const r=document.createElement("h2");r.textContent=n.name,s.appendChild(r);const a=document.createElement("div");return a.className="genre-games-container",s.appendChild(a),e.appendChild(s),{genre:n,genreGamesContainer:a}}));await Promise.all(t.map((({genre:e,genreGamesContainer:t})=>genreGames(e,t,6,"mini"))))}else location.reload();else resultsParagraph.textContent="Please select only 3 genres."}));