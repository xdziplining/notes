const downloadButton = document.getElementById('downloadButton');
const textarea = document.getElementById('textarea');

downloadButton.addEventListener('click', () => {
  const textContent = textarea.value;
  const blob = new Blob([textContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'savefile.xdn';
  a.click();
  URL.revokeObjectURL(url);
});
