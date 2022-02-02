function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  // add item to list when clicking on "Add" button
  if (inputValue === ''){
    alert("Please write something in the field.");
  } else {
    $('#list').append(li);
  }


  // Strike through items when user clicks on it
  function crossOut() {
    li.addClass("strike");
  }
  li.on("click", crossOut);

  // Adding delete button to list items
  let deleteButton = $('<button>X</button>');
  deleteButton.addClass("crossOutButton");
  li.append(deleteButton);

  // Delete items from List when clicking on deleteButton
  function deleteListItem() {
      li.addClass("delete");
  }
  deleteButton.on("click", deleteListItem);
}
