const rateStateBox = document.getElementById('state-rating');
const thankStateBox = document.getElementById('state-thank');
const submitButton = document.getElementById('btn-submit');
const ratingField = document.getElementById('field-rating');
const btnRates = document.querySelectorAll('.btn-rate');

let userRating = 0;

submitButton.addEventListener('click', function() {
  if (userRating === 0) {
    alert('Please input your rating');
    return;
  }
  ratingField.textContent = userRating;
  rateStateBox.setAttribute('hidden', '');
  thankStateBox.removeAttribute('hidden');
});

for (const btnRate of btnRates) {
  btnRate.addEventListener('click', function() {
    userRating = btnRate.textContent;
    clearSelection();
    btnRate.classList.add('rate-selected');
  });
}

function clearSelection() {
  const selectedBtnRate = document.querySelector('.rate-selected');
  if (selectedBtnRate) selectedBtnRate.classList.remove('rate-selected');
}
