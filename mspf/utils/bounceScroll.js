export function bounceScrollTo(targetY) {
  const overshoot = 400; // how far past the target to scroll
  const scrollDuration = 500;
  const bounceDuration = 300;

  // Step 1: Scroll to a bit past the target
  setTimeout(() => {
    window.scrollTo({
        top: targetY + overshoot,
        behavior: 'auto',
    });
  }, bounceDuration);

  // Step 2: After that finishes, bounce back up
  setTimeout(() => {
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }, scrollDuration);
}
