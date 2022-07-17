function darkMode() {
  const body = document.querySelector('body');
  const box = document.querySelector('#js-box');
  const footer = document.querySelector('#js-footer');
  const btnMode = document.querySelector('#btnMode');

  btnMode.addEventListener('click', () => {
    body.classList.toggle('darkBody');
    box.classList.toggle('darkBox');
    footer.classList.toggle('darkFooter');
    btnMode.classList.toggle('btnDark');

    if(body.classList.contains('darkBody'))
      document.querySelector('#msgMode').innerHTML = "Dark Mode On";
    else
    document.querySelector('#msgMode').innerHTML = "Light Mode On";
  });
}
darkMode();