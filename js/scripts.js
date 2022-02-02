function newItem() {

  let input = $('#input');
  let list = $('#list');
  let inputValue = input.val();

  // add item to list when clicking on "Add" button
  let li = $('<li>' + inputValue + '</li>');
  list.append(li);

  // Strike through items when user clicks on it
  function crossOut() {
    li.on("click", function() {
      li.addClass("strike");
    });
  }

  // Adding delete button to list items
  let deleteButton = $('<button>X</button>');
  deleteButton.addClass("crossOutButton");
  li.append(deleteButton);

  // Delete items from List
  function deleteListItem() {

  }
}
