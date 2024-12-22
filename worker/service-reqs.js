document.addEventListener('DOMContentLoaded', () => {
    const serviceRequests = document.querySelector('.service-requests');
    const dragHandle = document.querySelector('.drag-handle');
    const viewButton = document.querySelector('.view-button');
  
    let isDragging = false;
    let startY = 0;
  
    // Drag-to-Expand Functionality
    dragHandle.addEventListener('mousedown', (e) => {
      isDragging = true;
      startY = e.clientY;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const offset = startY - e.clientY;
        if (offset > 50) {
          serviceRequests.classList.add('expanded');
        } else if (offset < -50) {
          serviceRequests.classList.remove('expanded');
        }
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    // Click-to-Expand Functionality
    viewButton.addEventListener('click', () => {
      serviceRequests.classList.toggle('expanded');
    });
  });
  