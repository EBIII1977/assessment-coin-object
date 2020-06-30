

const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const outputElement = document.createElement('output')
const buttonDiv = document.createElement('button')

bodyElement.append(mainElement)
mainElement.append(outputElement)

let f = 0

    function display20Flips (){
        f = Math.floor(Math.random() * 2)
        return(f)   
    }


        for (let index = 0; index < 20; index++) {
            display20Flips()
            display20Images()
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
