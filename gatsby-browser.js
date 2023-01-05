import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

Prism.manual = true;

function highlightCodeBlocks() {
  const codeBlocks = document.querySelectorAll("pre code");

  codeBlocks.forEach((codeBlock ) => {
    const lineData = codeBlock.getAttribute("data-line");

    if (lineData) {
      codeBlock.parentElement.setAttribute("data-line", lineData);
    }

    // if (!codeBlock.classList.contains("language-text")) {
    //   codeBlock.classList.add("line-numbers");
    // }

    codeBlock.parentElement.classList.add("match-braces");

    Prism.highlightElement(codeBlock);
  });
}

export const onRouteUpdate = () => {
  highlightCodeBlocks();
};