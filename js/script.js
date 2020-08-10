let panelItem = document.querySelectorAll('.sidebar__menu-head'),
  active = document.getElementsByClassName('sidebar__menu-head--active');
Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this)
      active[0].classList.remove('sidebar__menu-head--active');
    this.classList.toggle('sidebar__menu-head--active');
  });
});