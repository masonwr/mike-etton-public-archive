function setLinks() {
  const nav = document.getElementById("top-nav");
  const theLink = nav.querySelector(`a[href='${window.location.pathname}']`);
  if (!!theLink) {
    disableNavLink(theLink)
  }
}

function disableNavLink(link) {
  // remove active styles
  link.classList.remove('white-90', 'hover-pink');
  link.classList.add('white-50');
  link.style.cursor = "default";

  // disable display
  link.href = 'javascript:'
}

setLinks()
