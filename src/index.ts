/**
 * Toggle Navbar Menu
 */
const navMenu = document.querySelector('#navbar .nav-menu') as HTMLUListElement;
const showNavMenuButton = document.querySelector(
	'#toggle-menu .show'
) as HTMLButtonElement;
const hiddenNavMenuButton = document.querySelector(
	'#toggle-menu .hidden'
) as HTMLButtonElement;

const showClass: string = 'show-element';
const hiddenClass: string = 'hidden-element';

if (navMenu && showNavMenuButton && hiddenNavMenuButton) {
	showNavMenuButton.addEventListener('click', () => {
		navMenu.classList.remove(hiddenClass);
		navMenu.classList.add(showClass);

		showNavMenuButton.classList.remove(showClass);
		showNavMenuButton.classList.add(hiddenClass);

		hiddenNavMenuButton.classList.remove(hiddenClass);
		hiddenNavMenuButton.classList.add(showClass);
	});

	hiddenNavMenuButton.addEventListener('click', () => {
		navMenu.classList.remove(showClass);
		navMenu.classList.add(hiddenClass);

		showNavMenuButton.classList.remove(hiddenClass);
		showNavMenuButton.classList.add(showClass);

		hiddenNavMenuButton.classList.remove(showClass);
		hiddenNavMenuButton.classList.add(hiddenClass);
	});
}
