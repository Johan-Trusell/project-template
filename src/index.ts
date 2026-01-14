/**
 * Main entry point
 */
import './styles/main.css';

function init(): void {
  console.log('🚀 Application initialized');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { init };
