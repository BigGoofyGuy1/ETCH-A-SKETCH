const container = document.getElementById('container')
let rows = document.getElementsByClassName('gridRow')
let columns = document.getElementsByClassName('gridColumn')
let start = false

let buttonContainer = document.createElement('div')
buttonContainer.classList = ('buttonContainer')
container.appendChild(buttonContainer)

let gridContainer = document.createElement('div')
gridContainer.classList = ('gridContainer')
container.appendChild(gridContainer)

let startButton = document.createElement('button')
startButton.textContent = 'Start'
startButton.addEventListener('click', function() {
    layout();
})

buttonContainer.appendChild(startButton)


let resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.addEventListener('click', function(){
    location.reload();
})

buttonContainer.appendChild(resetButton)

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function layout(){
    if (start === false) {
        let userColumns = prompt('How many Rows? 5-100')
        if (userColumns >= 5 && userColumns <= 100) {
            makeRows(userColumns)
            let userRows = prompt('How many Columns? 5-100')
            if (userRows >= 5 && userRows <= 100) {
                makeColumns(userRows)
                start = true
            } else {
                alert('Invalid selection. Please try again.')
            }
        }   else {
            alert('Invalid selection. Please try again.')
        }     
    }
}

function makeRows (numRows) {
    for (r =0; r<numRows; r++) {
        let row = document.createElement('div')
        gridContainer.appendChild(row).className= 'gridRow'
    }
}

function makeColumns(cellNum) {
    for (i =0; i < rows.length; i++){
        for(c = 0; c < cellNum; c++) {
            let newCell = document.createElement('div')
            newCell.setAttribute('id', 'cell')
            newCell.addEventListener('mouseover', function(){
                newCell.style.backgroundColor = random_rgba();
                
            })
            rows[c].appendChild(newCell).className=('cell')      
        }
    }
}