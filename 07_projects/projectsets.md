# Projects related to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("pratap")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event)
    console.log(event.target)
    switch (event.target.id) {
      case 'grey':
      case 'white':
      case 'blue':
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      default:
        console.log('Color not recognized');
    }    
  })
});
```
## project 2
```javascript
const form = document.querySelector('form');

// This use case will give us empty values
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else {
    const bmi = (weight/ ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
});
```
