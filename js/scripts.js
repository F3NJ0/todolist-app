function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  // 1. Add item to list when clicking on "Add" button
  if (inputValue === ''){
    alert("Please write something in the field.");
  } else {
    $('#list').append(li);
  }


  // 2. Strike through items when user clicks on it
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("click", crossOut);

  // 3.a) Adding delete button to list items
  let deleteButton = $('<button>X</button>');
  deleteButton.addClass("crossOutButton");
  li.append(deleteButton);

  // 3.b) Delete items from List when clicking on deleteButton
  function deleteListItem() {
      li.addClass("delete");
  }
  deleteButton.on("click", deleteListItem);

  // 4. Change order of items in the List
  $('#list').sortable();
}
