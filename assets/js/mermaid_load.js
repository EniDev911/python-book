

// mermaid.initialize({startOnLoad: false})
await mermaid.run({
  querySelector: ".mermaid",
  postRenderCallback: (id) => {
    document.querySelector(".mermaid").style.visibility = 'visible';
  }
})
