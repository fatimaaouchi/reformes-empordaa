function setLang(lang, btn) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.documentElement.lang = lang;
    document.querySelectorAll('.t').forEach(el => el.classList.toggle('on', el.classList.contains(lang)));
  }
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }