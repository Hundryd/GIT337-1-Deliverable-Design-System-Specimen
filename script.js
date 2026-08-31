const toggle = document.querySelector('[data-theme-toggle]');
const root = document.body;

if (toggle) {
    toggle.addEventListener('click', () => {
        const nextTheme = root.dataset.theme === 'alt' ? 'default' : 'alt';
        root.dataset.theme = nextTheme;
        toggle.textContent = nextTheme === 'alt' ? 'Default theme' : 'Alternate theme';
    });
}