// JavaScript to update the displayed values when the sliders change
const latitudeSlider = document.getElementById('slider-latitude');
const latitudeValue = document.getElementById('latitudeValue');
const longitudeslider = document.getElementById('slider-longitude');
const longitudeValue = document.getElementById('longitudeValue');

latitudeSlider.addEventListener('input', function () {
  latitudeValue.textContent = latitudeSlider.value;
});

longitudeslider.addEventListener('input', function () {
  longitudeValue.textContent = longitudeslider.value;
});