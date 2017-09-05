var array = []
var list = ''
var filename = 'ToDoList.org'
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
function arrayToTxt(array)
{
    list = array.toString();
    list = list.replace(/,/g,'\n');
return list
}
function download(filename, list) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(list));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
