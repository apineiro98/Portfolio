((d) => {
  const $skillBtn = d.querySelector('.toggle-btn-1'),
    $proyectBtn = d.querySelector('.toggle-btn-2'),
    $proyectContent = d.querySelector('.proyects'),
    $skillContent = d.querySelector('.skills')
  ;

  let counter = 1;

  $proyectBtn.addEventListener('click', (e) => {
    if (counter == 1) {
      $proyectBtn.classList.add('select');
      $skillBtn.classList.remove('select');
      $proyectContent.classList.remove('none');
      $skillContent.classList.add('none');
      counter = 0;
    }
  });

  $skillBtn.addEventListener('click', (e) => {
    if (counter == 0) {
      $proyectContent.classList.add('none');
      $skillContent.classList.remove('none');
      $proyectBtn.classList.remove('select');
      $skillBtn.classList.add('select');
      counter = 1;
    }
  });

})(document);