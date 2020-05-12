(function() {
  const goaway = '.ytp-chrome-top,.ytp-chrome-bottom{display:none;}';
  if ('\v' === 'v') {
    document.createStyleSheet().cssText = goaway;
  } else {
    const tag = document.createElement('style');
    tag.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(tag);
    tag[
      typeof document.body.style.WebkitAppearance === 'string'
        ? 'innerText'
        : 'innerHTML'
    ] = goaway;
  }
})();
