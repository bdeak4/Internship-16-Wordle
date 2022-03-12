function focusNext(el) {
  const target = el.nextElementSibling;
  if (target) {
    target.focus();
  }
}

function focusPrev(el) {
  const target = el.previousElementSibling;
  if (target) {
    target.focus();
  }
}

export { focusNext, focusPrev };
