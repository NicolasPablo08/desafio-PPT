(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function C(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=this.getAttribute("variant")||"",e=document.createElement(o==="title"?"h1":o==="body"?"h3":"p");e.classList.add(o),e.textContent=this.textContent;const t=document.createElement("style");t.innerHTML=`
      .title{
        color: #009048;
        font-size: 80px;
        font-weight: 800;
        margin: 0;
        line-height: 88%;
        width: 308px;
        height: 219px;
        }
        .body{
          color: #000000;
          font-size: 40px;
          font-weight: 600;
          margin: 0;
          line-height: 100%;
          width: 317px;
          }`,i.appendChild(t),i.appendChild(e)}}customElements.define("text-el",s)}function y(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=document.createElement("button"),e=this.getAttribute("variant")||"";o.classList.add(e),o.textContent=this.textContent,o.classList.add("button");const t=document.createElement("style");t.innerHTML=`
      .button{
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 10px;
        width: 322px;
        height: 87px;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: odibee sans;
        margin: 0;
        }
        @media (min-width: 960px) {
          .button{
            width: 336px;
          }  
        }
        .button-reset{
        background-color: #006CFC;
        border: 5px solid #001997;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        color: #D8FCFC;
        font-size: 20px;
        font-weight: 400;
        font-family: odibee sans;

        margin: 0;
        }
        @media (min-width: 960px) {
          .button-reset{
            width: 170px;
            height: 50px;
            font-size: 25px;
          }  
        }
        .button-score{
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 10px;
        width: 335px;
        height: 87px;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: odibee sans;
        margin: 0;
        padding: 0;
        }
        @media (min-width: 960px) {
          .button-score{
            width: 360px;
            height: 95px;
            font-size: 50px;
          }  
        }
        
        `,i.appendChild(t),i.appendChild(o)}}customElements.define("button-el",s)}const v="data:image/svg+xml,%3csvg%20width='255'%20height='260'%20viewBox='0%200%20255%20260'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M147.669%2046.3756L223.43%2031.9138L209.258%20109.523L208.945%20111.236L209.764%20112.772L246.729%20182.162L170.214%20192.357L168.429%20192.595L167.205%20193.916L114.278%20251.092L81.2013%20179.949L80.4518%20178.337L78.853%20177.56L9.08746%20143.653L65.2234%2089.3307L66.4844%2088.1105L66.7063%2086.3698L76.6729%208.1731L144.299%2045.8326L145.886%2046.7161L147.669%2046.3756Z'%20fill='%23DC5B49'%20stroke='black'%20stroke-width='10'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='255'%20height='260'%20viewBox='0%200%20255%20260'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M147.669%2046.3756L223.43%2031.9138L209.258%20109.523L208.945%20111.236L209.764%20112.772L246.729%20182.162L170.214%20192.357L168.429%20192.595L167.205%20193.916L114.278%20251.092L81.2013%20179.949L80.4518%20178.337L78.853%20177.56L9.08746%20143.653L65.2234%2089.3307L66.4844%2088.1105L66.7063%2086.3698L76.6729%208.1731L144.299%2045.8326L145.886%2046.7161L147.669%2046.3756Z'%20fill='%236CB46C'%20stroke='black'%20stroke-width='10'/%3e%3c/svg%3e",L="/desafio-PPT/assets/star-draw-CUEvUn6E.png",p={data:JSON.parse(localStorage.getItem("state"))||{game:{myPlay:"",machinePlay:""},history:{winners:"0",losses:"0"}},listeners:[],getState(){return this.data},setState(s){this.data=s,localStorage.setItem("state",JSON.stringify(s)),console.log("Se ha realizado un cambio en el state:",s);for(const n of this.listeners)n()},suscribe(s){this.listeners.push(s)},setGame(s,n){const i={...this.getState(),game:{myPlay:s,machinePlay:n}};this.setState(i)},setHistory(s,n){const i=s==="piedra"&&n==="tijera"||s==="papel"&&n==="piedra"||s==="tijera"&&n==="papel"?1:0,o=s==="piedra"&&n==="papel"||s==="papel"&&n==="tijera"||s==="tijera"&&n==="piedra"?1:0;console.log("myChoice:",s,"machineChoice:",n,"win:",i.toString(),"loss:",o.toString());const e={...this.getState(),history:{winners:(parseInt(this.getState().history.winners)+i).toString(),losses:(parseInt(this.getState().history.losses)+o).toString()}};this.setState(e)},clearHistory(){const s={...this.getState(),history:{winners:"0",losses:"0"}};this.setState(s)}};function b(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=document.createElement("div"),e=document.createElement("style"),t=p.getState().game,a=t.myPlay==="piedra"&&t.machinePlay==="tijera"||t.myPlay==="papel"&&t.machinePlay==="piedra"||t.myPlay==="tijera"&&t.machinePlay==="papel"?"1":"0",r=t.myPlay==="piedra"&&t.machinePlay==="papel"||t.myPlay==="papel"&&t.machinePlay==="tijera"||t.myPlay==="tijera"&&t.machinePlay==="piedra"?"1":"0";let l="",c="";a==="1"?(l=w,c="Ganaste"):r==="1"?(l=v,c="Perdiste"):(l=L,c="Empate"),o.innerHTML=`
        <div class="container__star">
          <img src="${l}" class="star__img" alt="Star Icon">
          <h3 class="star__text">${c}</h3>
        </div>
      `,e.innerHTML=`
        .container__star{
          position: relative;
          display: inline-block; //permitir que el contenedor ajuste su tamaño
        }
        .star__text{
          color:#FFFFFF;
          font-family: odibee sans;
          font-size: 55px;
          font-weight: 400;
          position: absolute;
          bottom: 43%;
          left: 25%;
          margin:0;
          padding:0;
        }
        @media (min-width: 960px) {
          .star__text{
            font-size: 60px;
          }
        }

        .star__img{
          display: block;
          width: 255px;
          hight: 260px;
          margin:0;
          padding:0;
          } 
        @media (min-width: 960px) {
          .star__img{
            width: 300px;
            hight: 300px;
          }
        }  
      
      `,i.appendChild(o),i.appendChild(e)}}customElements.define("star-comp",s)}function E(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=document.createElement("div"),e=p.getState().history.winners,t=p.getState().history.losses,a=document.createElement("style");o.innerHTML=`
      <div class="container__score">
        <h3 class="score__title">Score</h3>
        <p class="score__text">Vos: ${e}</p>
        <p class="score__text">Máquina: ${t}</p>
      </div>
    `,a.innerHTML=`
      .container__score{
      box-sizing: border-box;
        margin: 0;
        padding: 15px 30px 28px 0px;
        display: flex;
        flex-direction: column;
        background-color:#FFFFFF;
        border: 10px solid #000000;
        border-radius: 10px;
        width: 259px;
        height: 219px;
        font-family: odibee sans;
      }
      @media (min-width: 960px) {
        .container__score{
          width: 360px;
          height: 270px;
          padding: 15px 30px 28px 30px;
        }
      }
      .score__title{
        color: #000000;
        font-size: 55px;
        font-weight: 400;
        margin:0;
        margin-bottom: 13px;
        align-self: center;
      }   
      @media (min-width: 960px) {
        .score__title{
          font-size: 65px;
        }
      }
      .score__text{
        color: #000000;
        font-size: 45px;
        font-weight: 400;
        margin:0;
        align-self: flex-end;
      }
      @media (min-width: 960px) {
        .score__text{
          font-size: 55px;
        }
      }
      `,i.appendChild(a),i.appendChild(o)}}customElements.define("score-comp",s)}const h="data:image/svg+xml,%3csvg%20width='56'%20height='125'%20viewBox='0%200%2056%20125'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M43.6595%20122.21V55.7423C48.9823%2053.7271%2052.768%2048.5848%2052.768%2042.5558V18.5759H3.52478V42.5558C3.52478%2048.5848%207.31049%2053.7271%2012.6332%2055.7423V122.21H43.6595Z'%20fill='%23FFCAB9'/%3e%3cpath%20d='M8.80835%2024.091C5.88999%2024.091%203.52441%2021.7254%203.52441%2018.807V13.7684C3.52441%2010.8501%205.88999%208.4845%208.80835%208.4845C11.7267%208.4845%2014.0923%2010.8501%2014.0923%2013.7684V18.807C14.0923%2021.7254%2011.7267%2024.091%208.80835%2024.091Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M19.3762%2024.091C16.4579%2024.091%2014.0923%2021.7255%2014.0923%2018.8071V8.02435C14.0923%205.10599%2016.4579%202.74042%2019.3762%202.74042C22.2946%202.74042%2024.6602%205.10599%2024.6602%208.02435V18.8071C24.6602%2021.7255%2022.2946%2024.091%2019.3762%2024.091Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M29.944%2024.091C27.0256%2024.091%2024.66%2021.7255%2024.66%2018.8071V8.02435C24.66%205.10599%2027.0256%202.74042%2029.944%202.74042C32.8623%202.74042%2035.2279%205.10599%2035.2279%208.02435V18.8071C35.2279%2021.7255%2032.862%2024.091%2029.944%2024.091Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M40.5118%2024.091C37.5935%2024.091%2035.2279%2021.7255%2035.2279%2018.8071V8.02435C35.2279%205.10599%2037.5935%202.74042%2040.5118%202.74042C43.4302%202.74042%2045.7958%205.10599%2045.7958%208.02435V18.8071C45.7958%2021.7255%2043.4299%2024.091%2040.5118%2024.091Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M52.7685%2042.556V18.807C52.7685%2015.8886%2050.4029%2013.5231%2047.4845%2013.5231H29.944C27.0256%2013.5231%2024.66%2015.8886%2024.66%2018.807C24.66%2021.7254%2027.0256%2024.0909%2029.944%2024.0909H42.2006V32.0003C37.3056%2032.9068%2032.4626%2037.5248%2032.4626%2044.0099'%20fill='%23FFCAB9'/%3e%3cpath%20d='M48.3295%2011.0352V8.02423C48.3518%201.2445%2040.1344%20-2.30705%2035.2279%202.2683C32.3748%20-0.460488%2027.5125%20-0.459812%2024.6604%202.2683C20.2321%20-1.86847%2012.832%200.595079%2011.7068%206.50982C6.74557%204.41255%200.876777%208.3513%200.990645%2013.7687V42.5558C0.990645%2048.8263%204.58646%2054.5802%2010.0991%2057.3881L10.9962%20121.176C10.9962%20122.576%2012.1305%20123.71%2013.5304%20123.71C14.9302%20123.71%2016.0645%20122.576%2016.0645%20121.176L15.1674%2055.7422C15.1674%2054.6887%2014.5157%2053.7453%2013.5304%2053.3723C9.06146%2051.6805%206.05898%2047.3335%206.05898%2042.5558V26.1246C8.71613%2027.1889%2012.092%2026.4905%2014.0923%2024.5632C16.9454%2027.292%2021.808%2027.2917%2024.6601%2024.5632C26.0525%2025.8425%2027.9082%2026.6253%2029.944%2026.6253H39.6661V30.0792C34.6362%2031.917%2029.9284%2036.9752%2029.9284%2044.01C29.9284%2045.4096%2031.0627%2046.5442%2032.4626%2046.5442C33.8625%2046.5442%2034.9968%2045.4096%2034.9968%2044.01C34.9968%2038.7501%2038.946%2035.1803%2042.6621%2034.4921C43.8633%2034.2694%2044.7347%2033.2219%2044.7347%2032.0001V24.0908C44.7347%2022.6913%2043.6004%2021.5567%2042.2006%2021.5567H29.944C28.4279%2021.5567%2027.1942%2020.323%2027.1942%2018.8069C27.1942%2017.2908%2028.4275%2016.0572%2029.944%2016.0572H47.4845C49.0006%2016.0572%2050.2342%2017.2905%2050.2342%2018.8069V42.5558C50.2342%2047.3335%2047.2314%2051.6801%2042.7628%2053.3723C41.7775%2053.7453%2041.1257%2054.6887%2041.1257%2055.7422L42.0228%20121.176C42.0228%20122.576%2043.1571%20123.71%2044.557%20123.71C45.9569%20123.71%2047.0912%20122.576%2047.0912%20121.176L46.1941%2057.3881C51.7067%2054.5802%2055.3025%2048.8263%2055.3025%2042.5558V18.8069C55.3025%2014.7817%2052.2443%2011.4582%2048.3295%2011.0352ZM40.5115%205.2745C42.0276%205.2745%2043.2612%206.50779%2043.2612%208.02423V10.9889H37.7621V8.02423C37.7621%206.50813%2038.9953%205.2745%2040.5115%205.2745ZM8.80837%2021.5567C7.29227%2021.5567%206.05864%2020.3234%206.05864%2018.8069V18.5758V13.7683C6.19717%2010.1245%2011.4206%2010.1276%2011.5578%2013.7683V18.8069C11.5581%2020.3234%2010.3248%2021.5567%208.80837%2021.5567ZM19.3765%2021.5567C17.8604%2021.5567%2016.6264%2020.3234%2016.6264%2018.8069V13.7683V8.02423C16.765%204.38078%2021.9887%204.38315%2022.1259%208.02423V18.8069C22.1259%2020.3234%2020.8926%2021.5567%2019.3765%2021.5567ZM27.1942%2011.4896V8.02456C27.3328%204.38077%2032.5562%204.38381%2032.6934%208.02456V10.9892H29.9436C28.9766%2010.9889%2028.0501%2011.1666%2027.1942%2011.4896Z'%20fill='black'/%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20width='68'%20height='129'%20viewBox='0%200%2068%20129'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M61.5873%2036.0851C58.9206%2034.8994%2055.7979%2036.0999%2054.6122%2038.7662L47.4855%2055.267H45.795V44.7157V41.8427V15.4103C45.795%2012.4923%2043.4295%2010.1264%2040.5111%2010.1264C37.5928%2010.1264%2035.2272%2012.492%2035.2272%2015.4103V7.99502C35.2272%205.07702%2032.8617%202.71112%2029.9433%202.71112C27.0253%202.71112%2024.6594%205.07668%2024.6594%207.99502V15.4103C24.6594%2012.4923%2022.2939%2010.1264%2019.3755%2010.1264C16.4572%2010.1264%2014.0916%2012.492%2014.0916%2015.4103V27.9122C14.0916%2024.9942%2011.7261%2022.6283%208.80771%2022.6283C5.8897%2022.6283%203.5238%2024.9939%203.5238%2027.9122V41.8427V42.0738V65.8226C3.5238%2071.8516%207.30951%2076.9939%2012.6326%2079.0091V123.71H43.6589V79.0088C47.6152%2077.5109%2050.7208%2074.2847%2052.0554%2070.252L52.0916%2070.2574L57.141%2059.0872L64.2677%2043.0598C65.4541%2040.3935%2064.2535%2037.2707%2061.5873%2036.0851Z'%20fill='%23FFCAB9'/%3e%3cpath%20d='M21.712%2015.4103C21.712%2013.9905%2022.275%2012.7045%2023.1859%2011.755C22.7632%2011.3144%2022.2648%2010.9495%2021.712%2010.6761V15.4103Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M13.5301%2076.6388C9.0608%2074.947%206.05832%2070.6%206.05832%2065.8226V59.1388C6.05832%2055.8623%200.98999%2055.8623%200.98999%2059.1388V65.8226C0.98999%2072.0931%204.5858%2077.8471%2010.0988%2080.6546V124.71C10.0988%20126.11%2011.2331%20127.244%2012.633%20127.244C14.0328%20127.244%2015.1671%20126.11%2015.1671%20124.71V79.0087C15.1671%2077.9555%2014.5153%2077.0118%2013.5301%2076.6388Z'%20fill='black'/%3e%3cpath%20d='M66.7376%2038.108C65.9885%2036.1587%2064.5248%2034.6179%2062.6171%2033.7695C58.7243%2032.0392%2053.9935%2033.9212%2052.2858%2037.7613L48.3294%2046.9218V15.4103C48.4369%2010.0582%2042.7104%206.12481%2037.7616%208.09166C37.1599%20-2.42141%2022.5499%20-2.41228%2022.1258%208.09166C17.1761%206.12616%2011.4513%2010.0578%2011.5584%2015.4107V20.5939C6.61201%2018.6287%200.881082%2022.5594%200.990558%2027.9125V46.468C0.990558%2049.7445%206.05889%2049.7445%206.05889%2046.468V27.9122C6.20013%2024.2661%2011.4205%2024.2728%2011.5584%2027.9122V45.5365C11.5584%2048.813%2016.6267%2048.813%2016.6267%2045.5365C16.6267%2035.4944%2016.6267%2025.4524%2016.6267%2015.4103C16.7622%2011.7736%2021.9863%2011.7628%2022.1258%2015.4103V40.0539C22.1258%2043.3304%2027.1942%2043.3304%2027.1942%2040.0539V7.99503C27.1942%206.47892%2028.4275%205.24529%2029.9439%205.24529C31.4604%205.24529%2032.6936%206.47858%2032.6936%207.99503V40.0539C32.6936%2043.3304%2037.762%2043.3304%2037.762%2040.0539V15.4103C37.762%2013.8942%2038.9956%2012.6606%2040.512%2012.6606C42.0285%2012.6606%2043.2618%2013.8939%2043.2618%2015.4103V52.7943C35.7816%2053.463%2029.9287%2059.7518%2029.9287%2067.2769C29.9287%2070.5534%2034.997%2070.5534%2034.997%2067.2769C34.997%2060.1721%2041.4298%2057.5504%2047.4864%2057.8015C48.4974%2057.8015%2049.412%2057.2004%2049.8131%2056.2722L56.9291%2039.7961C57.7535%2038.329%2058.9635%2037.8637%2060.5583%2038.4009C62.0258%2039.2254%2062.491%2040.4354%2061.9538%2042.0305C57.9569%2051.0194%2049.7026%2069.4168%2049.7026%2069.4168C48.5342%2072.7365%2045.9399%2075.4366%2042.7631%2076.6391C41.7778%2077.0122%2041.126%2077.9555%2041.126%2079.0091V123.71C41.126%20125.11%2042.2603%20126.244%2043.6602%20126.244C45.06%20126.244%2046.1943%20125.11%2046.1943%20123.71V80.6505C49.9611%2078.7144%2052.9758%2075.293%2054.4452%2071.2059C58.5249%2062.1815%2062.5606%2053.139%2066.5846%2044.0896C67.4323%2042.1816%2067.4871%2040.0573%2066.7376%2038.108Z'%20fill='black'/%3e%3c/svg%3e",g="/desafio-PPT/assets/tijera-H2jU9DJ2.svg";function S(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=document.createElement("div"),e=document.createElement("style");o.innerHTML=`
      <div class="container-choices">
        <div class="container choices__tijera">
          <img src="${g}" class="choice tijera" alt="Tijera Icon">
        </div>
        <div class="container choices__piedra">
          <img src="${h}" class="choice piedra" alt="Piedra Icon">
        </div>
        <div class="container choices__papel">
          <img src="${u}" class="choice papel" alt="Papel Icon">
        </div>
      </div> 
      `,e.innerHTML=`
      .container-choices{
        display: flex;
        flex-direction: row;
        gap: 46px;
        margin: 0;
        height: 128px;
        position: relative;
        overflow: hidden;
      }
        @media (min-width: 960px) {
          .choice{
            height: 181px;
          }  
        }
         @media (min-width: 960px) {
          .container-choices{
            height: 181px;
          }  
        }  

      .container{
        position: relative;
        transition: transform 0.3s; /* Animación suave */
        top: 40px;
      }
      .container:hover {
        transform: translateY(-30px); /* Levantar la opción al pasar el mouse */  
      }  
      `,i.appendChild(e),i.appendChild(o);const t=i.querySelector(".piedra"),a=i.querySelector(".papel"),r=i.querySelector(".tijera"),l=i.querySelector(".choices__piedra"),c=i.querySelector(".choices__papel"),d=i.querySelector(".choices__tijera");t==null||t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("piedra-clicked"))}),a==null||a.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("papel-clicked"))}),r==null||r.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tijera-clicked"))}),this.addEventListener("piedra-selected",()=>{l.style.transform="translateY(-30px)",c.style.opacity="0.5",d.style.opacity="0.5"}),this.addEventListener("papel-selected",()=>{c.style.transform="translateY(-30px)",l.style.opacity="0.5",d.style.opacity="0.5"}),this.addEventListener("tijera-selected",()=>{d.style.transform="translateY(-30px)",c.style.opacity="0.5",l.style.opacity="0.5"})}}customElements.define("choice-comp",s)}function V(s){const n=document.querySelector(".root"),i=document.createElement("div"),o=document.createElement("style");i.innerHTML=`
    <div class="container-home">
      <text-el variant="title" class="home__title">Piedra Papel ó Tijera</text-el>
      <button-el class="home__button" variant="button">Empezar</button-el>
      <choice-comp class="home__choice"></choice-comp>
    </div>
  `,o.innerHTML=`
    .container-home{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .home__choice{
      margin-top: auto;    
    }
    .home__title{
      margin-top: 115px;
    }
    @media (min-width: 960px) {
      .home__title{
        margin-top: 145px;
      }
    }  
    .home__button{
      justify-self: center;
      margin-top: 59px;
    }  
    @media (min-width: 960px) {
      .home__button{
        margin-top: 26px;
      }
    }    
  `,n==null||n.appendChild(o),n==null||n.appendChild(i);const e=document.querySelector(".home__button");e==null||e.addEventListener("click",()=>{s.goTo("/instructions")})}function P(s){const n=document.querySelector(".root"),i=document.createElement("div"),o=document.createElement("style");i.innerHTML=`
    <div class="container__instructions">
      <text-el variant="body" class="instructions__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>
      <button-el class="instructions__button" variant="button">¡Jugar!</button-el>
      <choice-comp class="instructions__choice"></choice-comp>
    </div>
  `,o.innerHTML=`
    .container__instructions{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .instructions__choice{
      margin-top: auto;    
    }
    .instructions__text{
      margin-top: 129px;
      text-align: center;
    }
    @media (min-width: 960px) {
      .instructions__text{
        margin-top: 148px;
      }
    }  
    .instructions__button{
      margin-top: 45px;
    }  
    @media (min-width: 960px) {
      .instructions__button{
        margin-top: 48px;
      }
    }  
  `,n==null||n.appendChild(o),n==null||n.appendChild(i);const e=document.querySelector(".instructions__button");e==null||e.addEventListener("click",()=>{s.goTo("/game")})}function M(s){const n=document.querySelector(".root"),i=document.createElement("div"),o=document.createElement("style");i.innerHTML=`
    <div class="container__game">
      <timer-comp class="game__timer"></timer-comp>
      <button-el class="game__button" variant="button">Restart!</button-el>
      <choice-comp class="game__choice"></choice-comp>
    </div>
  `,o.innerHTML=`
    .container__game{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .game__choice{
      margin-top: auto;    
    }
    .game__timer{
      margin-top: 125px;
    }
    @media (min-width: 960px) {
      .game__timer{
        margin-top: 145px;
      }
    }
    .game__button{
      margin-top: 200px;
      display: none;
    }  
    @media (min-width: 960px) {
      .game__button{
        margin-top: 240px;
      }
    }
  `,n==null||n.appendChild(o),n==null||n.appendChild(i);const e=i.querySelector(".game__timer"),t=i.querySelector(".game__button"),a=i.querySelector(".game__choice");let r=!1;const l=Math.floor(Math.random()*3)+1,c=l===1?"piedra":l===2?"papel":l===3?"tijera":"";a==null||a.addEventListener("piedra-clicked",()=>{r=!0,a.dispatchEvent(new CustomEvent("piedra-selected"));const d="piedra";p.setGame(d,c),p.setHistory(d,c)}),a==null||a.addEventListener("papel-clicked",()=>{r=!0,a.dispatchEvent(new CustomEvent("papel-selected"));const d="papel";p.setGame(d,c),p.setHistory(d,c)}),a==null||a.addEventListener("tijera-clicked",()=>{r=!0,a.dispatchEvent(new CustomEvent("tijera-selected"));const d="tijera";p.setGame(d,c),p.setHistory(d,c)}),e==null||e.addEventListener("timer-finished",()=>{e.style.display="none",r?s.goTo("/confrontation"):t.style.display="inherit"}),t==null||t.addEventListener("click",()=>{e.dispatchEvent(new CustomEvent("timer-restarted")),e.style.display="inherit",t.style.display="none"})}function T(s){const n=document.querySelector(".root"),i=document.createElement("div");i.innerHTML=`
    <div class="container__confrontation">
      <versus-comp class="confrontation__versus"></versus-comp>
    </div>`,n==null||n.appendChild(i);const o=document.querySelector(".container__confrontation");let e=3,t=!1;const a=()=>{const r=setInterval(()=>{e--,e===0&&!t&&(clearInterval(r),s.goTo("/score"))},1e3)};o==null||o.addEventListener("click",()=>{s.goTo("/score"),t=!0}),a()}function H(s){var d;const n=document.querySelector(".root"),i=document.createElement("div"),o=document.createElement("style");let e="";i.innerHTML=`
  <div class="container__score-page">
    <div class="container__versus">
      <versus-comp class="versus"></versus-comp>
    </div>  
    <div class = "container__score">
      <star-comp class="score__star"></star-comp>
      <score-comp class="score__table"></score-comp>
      <button-el class="score__button-game" variant="button-score">Volver a Jugar</button-el>
      <button-el class="score__button-reset" variant="button-reset">Reset Score</button-el>
    </div>
  </div>
  `,n==null||n.appendChild(i);const t=document.querySelector(".score__star"),a=(d=t==null?void 0:t.shadowRoot)==null?void 0:d.querySelector(".star__text"),r=a==null?void 0:a.textContent;console.log("soy el resultado",r),r==="Ganaste"?e="#888949E5":r==="Perdiste"?e="#894949E5":e="#3399ff",o.innerHTML=`
  .container__score-page{
  background-color: ${e};
  opacity: 0.9;
  height: 100vh;
  }
  .container__versus{
    display: flex;
    justify-content: center;  
    
  }
  .versus{
    position: absolute;
    z-index: -1;
    justify-self: center;  
    opacity: 0.4;
  }
    .container__score{
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100vh;
   justify-content: space-between;
   padding: 15px 0;
  }
  @media (min-width: 960px) {
    .container__score{
      padding: 40px 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 5px 40px;
    }  
  } 
  @media (min-width: 960px){
    .score__star{
      grid-column: 1;
      grid-row: 1;
      align-self: center;
      justify-self: center;
    }
  } 
  @media (min-width: 960px){
    .score__table{
      grid-column: 2;
      grid-row-start: 1;
      grid-row-end: span 2;
      align-self: center;
      justify-self: center;
    }
  } 
  @media (min-width: 960px){
    .score__button-game{
      grid-column: 2;
      grid-row: 3;
      align-self: start;
      justify-self: center;
    }
  }
  @media (min-width: 960px){
    .score__button-reset{
      grid-column: 3;
      grid-row: 3;
      align-self: end;
      justify-self: center;
    }
  }  
  `,n==null||n.appendChild(o);const l=document.querySelector(".score__button-game");l==null||l.addEventListener("click",()=>s.goTo("/instructions"));const c=document.querySelector(".score__button-reset");c==null||c.addEventListener("click",()=>{p.clearHistory(),s.goTo("/home")})}const j=[{path:/\/home/,component:V},{path:/\/instructions/,component:P},{path:/\/game/,component:M},{path:/\/confrontation/,component:T},{path:/\/score/,component:H}],f="/desafio-PPT/";function _(){return location.host.includes("github.io")}function F(s){function n(o){const e=_()?f+o:o;history.pushState({},"",e),i(e)}function i(o){console.log(" el handleRoute recibio una ruta",o);const e=_()?o.replace(f,""):o;s.innerHTML="";for(const t of j)t.path.test(e)&&t.component({goTo:n})}location.pathname=="/"?n("/home"):i(location.pathname),window.onpopstate=function(){i(location.pathname)}}const x="/desafio-PPT/assets/three-ps-CPfDSeFN.png",k="/desafio-PPT/assets/two-ps-CqS7oaDy.png",q="/desafio-PPT/assets/one-ps-CInDm3eo.png",m="/desafio-PPT/assets/go-ps-Bsl1oJ7i.png";function B(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=document.createElement("div");o.classList.add("container__timer");const e=document.createElement("style");let t=4,a=document.createElement("img");a.classList.add("timer__img"),a.src=x;const r=()=>{const l=setInterval(()=>{t--;let c=t>0?t===3?k:t===2?q:m:m;a.src=c,t===0&&(clearInterval(l),this.dispatchEvent(new CustomEvent("timer-finished")))},1e3)};this.addEventListener("timer-restarted",()=>{t=4,a.src=x,r()}),e.innerHTML=`
        .container__timer{
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .timer__img{
          width: 243px;
          height: 243px;
          margin: 0;
          display: block;
        }
        @media (min-width: 960px) {
          .timer__img{
            width: 300px;
            height: 300px;
          }
        }  
         `,o.appendChild(a),i.appendChild(e),i.appendChild(o),r()}}customElements.define("timer-comp",s)}function I(){class s extends HTMLElement{constructor(){super(),this.render()}render(){const i=this.attachShadow({mode:"open"}),o=document.createElement("div"),e=document.createElement("style"),t=p.getState().game.machinePlay,a=p.getState().game.myPlay,r=t==="piedra"?h:t==="papel"?u:g,l=a==="piedra"?h:a==="papel"?u:g;o.innerHTML=`
      <div class="container__versus">
        <div class="versus__container-machine">
          <img src="${r}" class="versus__imagen img-machine" alt="Machine Icon">
        </div>
        <div class="versus__container-player">
          <img src="${l}" class="versus__imagen img-player" alt="Player Icon">
        </div>
      </div>
      `,e.innerHTML=`  
      .container__versus{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden; 
        height: 100vh;
        width: 100%;
      }  
      .versus__imagen{
        width: 171px;
        height: 356px;
        margin: 0;
        padding: 0;
      }

      .img-machine{
        margin-bottom: auto;
        transform: rotateX(180deg) translateY(30px);
      } 
      .img-player{
        transform: translateY(30px);
        margin-top: auto;
      }        
      `,i.appendChild(o),i.appendChild(e)}}customElements.define("versus-comp",s)}(function(){C(),y(),b(),E(),S();const s=document.querySelector(".root");F(s),B(),I()})();
