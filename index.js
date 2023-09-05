((d) => {
  const $skillBtn = d.querySelector('.toggle-btn-1'),
    $proyectBtn = d.querySelector('.toggle-btn-2'),
    $proyectContent = d.querySelector('.proyects'),
    $skillContent = d.querySelector('.skills')
  ;

  let counter = 1;

  $proyectContent.style.display = 'none';

  $proyectBtn.addEventListener('click', (e) => {
    if (counter == 1) {
      $proyectBtn.classList.add('select');
      $skillBtn.classList.remove('select');
      $proyectContent.style.display = 'grid';
      $skillContent.style.display = 'none';
      counter = 0;
    }
  });

  $skillBtn.addEventListener('click', (e) => {
    if (counter == 0) {
      $proyectContent.style.display = 'none';
      $skillContent.style.display = 'grid';
      $proyectBtn.classList.remove('select');
      $skillBtn.classList.add('select');
      counter = 1;
    }
  });

})(document);