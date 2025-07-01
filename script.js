//Function to display tooltip on share button

const shareButton = document.getElementById('share-button');
const tooltip = document.getElementById('tooltip');

// Toggle tooltip visibility on button click
shareButton.addEventListener('click', (e) => {
  e.stopPropagation(); 
  const isVisible = tooltip.style.display === 'flex';
  tooltip.style.display = isVisible ? 'none' : 'flex';
  shareButton.classList.toggle('active', !isVisible);
});

// Hide tooltip when clicking outside
document.addEventListener('click', (e) => {
  if (!tooltip.contains(e.target)) {
    tooltip.style.display = 'none';
    shareButton.classList.remove('active');
  }
});

