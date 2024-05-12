

// mermaid.initialize({startOnLoad: false})
await mermaid.run({
  querySelector: ".mermaid",
  postRenderCallback: (id) => {
    const mermaid = document.querySelector(".mermaid");
    mermaid.style.visibility = 'visible';
  }
})
