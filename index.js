
        function getAndUpdate(){
            console.log("updating list ...");
            tit = document.getElementById('title').value;
            desc = document.getElementById('Describe').value;

            if(localStorage.getItem('itemJson')== null){
                itemJsonArray = [];
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
            }
            else{
                itemJsonArrayStr = localStorage.getItem('itemJson');
                itemJsonArray = JSON.parse(itemJsonArrayStr);
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))

            }
            update();
        }
        function update(){
            if(localStorage.getItem('itemJson')== null){
                itemJsonArray = [];
                localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
            }
            else{
                itemJsonArrayStr = localStorage.getItem('itemJson');
                itemJsonArray = JSON.parse(itemJsonArrayStr);    

            }
          
            let tableBody = document.getElementById("tableBody");
            let str = "";
            itemJsonArray.forEach((element, index) => {
                str += `
                <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                
                <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
              </tr>
                `;
            });
            tableBody.innerHTML =str;
        }
        add= document.getElementById("add");
        add.addEventListener("click",getAndUpdate);
        update();
        function deleted(item){
            console.log(item)
            itemJsonArrayStr = localStorage.getItem('itemJson');
                itemJsonArray = JSON.parse(itemJsonArrayStr);
                itemJsonArray.splice(item,1);
                localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
                update();
        }
        function clearst(){
            if(confirm("do you really want to clear all list")){
            console.log("clearing...");
            localStorage.clear();
            update();
            }
        }