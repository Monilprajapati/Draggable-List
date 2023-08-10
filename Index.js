const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Adding dragging class to item after a delay
    setTimeout(() => item.classList.add("drag"), 0);
  });
  // Removing dragging class from item on dragend event
  item.addEventListener("dragend", () => item.classList.remove("drag"));
});

const initItemList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".drag");
  // Getting all items except currently dragging and making array of them
  let siblings = [...itemList.querySelectorAll(".item:not(.drag)")];

  // Finding the sibling after which the dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Inserting the dragging item before the found sibling
  itemList.insertBefore(draggingItem, nextSibling);
};

itemList.addEventListener("dragover", initItemList);
itemList.addEventListener("dragenter", (e) => e.preventDefault());
