import { homePage } from "./pages/home";
import { instructionsPage } from "./pages/instructions";
import { gamePage } from "./pages/game";
import { confrontationPage } from "./pages/confrontation";
import { scorePage } from "./pages/score";

const BASE_PATH = "/desafio-PPT"; // Base path para GitHub Pages

const routes = [
  {
    path: /\/home/,
    component: homePage,
  },
  {
    path: /\/instructions/,
    component: instructionsPage,
  },
  {
    path: /\/game/,
    component: gamePage,
  },
  {
    path: /\/confrontation/,
    component: confrontationPage,
  },
  {
    path: /\/score/,
    component: scorePage,
  },
];

export function initRouter(container) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path; // Agrega BASE_PATH solo si estás en GitHub Pages

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log(" el handleRoute recibio una ruta", route);
    const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route; // Elimina BASE_PATH si estás en GitHub Pages

    //limpiamos el body html antes de agregarle una pagina, asi no se acoplan una debajo de la otra
    container.innerHTML = "";

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        r.component({ goTo: goTo });
        break; // Salimos del bucle una vez que encontramos la ruta
      }
    }
  }
  if (location.pathname === "/" || location.pathname === BASE_PATH) {
    // la pagina inicial (osea el index html) es direcion ip + puerto + "/" = 127.0.0.1:8080/ entonces hay que cambiar la "/" a "/welcome" cuando iniciamos el navegador
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
  function isGitHubPages() {
    return location.host.includes("github.io");
  }
}
