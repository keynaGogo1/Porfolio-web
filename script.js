// Example JS for future enhancements
// For now, we'll just log a message
console.log("Portfolio website loaded successfully!");

// You can add interactive features later, like smooth scroll or modal popups
// Toggle subfolder display
document.querySelectorAll('.subfolders > li').forEach(folder => {
  folder.addEventListener('click', () => {
    const sublist = folder.querySelector('ul');
    if (sublist) {
      sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
   // Toggle subfolder/files display when clicking parent folder
document.querySelectorAll('.subfolders > li').forEach(folder => {
  folder.addEventListener('click', () => {
    const fileList = folder.querySelector('ul.files');
    if (fileList) {
      fileList.style.display = fileList.style.display === 'block' ? 'none' : 'block';
    }
  });
});

   
    }
  });
});
