(()=>{"use strict";window.addEventListener("load",(()=>{const e=document.getElementById("tpl");if(!(window.innerWidth<=430||window.innerHeight<=430||window.innerWidth<=1024&&window.innerWidth<window.innerHeight)){const t=document.querySelector(".new-header"),n=t?t.offsetHeight:0;e.style.setProperty("--header-offset",1-n/window.innerHeight),e.style.setProperty("min-height","".concat(window.innerHeight-n,"px"))}setTimeout((()=>{e.classList.add("ready")}),300)}))})();
//# sourceMappingURL=app.js.map