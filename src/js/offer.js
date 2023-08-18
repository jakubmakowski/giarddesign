const toggleOffer = document.getElementById('toggleOffer');
const dropdownList = document.getElementById('dropdownList');

const textProjects = document.getElementById('textProjects');
const hiddenProjects = document.getElementById('hiddenProjects');
const textVisualizations = document.getElementById('textVisualizations');
const hiddenVisualizations = document.getElementById('hiddenVisualizations');
const textRealizations = document.getElementById('textRealizations');
const hiddenRealizations = document.getElementById('hiddenRealizations');

  let isDropdownVisible = false;

  toggleOffer.addEventListener('click', () => {
    if (isDropdownVisible) {
      dropdownList.classList.add('hidden');
      isDropdownVisible = false;
    } else {
      dropdownList.classList.remove('hidden');
      isDropdownVisible = true;
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!dropdownList.contains(target) && target !== toggleOffer) {
      dropdownList.classList.add('hidden');
      isDropdownVisible = false;
    }
});

textProjects.addEventListener('click', () => {
    hiddenProjects.classList.toggle('max-h-0');
    hiddenProjects.classList.toggle('max-h-96');
});

textVisualizations.addEventListener('click', () => {
    hiddenVisualizations.classList.toggle('max-h-0');
    hiddenVisualizations.classList.toggle('max-h-96');
});

textRealizations.addEventListener('click', () => {
    hiddenRealizations.classList.toggle('max-h-0');
    hiddenRealizations.classList.toggle('max-h-96');
});