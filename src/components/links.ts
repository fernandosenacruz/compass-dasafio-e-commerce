export interface Link {
  name: string;
}

interface LinksProps {
  title: string;
  links: Link[];
}

function createLink(link: Link): HTMLElement {
  const linkElement = document.createElement('a');
  linkElement.href = `#${link.name}`;
  linkElement.textContent = link.name;
  return linkElement;
}

export function createLinks({ title, links }: LinksProps): HTMLElement {
  const linksBox = document.createElement('div');
  linksBox.className = 'links';
  const titleElement = document.createElement('h4');
  titleElement.textContent = title;
  linksBox.appendChild(titleElement);
  links.forEach((link) => {
    linksBox.appendChild(createLink(link));
  });
  return linksBox;
}
