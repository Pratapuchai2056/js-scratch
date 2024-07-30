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
