// function addtodolist() {
//     let Todo = document.getElementById("input").value;
//     let oldData = JSON.parse(localStorage.getItem('Todo')) || [];
  
//     if(Todo =='' || !Todo){
  
//       alert('Pass')
//       return;
//     }
  
//     if (oldData.length === 0) {
//       localStorage.setItem('Todo', JSON.stringify([{ Todo }]));
//     } else {
//       let newData = [...oldData, { Todo }];
//       localStorage.setItem('Todo', JSON.stringify(newData));
//       console.log(localStorage.getItem('Todo'));
//     }
//    location.reload() //รีหน้า
//   }
  
  
  showText()
  
  function cleardata(){
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

  function cleardata (){
    localStorage.removeItem();
    location.reload()
  }
  
  // function showText() {
  //   let show = document.getElementById('showlist');
  //   let lists = JSON.parse(localStorage.getItem('Todo'));
  
  //   if (true) {
  //     let html = lists.map((list, index) => {
  //       return `
  //       <div class="row">
         
  //           <div class="flne" >  <input type="checkbox" name="vehicle1" value="Bike" ">${list.Todo}</div>
  //             <div class="button_Del" class="btn btn-default">
  //             <button onclick="deleteTodo(${index})">Delete</button>
  //           </div>
  //         </div>
       
  //       `;
  //     }).join(''); //จอยค่าว่าง
  
  //     show.innerHTML = html;
  //   }
  // }
  


  // ..................Test 
  function removeCheckedCheckboxes() {
    var checked = document.querySelectorAll(".flne");
    checked.forEach((elem) => {
      elem.parentElement.style.display = "none";
    })
  }


  function showText() {
    let show = document.getElementById('showlist');
    let lists = JSON.parse(localStorage.getItem('Todo'));
  
    if (lists && lists.length > 0) {
      let html = lists.map((list, index) => {
        return `
        <div class="row">
        <div class="flne">
          <input type="checkbox" name="todoItem" onchange="toggleTodo(${index})" ${list.done ? 'checked' : ''}>
          <span ${list.done ? 'style="text-decoration: line-through;"' : ''}>${list.todo}</span>
        </div>
        <div class="button_Del">
          <button onclick="deleteTodo(${index})">Delete</button>
        </div>
        
      </div>
        `;
      }).join('');
  
      show.innerHTML = html;
    } else {
      show.innerHTML = "    <div> <p> !!!!!!!!!!!!เพิ่ม To DO List ของคุณ !!!!!!!!</p></div>";
    }
  }
  
  // function addTodo() {
  //   let newTodo = document.getElementById('newTodo').value.trim();
  //   if (newTodo !== '') {
  //     let lists = JSON.parse(localStorage.getItem('Todo')) || [];
  //     let todoItem = {
  //       todo: newTodo,
  //       done: false
  //     };
  //     lists.push(todoItem);
  //     localStorage.setItem('Todo', JSON.stringify(lists));
  //     document.getElementById('newTodo').value = '';
  //     showText();
  //   }
  // }
  document.addEventListener("DOMContentLoaded", function () {
    let inputTodo = document.getElementById("newTodo");
    let errorMsg = document.getElementById("errorMsg");

    inputTodo.addEventListener("input", function () {
        if (inputTodo.value.trim() === "") {
            inputTodo.style.border = "2px solid red";
            errorMsg.style.display = "inline"; // แสดงข้อความเมื่อไม่กรอกค่า
        } else {
            inputTodo.style.border = "none";
            errorMsg.style.display = "none"; // ซ่อนข้อความเมื่อกรอกค่า
        }
    });
});

function addTodo() {
  let newTodo = document.getElementById('newTodo').value.trim();
  let errorMsg = document.getElementById('errorMsg');
  let inputTodo = document.getElementById('newTodo');

  if (newTodo !== '') {
      let lists = JSON.parse(localStorage.getItem('Todo')) || [];
      let todoItem = {
          todo: newTodo,
          done: false
      };
      lists.push(todoItem);
      localStorage.setItem('Todo', JSON.stringify(lists));
      document.getElementById('newTodo').value = '';
      showText();
      errorMsg.style.display = 'none'; // ซ่อนข้อความเมื่อกรอกค่าครบถ้วนแล้ว
  } else {
      inputTodo.style.border = '2px solid red';
      errorMsg.style.display = 'inline'; // แสดงข้อความเมื่อยังไม่กรอกค่า
  }
}
  
  function deleteTodo(index) {
    let lists = JSON.parse(localStorage.getItem('Todo'));
    if (lists && lists.length > index) {
      lists.splice(index, 1);
      localStorage.setItem('Todo', JSON.stringify(lists));
      showText();
    }
  }
  
  function toggleTodo(index) {
    let lists = JSON.parse(localStorage.getItem('Todo'));
    if (lists && lists.length > index) {
      lists[index].done = !lists[index].done;
      localStorage.setItem('Todo', JSON.stringify(lists));
      showText();
    }
  }
  function deleteAllTodo() {
    localStorage.removeItem('Todo');
    showText();
  }
  
  // Call showText() initially to load the Todo list
  showText();




  // .............................................. เลืิอกตามที่
  // เพิ่มฟังก์ชันเพื่อลบ Todo ที่ถูกเลือก (ตาม checkbox)
function deleteCheckedTodos() {
  let lists = JSON.parse(localStorage.getItem('Todo'));

  if (lists && lists.length > 0) {
    // ใช้ for loop เพื่อหา Todo ที่ถูกเลือก
    for (let i = lists.length - 1; i >= 0; i--) {
      if (lists[i].done) {
        lists.splice(i, 1); // ลบ Todo ที่ถูกเลือกออกจากรายการ
      }
    }

    localStorage.setItem('Todo', JSON.stringify(lists));
    showText(); // แสดงรายการ Todo ใหม่
  }
}


// .................................................. เลือกทั้งหมด
function checkAllTodos() {
  let lists = JSON.parse(localStorage.getItem('Todo'));

  if (lists && lists.length > 0) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].done = true; // ตั้งค่า done เป็น true สำหรับทุก Todo
    }

    localStorage.setItem('Todo', JSON.stringify(lists));
    showText(); // แสดงรายการ Todo ใหม่
  }
}

// เพิ่มฟังก์ชันเพื่อยกเลิกเลือก (uncheck) ทุก checkbox
function uncheckAllTodos() {
  let lists = JSON.parse(localStorage.getItem('Todo'));

  if (lists && lists.length > 0) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].done = false; // ตั้งค่า done เป็น false สำหรับทุก Todo
    }

    localStorage.setItem('Todo', JSON.stringify(lists));
    showText(); // แสดงรายการ Todo ใหม่
  }
}
// .............................................
function toggleExpand(element) {
  element.classList.toggle('expanded');
}