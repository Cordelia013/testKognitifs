function(e) {
    e.preventDefault();
  
    if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
      // Close the clicked dropdown
      this.parentElement.classList.remove('dropdown-open');
      this.nextElementSibling.classList.remove('dropdown-active');
  
    } else {
      // Close the opend dropdown
      closeDropdown();
  
      // add the open and active class(Opening the DropDown)
      this.parentElement.classList.add('dropdown-open');
      this.nextElementSibling.classList.add('dropdown-active');
    =}
    