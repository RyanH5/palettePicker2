class Swatches {
 constructor(){
   this.hexColors = {
     'swatch1': { color: '', locked: false},
     'swatch2': { color: '', locked: false},
     'swatch3': { color: '', locked: false},
     'swatch4': { color: '', locked: false},
     'swatch5': { color: '', locked: false},
     'swatch6': { color: '', locked: false}
   }
   this.generateColors = this.generateColors.bind(this)
 }
 
   getRandomColor() {
    console.log('click')     
    let colors = '#';
    let chars = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      colors += chars[Math.floor(Math.random() * 16)]
      }
      return colors
    }
    
    generateColors() {
      console.log(this.hexColors);
      const colors = Object.keys(this.hexColors).map(swatch => {
        if (!this.hexColors[swatch].locked){
          this.hexColors[swatch].color = this.getRandomColor();
        } else {
          this.hexColors[swatch].color = this.hexColors[swatch].color;
        }
      })
      return colors;
    }
  }
  
  const palette = new Swatches;
  palette.generateColors();
  document.querySelector('.palette--generator-btn').addEventListener('click', function(e) {
    e.preventDefault();
    palette.generateColors();
  })
  
  
  const toggleLock = (e) => {
    e.preventDefault();
    console.log('EVENT', event.target.id)
    event.target.closest('.swatch').classList.toggle('locked');
    var color = event.target.id;
    if (!event.target.id) {
      color = event.target.closest('.swatch').id
    }
    palette.hexColors[color].locked = !palette.hexColors[color].locked
    debugger;
  }
  document.querySelector('.color-swatches').addEventListener('click', toggleLock)
