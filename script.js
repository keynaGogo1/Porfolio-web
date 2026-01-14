
console.log("Portfolio website loaded successfully!");


document.querySelectorAll('.subfolders > li').forEach(folder => {
  folder.addEventListener('click', () => {
    const sublist = folder.querySelector('ul');
    if (sublist) {
      sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
 
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
