// $('.menu_mobile .toggle').on('click', function (ev) {
//   ev.preventDefault();
//   if ($('.menu_mobile').hasClass('active')) {
//     $('.menu_mobile').removeClass('active');
//   } else {
//     $('.menu_mobile').addClass('active');
//   }
// });

const mobile = document.querySelector('#menu_mobile');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function (ev) {
	ev.preventDefault();
	if (mobile.getAttribute('class') === 'active') {
		mobile.setAttribute('class', 'passive')
	} else {
		mobile.setAttribute('class', 'active')
	};
});