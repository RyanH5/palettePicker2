class Swatches {
 constructor(){
   this.hexColors = {
     'swatch1': { color: '', locked: false},
     'swatch2': { color: '', locked: false},
     'swatch3': { color: '', locked: false},
     'swatch4': { color: '', locked: false},
     'swatch5': { color: '', locked: false}
   }
   this.generateColors = this.generateColors.bind(this)
 }
 
   getRandomColor() {
    let colors = '#';
    let chars = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      colors += chars[Math.floor(Math.random() * 16)]
      }
      return colors
    }
    
    generateColors() {
      const colors = Object.keys(this.hexColors).map(swatch => {
        if (!this.hexColors[swatch].locked){
          this.hexColors[swatch].color = this.getRandomColor();
        } else {
          this.hexColors[swatch].color = this.hexColors[swatch].color;
        }
        document.getElementById(swatch).style.backgroundColor = this.hexColors[swatch].color;
        document.getElementById(swatch).lastElementChild.innerText = this.hexColors[swatch].color;
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
    event.target.closest('.swatch').classList.toggle('locked');
    var color = event.target.id;
    if (!event.target.id) {
      color = event.target.closest('.swatch').id
    }
    palette.hexColors[color].locked = !palette.hexColors[color].locked
    toggleLockText(e);
  }

  document.querySelector('.color-swatches').addEventListener('click', toggleLock)

  const toggleLockText = (e) => {
    if(e.target.childElementCount) {
      if(e.target.firstElementChild.innerText === 'UNLOCKED') {
        e.target.firstElementChild.innerText = 'LOCKED'
      } else {
        e.target.firstElementChild.innerText = 'UNLOCKED'
      }
    }
    console.log(palette)
  }

  
  const saveProject = (e) => {
    e.preventDefault();
    let newProjTitle = document.querySelector('.new--project-input');
    const select = document.querySelector('.project-dropdown');
    const option = document.createElement('option');
    option.text = newProjTitle.value;
    select.add(option);
    postProject(newProjTitle.value);
    appendNewProject(newProjTitle.value)
    newProjTitle.value = '';
  }

  const appendNewProject = (newProjTitle) => {
    const parent = document.createElement('div');
    const child = document.createElement('h3');
    child.innerText = newProjTitle;
    parent.append(child);
    document.querySelector('.projects-container').append(parent);
  }

  document.querySelector('.new--project-form').addEventListener('submit', saveProject)

  const postProject = async (projName) => {
    const url = 'http://localhost:3000/api/v1/projects';
    const options = {
      method: 'POST', 
      body: JSON.stringify({project_name: projName}),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  }