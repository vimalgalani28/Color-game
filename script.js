numSquares = 6
var colors = generateRandomColor(numSquares)
var squares = document.querySelectorAll(".square") //selecting squares
var pickedColor = pickColor() //selecting correct color
var colorDisplay = document.getElementById("colorDisplay")
var result = document.querySelector("#result")
var h1 = document.querySelector("h1")
colorDisplay.textContent = pickedColor          // Modifing h1 to show winning color
var resetButton = document.querySelector("#resetButton")
var modeButtons = document.querySelectorAll(".mode")
for(var i = 0 ; i < squares.length ; i++)
{
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function (){
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor){
            result.textContent = "Correct"
            changeColor(clickedColor)
            h1.style.background = clickedColor
            resetButton.textContent = "Play Again?"
        }else {
            this.style.backgroundColor = "#232323"
            result.textContent = "Try again"
        }
    })
}
function changeColor(color)
{
    for(var i =0 ; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color 
    }
}
function pickColor()
{
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
function generateRandomColor(num){
    arr =[]
    for(var i =0 ; i < num  ; i++){
        arr.push(randomColor())
    }
    return arr
}
function randomColor(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    return "rgb(" + r +", " +g + ", "+ b+ ")"
}
resetButton.addEventListener("click" , function(){
    reset()
})
for( var i = 0 ; i<modeButtons.length ; i++)
{
    modeButtons[i].addEventListener("click" , function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected")
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
        reset()

    })
}
function reset(){
    colors = generateRandomColor(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0 ; i < squares.length ; i++)
    {
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        }
        else{
            squares[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colors"
    result.textContent = ""
}