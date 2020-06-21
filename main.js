const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item

function selectItem(e) {
  //remove border bottom and show class
  removeBorder();
  removeShow();

  //adds border bottom to the element wich clicked
  this.classList.add('tab-border');
  //Grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add('show');
    }


function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
};

function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'));
};

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
