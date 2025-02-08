// Const classes
const SHOW_CLASS: string = 'show-element';
const HIDDEN_CLASS: string = 'hidden-element';
const ACTIVE_CLASS: string = 'active';

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

if (navMenu && showNavMenuButton && hiddenNavMenuButton) {
	showNavMenuButton.addEventListener('click', () => {
		navMenu.classList.remove(HIDDEN_CLASS);
		navMenu.classList.add(SHOW_CLASS);

		showNavMenuButton.classList.remove(SHOW_CLASS);
		showNavMenuButton.classList.add(HIDDEN_CLASS);

		hiddenNavMenuButton.classList.remove(HIDDEN_CLASS);
		hiddenNavMenuButton.classList.add(SHOW_CLASS);
	});

	hiddenNavMenuButton.addEventListener('click', () => {
		navMenu.classList.remove(SHOW_CLASS);
		navMenu.classList.add(HIDDEN_CLASS);

		showNavMenuButton.classList.remove(HIDDEN_CLASS);
		showNavMenuButton.classList.add(SHOW_CLASS);

		hiddenNavMenuButton.classList.remove(SHOW_CLASS);
		hiddenNavMenuButton.classList.add(HIDDEN_CLASS);
	});
}

/**
 * Change navbar links color
 */
const sectionsElments = document.querySelectorAll(
	'[data-section]'
) as NodeListOf<HTMLDivElement>;
const navLinks = document.querySelectorAll(
	'.nav-link'
) as NodeListOf<HTMLAnchorElement>;

const clearNavLinksColor = (): void => {
	navLinks.forEach((navLink) => navLink.classList.remove(ACTIVE_CLASS));
	return;
};

let debounceTimer: NodeJS.Timeout;
const updateNavLinkColorOnScroll = (): void => {
	clearTimeout(debounceTimer);

	debounceTimer = setTimeout(() => {
		for (const section of Array.from(sectionsElments)) {
			const sectionIdName = section.getAttribute('id');
			const navLinkHref = document.querySelector(
				`.nav-link[href="#${sectionIdName ?? ''}"]`
			) as HTMLAnchorElement;

			const rect = section.getBoundingClientRect();

			if (rect.top <= 0 && rect.bottom >= 0) {
				if (navLinkHref) {
					clearNavLinksColor();
					navLinkHref.classList.add(ACTIVE_CLASS);
					break;
				}
			}
		}
	}, 100);
};

const updateNavLinkColorOnClick = (hrefValue: string): boolean => {
	sectionsElments &&
		sectionsElments.forEach((section) => {
			const sectionIdName = section.getAttribute('id');
			const navLinkHref = document.querySelector(
				`.nav-link[href="#${hrefValue}"]`
			) as HTMLAnchorElement;

			if (sectionIdName === hrefValue && navLinkHref) {
				clearNavLinksColor();
				navLinkHref.classList.add(ACTIVE_CLASS);
				return true;
			}
		});

	return false;
};

const initializeNavbar = (): void => {
	if (!sectionsElments.length || !navLinks.length) {
		console.warn('No sections or nav links found.');
		return;
	}

	updateNavLinkColorOnScroll();

	// Add click event
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', () => {
			if (updateNavLinkColorOnClick(navLink.href.replace('#', ''))) {
				return;
			}
		});
	});

	// Add scroll event
	window.addEventListener('scroll', updateNavLinkColorOnScroll);
};

initializeNavbar();

/**
 * ScrollReveal Animations
 */
import ScrollReveal from 'scrollreveal';

const revealElement = (
	selector: string,
	options: scrollReveal.ScrollRevealObjectOptions
): void => {
	ScrollReveal().reveal(selector, {
		easing: 'ease-in',
		reset: true,
		...options,
	});
};

// About Section
revealElement('.about-right', {
	origin: 'right',
	distance: '100%',
	duration: 1500,
});
revealElement('.about-left', {
	easing: 'ease-in-out',
	opacity: 0,
	duration: 3000,
});

// Experience Section
revealElement('.experience-left', {
	origin: 'left',
	distance: '40%',
	easing: 'ease-in-out',
	opacity: 0,
	duration: 1000,
});

revealElement('.experience-right', {
	origin: 'right',
	distance: '40%',
	easing: 'ease-in-out',
	opacity: 0,
	duration: 1000,
});

// Services Section
const servicesQuantity = (
	document.querySelectorAll('.service-item') as NodeListOf<HTMLDivElement>
)?.length;

if (servicesQuantity) {
	for (let i = 0; i < servicesQuantity; i++) {
		revealElement(`.service-item:nth-child(${i + 1})`, {
			origin: 'bottom',
			distance: '80%',
			opacity: 0,
			duration: 1000,
			easing: 'ease-in',
			delay: i * 100,
		});
	}
}

const contactQuantity = (
	document.querySelectorAll('.contact-item') as NodeListOf<HTMLDivElement>
)?.length;

if (contactQuantity) {
	for (let i = 0; i < contactQuantity; i++) {
		revealElement(`.contact-item:nth-child(${i + 1})`, {
			opacity: 0,
			duration: 1000,
			easing: 'ease-in',
			delay: i * 200,
		});
	}
}
