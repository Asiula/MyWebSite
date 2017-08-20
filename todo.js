var array = []
var result = ''
function todoList()
{
    var item = document.getElementById('todoInput').value
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    array.push("* " + item)
    newItem.appendChild(text)
    document.getElementById('todoList').appendChild(newItem)
    document.getElementById('delInput').setAttribute("max",array.length)
    document.getElementById('todoInput').value = ''

}
function delList()
{
    var item = document.getElementById('delInput').value
    var  nan = isNaN(item)
    if(nan==false){
        var proto = item - 1
        var lista =  document.getElementById('todoList')
        lista.removeChild(lista.childNodes[proto])
        array.splice(proto,1)
        document.getElementById('delInput').setAttribute("max",array.length)
        document.getElementById('delInput').value = ''
    }
    else {alert("Input is not a number")}
}
function arrayToTxt()
{
    for(var i=0; i < array.length; i++)
    {
        result = result + array[i]
    }
}
