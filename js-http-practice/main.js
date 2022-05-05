const tableElementBody = document.querySelector('#table tbody');

function createStudentRowElement(student) {
    const tableRowElement = document.createElement('tr');
    
    Object.values(student).forEach((info) => {
        const tdElement = createTdElement(info);
        tableRowElement.append(tdElement);
    });

    const tdElement = createTdElement('Remove');
    tableRowElement.append(tdElement);

    return tableRowElement;
}

function createTdElement(text) {
    const tdElement = document.createElement('td');
    tdElement.innerText = text;
    return tdElement;
}