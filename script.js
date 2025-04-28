document.getElementById('callApiBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('https://backend-git-dgnaw-dev.apps.rm3.7wse.p1.openshiftapps.com/api');
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    const data = await response.json();
    document.getElementById('responseText').innerText = data.message;
  } catch (error) {
    document.getElementById('responseText').innerText = 'Lỗi kết nối Backend';
    console.error('Error:', error);
  }
});
