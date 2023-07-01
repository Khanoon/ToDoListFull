function addtodolist() {
    let Todo = document.getElementById("input").value;
    let oldData = JSON.parse(localStorage.getItem('Todo')) || [];
  
    if(Todo =='' || !Todo){
  
      alert('Pass')
      return;
    }
  
    if (oldData.length === 0) {
      localStorage.setItem('Todo', JSON.stringify([{ Todo }]));
    } else {
      let newData = [...oldData, { Todo }];
      localStorage.setItem('Todo', JSON.stringify(newData));
      console.log(localStorage.getItem('Todo'));
    }
   location.reload() //รีหน้า
  }
  
  
  function showText() {
    let show = document.getElementById('showlist');
    let lists = JSON.parse(localStorage.getItem('Todo'));
  
    if (true) {
      let html = lists.map((list, index) => {
        return `
        <div class="row">
         
            <div class="flne" >  <input type="checkbox" name="vehicle1" value="Bike">${list.Todo}</div>
              <div class="button_Del" class="btn btn-default">
              <button onclick="deleteTodo(${index})">Delete</button>
            </div>
          </div>
       
        `;
      }).join(''); //จอยค่าว่าง
  
      show.innerHTML = html;
    }
  }
  
  showText()
  
  function cleardata (){
    localStorage.clear();
    location.reload()
  }
  function deleteTodo(index) {
    let lists = JSON.parse(localStorage.getItem('Todo'));
    lists.splice(index, 1);
    localStorage.setItem('Todo', JSON.stringify(lists));
    showText(); // Refresh the displayed list after deleting
  }
  
  function pleaseAddTODO (){
    let x = document.getElementById('please')
    x.innerHTML = "กรุณากรอกข้อมูล";
  }