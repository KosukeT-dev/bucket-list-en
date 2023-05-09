let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
  if(input.value.trim() != 0){
    addBtn.classList.add('active')
  } else {
    addBtn.classList.remove('active')
  }
})

// ページ読み込み時にローカルストレージからデータを取得
window.addEventListener('load', () => {
  let storedData = localStorage.getItem('myList');
  if(storedData) {
    tasks.innerHTML = storedData;
  }
});

addBtn.addEventListener('click', () => {
  if(input.value.trim() != 0){
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <p>${input.value}</p>
      <div class="item-btn">
        <button class="achievement" type="achievement">Achieved</button>
        <button class="delete" type="delete">Delete</button>
      </div>`;
    tasks.appendChild(newItem);
    input.value = '';  
    
    // ローカルストレージにデータを保存
    localStorage.setItem('myList', tasks.innerHTML);
  } else {
    alert('Please enter.')
  }
})

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }
})

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('achievement')){
    e.target.parentElement.parentElement.classList.toggle('item-completed');
  }
})
