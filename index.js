((window) => {
  const {
    screen: { width, height },
    location,
    document: { referrer },
    history,
  } = window;
  const { hostname, pathname, search } = location;
  const { currentScript } = document;

  if (!currentScript) return;
  
  const getAttribute = currentScript.getAttribute.bind(currentScript);

  console.log("finished")
  
  console.log("data config", getAttribute('data-config'))
})(window)
