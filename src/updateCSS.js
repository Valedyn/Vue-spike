let localStorageCSS = localStorage.getItem("modeCSS");

let css = localStorageCSS == null ? "./css/default.css" : localStorageCSS


export function addCSSToHeader(){
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = css;
      document.head.appendChild(link);
}
