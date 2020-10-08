export const TypingAnimation = (
  text: string,
  elementId: string,
  speed: number
) => {
  const textElement: HTMLElement | null = document.getElementById(elementId)!;
  if (textElement) {
    let iterator: number = textElement.innerHTML.length;
    if (iterator < text.length) {
      setTimeout(function () {
        textElement.innerHTML += text.charAt(iterator);
        iterator++;
        TypingAnimation(text, elementId, speed);
      }, speed);
    }
  }
};
