((d) => {
  const $skillBtn = d.querySelector('.toggle-btn-1'),
    $proyectBtn = d.querySelector('.toggle-btn-2'),
    $proyectContent = d.querySelectorAll('.hide')
  ;

  $proyectBtn.addEventListener('click', (e) => {
    d.querySelector('.hide').classList.add('is-select');
    d.querySelector('.hide').classList.remove('is-off');
  });

})(document);