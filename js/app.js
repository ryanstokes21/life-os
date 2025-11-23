const tabs = document.querySelectorAll('.tab-panel');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.setAttribute('hidden', true);
    });
    const target = btn.dataset.target;
    document.querySelector('#' + target).removeAttribute('hidden');
  });
});