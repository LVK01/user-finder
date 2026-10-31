const input = document.getElementById('userId')
const btn = document.getElementById('searchBtn')
const result = document.getElementById('result')


btn.addEventListener('click', async (e)=>{

  if (input.value > 10 || input.value == 0 || !input.value) {
    result.innerHTML = `<div>Введите ID от 1 до 10</div>`
    return
  }

  try{
    const userId = input.value
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error()
    const data = await response.json();
console.log(data);

    result.innerHTML = `<div>${data.name}</br>${data.email}</br>${data.address.city}</div>`
  } 
  catch (err){
    console.log("Ошибка:" + err);
    result.innerHTML = `<div>Ошибка: ${err}</div>`
  } 
})