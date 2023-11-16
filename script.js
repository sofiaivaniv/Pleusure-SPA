"use strict"
document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;

	if(targetItem.closest('.icon-menu')){
		document.documentElement.classList.toggle('menu-open');
	}
	if (targetItem.classList.contains('menu__link')) {
    // Закриття бургер-меню
    document.documentElement.classList.remove('menu-open');

    // Отримання посилання (href) пункта меню, на який був зроблений клік
    const targetSectionId = targetItem.getAttribute('href').substring(1);

    // Перехід до вибраної частини сайту
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    e.preventDefault(); // Заборона переходу за посиланням
  }
}
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.button__textmain, .button__card');
    var sectionToScroll = document.getElementById('section6');

    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function(event) {
      var form = document.getElementById('form');
      var isValid = form.checkValidity(); // Перевіряємо валідність усіх обов'язкових полів
  
      if (isValid) {
        event.preventDefault(); // Зупиняємо дію за замовчуванням (відправку форми)
  
        // Отримуємо всі поля форми
        var formFields = form.querySelectorAll('input, textarea');
  
        // Очищаємо значення у всіх полях форми
        formFields.forEach(function(field) {
          field.value = '';
        });
        // Виводимо повідомлення про успішне надіслання
        alert('Успішно надіслано');
      }
    });
  });