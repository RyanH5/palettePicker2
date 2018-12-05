 const saveProject = async () => {
  const url = 'http://localhost:3000/api/v1/projects'
  const response = await fetch(url);
  console.log(response)
}

export { saveProject }