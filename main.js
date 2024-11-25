import customers from "/customers.js"; 


const customerList = document.getElementsByClassName("customer-table_body_body")[0];

const keys = Object.keys(customers[0]);
console.log(keys);
for (let i = 0; i < customers.length; i++) {
    const rowItem = document.createElement("tr");
    rowItem.classList.add("customer-table_body_body_row");
    customerList.appendChild(rowItem);
        keys.forEach(key => {
        const buttonValue =  `${customers[i].status}`==="Active"?"customer-table_body_body_row-button_active":"customer-table_body_body_row-button_inactive";
        const listItem = document.createElement("td");
        const extraItem = key==="status"?document.createElement("button"):null;
        listItem.classList.add( key==="status"?buttonValue:"customer-table_body_body_row-item");
        if(extraItem!==null){
            extraItem.classList.add(buttonValue);
            extraItem.textContent = `${customers[i][`status`]}`;
            listItem.appendChild(extraItem);
            rowItem.appendChild(listItem);
            return;
        }
        listItem.textContent = `${customers[i][`${key}`]}`;
        rowItem.appendChild(listItem);

      });
    
}

