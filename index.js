((d) => {
  const $proyectBtn = d.querySelector('.toggle-btn-1'),
    $skillBtn = d.querySelector('.toggle-btn-2')
  ;

  $proyectBtn.addEventListener('click', (e) => {
    $proyectBtn.classList.add('toggle-efect');
    $skillBtn.classList.remove('toggle-efect');
  });

  $skillBtn.addEventListener('click', (e) => {
    $skillBtn.classList.add('toggle-efect');
    $proyectBtn.classList.remove('toggle-efect');
  });

})(document);