type FocusableElement = HTMLElement | SVGElement;
const candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
  'details>summary:first-of-type',
  'details',
];
export function tabbable(container: Element): FocusableElement[] {
  const tabbableElements = Array.from(
    container.querySelectorAll<FocusableElement>(candidateSelectors.join(','))
  );
  return tabbableElements;
}
