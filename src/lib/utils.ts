export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  setIsOpen: (isOpen: boolean) => void,
) => {
  e.preventDefault();
  setIsOpen(false);

  if (href === '/' || href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);

  if (element) {
    const yOffset = -64;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
