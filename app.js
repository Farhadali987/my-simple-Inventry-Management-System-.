
let tableData = document.getElementById('data');
let td1 = document.createElement('td')
let td2 = document.createElement('td')

let td3 = document.createElement('td')



td1.textContent= localStorage.getItem('Product Name')

td2.textContent = localStorage.getItem('Quantaties')

td3.textContent = localStorage.getItem('Total Price')

  tableData.appendChild(td1)
  tableData.appendChild(td2)
  tableData.appendChild(td3)




  let form = document.getElementById('form');

 form.addEventListener('submit',(e)=>{

    let data1 = document.getElementById('Name').value;
    let data2 = document.getElementById('q').value;
    let data3 = document.getElementById('price').value;
     if(data1=='' || data2=='' || data3==''){
        alert('Please Fill Out All Fields');
        return false;
    }if(isNaN(data1)){
        localStorage.setItem('Product Name', data1);

    }else{
        alert('Numeric data is not valid');
        return false;
    }
    if(isNaN(data2) || isNaN(data3)){
        alert('please only enter numberic data');
        return false;
    }else{

        localStorage.setItem('Quantaties', data2)
        localStorage.setItem('Total Price', data3*data2)





         }
 })
