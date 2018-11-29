const getRandomColors = () => {
  let colors = '#';
  let chars = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    colors += chars[Math.floor(Math.random() * 16)]
  }
  return colors
}