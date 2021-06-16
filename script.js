function onDragStart(event) {
    event
        .dataTransfer
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
    return
}


var arrRect = [];
var arrSquare = [];
var arrCircle = [];
function onDrop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    const id = offset[2];
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    var cln;
    if (id === 'rectangle' || id === 'square' || id === 'circle') {
        cln = draggableElement.cloneNode(true);
    } else {
        cln = draggableElement;
    }
    if (id === 'rectangle') {
        const last_element = arrRect[arrRect.length - 1];
        let rectangle;
        if (last_element) {
            const indexOfFirst = last_element.idNew.indexOf('_');
            let num;
            if (indexOfFirst > -1) {
                num = Number(last_element.idNew.substring(indexOfFirst + 1, last_element.idNew.length)) +1
            }
            rectangle = {
                x: event.clientX,
                y: event.clientY,
                idNew: `rectangle_${num}`
            }
            console.log(rectangle)
        } else {
            rectangle = {
                x: event.clientX,
                y: event.clientY,
                idNew: `rectangle_1`
            }
        }
        cln.id = rectangle.idNew;
        arrRect.push(rectangle);
        console.log(arrRect);
    } else if (id === 'square') {
        const last_element = arrSquare[arrSquare.length-1];
        let square ;
        if(last_element){
            const indexOfFirst = last_element.idNew.indexOf('_');
            let num ;
            if(indexOfFirst>-1){
                num = Number(last_element.idNew.substring(indexOfFirst + 1, last_element.idNew.length)) +1 
            }
            square = {
                x: event.clientX,
                y: event.clientY,
                idNew: `square_${num}`
            }
        } else{
            square = {
                x: event.clientX,
                y: event.clientY,
                idNew: `square_1`
            }
        }
        cln.id = square.idNew;
        arrSquare.push(square);
    } else if (id === 'circle') {
        let num = arrCircle.length + 1;
        const last_element = arrCircle[arrCircle.length-1];
        let circle;
        if(last_element){
            const indexOfFirst = last_element.idNew.indexOf('_');
            let num ;
            if(indexOfFirst>-1){
                num = Number(last_element.idNew.substring(indexOfFirst + 1, last_element.idNew.length)) +1 
            }
            circle = {
                x: event.clientX,
                y: event.clientY,
                idNew: `circle_${num}`
            }
        }else{
            circle = {
                x: event.clientX,
                y: event.clientY,
                idNew: `circle_${num}`
            }
        }
        cln.id = circle.idNew;
        arrCircle.push(circle);
    } 
    const indexOfFirst = id.indexOf('_');
    if(indexOfFirst > -1){
        const subpart = id.substring(0,indexOfFirst);
        if(subpart === 'rectangle'){
            for(var i = 0 ;i < arrRect.length ;i++){
                const idChange = arrRect[i].idNew;
                if(idChange === id){
                    arrRect[i].x = event.clientX
                    arrRect[i].y = event.clientY
                    break;
                }
            }
        }else if(subpart === 'square'){
            console.log('sqaure')
        }else if(subpart === 'circle'){
            console.log('circule')
        }
    }
    dropzone.appendChild(cln);
    if (id === 'rectangle' || id === 'square' || id === 'circle') {
        cln.style.left = (event.clientX + parseInt(offset[0], 10) - 360) + 'px';
    } else {
        cln.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    }
    cln.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    event
        .dataTransfer
        .clearData()
}

function myFunction(event) {
    event.preventDefault();
    const id = event.target.id || event.currentTarget.id || event.srcElement.id;
    const element = document.getElementById(id);
    if (id === 'rectangle' || id === 'square' || id === 'circle') {
        event.preventDefault();
    } else {
        element.remove();
    }
}