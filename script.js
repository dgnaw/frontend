document.getElementById('callApiBtn').addEventListener('click', () => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        document.getElementById('responseText').innerText = data.message;
      })
      .catch(error => {
        document.getElementById('responseText').innerText = 'Lỗi kết nối Backend';
        console.error('Error:', error);
      });
  });
  