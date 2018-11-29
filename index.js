class Swatches {
 constructor(){
   this.hexColors = {
     'color1': { color: '', locked: false},
     'color2': { color: '', locked: false},
     'color3': { color: '', locked: false},
     'color4': { color: '', locked: false},
     'color5': { color: '', locked: false},
     'color6': { color: '', locked: false}
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

    // toggleLock(event) {
    //   event.target.closest('.swatch').classList.toggle('locked')
    // }
  }
  
  const palette = new Swatches;
  palette.generateColors();
  document.querySelector('.palette--generator-btn').addEventListener('click', function(e) {
    e.preventDefault();
    palette.generateColors();
  })
  
  document.querySelector('.color-swatches').addEventListener('click', function(e) {
    e.preventDefault();
    event.target.closest('.swatch').classList.toggle('locked')
  })
