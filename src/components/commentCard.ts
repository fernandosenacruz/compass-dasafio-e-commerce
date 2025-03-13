import { createAvatarLetter } from '../utils/createAvatarLetter.js';

export interface CommentCard {
  name: string;
  position: string;
  comment: string;
}

export function createCommentCard({
  name,
  position,
  comment,
}: CommentCard): HTMLElement {
  const cardEl = document.createElement('div');
  cardEl.className = 'comment-card';
  const avatarLetter = createAvatarLetter(name);
  cardEl.innerHTML = `
    <p>${comment}</p>
    <div class="comment-details">
      ${avatarLetter.outerHTML}
      <div class="comment-text">
        <h4>${name}</h4>
        <p>${position}</p>
      </div>
  `;
  return cardEl;
}
