
//function display20Flips (){

const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const outputElement = document.createElement('output')
const buttonDiv = document.createElement('button')

bodyElement.append(mainElement)
mainElement.append(outputElement)
    let f = 0
    for (let index = 0; index < 20; index++) {
       f = Math.floor(Math.random() * 2)
       outputElement.append(f)
    }
        


// }
// let coin = {
//     state: 0,
//     flip: function() {
//         }
        
//     },
    
//     toString: function() {
//         /* 2. Return the string "Heads" or "Tails", depending on whether
//         "this.state" is 0 or 1. */
//     },
//     toHTML: function() {
//         let image = document.createElement('img');
//         /* 3. Set the properties of this image element to show either face-up
//         or face-down, depending on whether this.state is 0 or 1.*/
//         return image;
//     }
// }
