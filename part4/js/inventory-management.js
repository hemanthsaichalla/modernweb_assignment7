/*eslint-env browser*/
var inventory = [
    [4824,"Shirt",10,"$15.99"],
    [6343,"Jeans",22,"$39.99"],
    [3223,"Socks",36,"$9.99"],
    [2233,"Hat",12,"$14.99"],
    [9382,"Jacket",5,"$49.99"]
  ];
  
  window.console.log("The Product Inventory Management System ");
  
  function compareInventoryItems (item1, item2) {
    if(item1[0] < item2[0])
      return -1;
    else if(item1[0] > item2[0])
      return 1;
    else 
      return 0;
  }
  
  function displayInventory() {
    inventory.sort(compareInventoryItems);
    inventory.forEach(function(item) {
      window.console.log("Serial No: " + item[0] + " Name: " + item[1] + " Quantity: " + item[2] + " Price: " + item[3]);
    });
  }
  
  function updateInventory() {
    var input_sno = window.prompt("Enter the product serial number");
    var sno = Number(input_sno);
    if(isNaN(sno) || sno === null) {
      window.alert("Invalid serial number")
      return;
    }
    var index = inventory.findIndex(function(inventoryItem) {
      return inventoryItem[0] === sno;
    })
    if(index === -1) {
      window.alert("Entered product is not found in the inventory");
      return;
    }
    var input_quantity = window.prompt("Enter the product's new quantity");
    var quantity = Number(input_quantity);
    if(isNaN(quantity) || quantity === null) {
      window.alert("Invalid quantity");
      return;
    }
    inventory[index][2] = quantity;
    window.console.log("Succesfully updated the inventory item");
  }
  
  while(true) {
    window.console.log("COMMAND MENU");
    window.console.log("1. View all products");
    window.console.log("2. Update an existing product");
    window.console.log("3. Exit the program");
    var input_command = window.prompt("Enter your command");
    var command = Number(input_command);
    if(isNaN(command) || command === null || !(command >= 1 || command <= 3)) {
      window.alert("Invalid command. Try again!!");
      continue;
    }
    if(command == 1) displayInventory();
    else if(command == 2)  updateInventory();
    else break;
  }

