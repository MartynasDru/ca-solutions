const tableElementBody = document.querySelector('#table tbody');
const formElement = document.getElementById('form');
const nameInputElement = document.getElementById('first-name-input');
const lastNameInputElement = document.getElementById('last-name-input');
const universityInputElement = document.getElementById('university-input');

formElement.addEventListener('submit', (e) => {
    const student = {
        name: nameInputElement.value,
        lastName: lastNameInputElement.value,
        university: universityInputElement.value
    };

    saveNewStudent(student);

    e.preventDefault();
});

/// FETCH BELOW
fetch('http://localhost:3000/students')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach((student) => {
            const studentRowElement = createStudentRowElement({
                id: student.id,
                name: student.name,
                lastName: student.lastName,
                university: student.university
            });
            tableElementBody.append(studentRowElement);
        })
    })

function createStudentRowElement(student) {
    const tableRowElement = document.createElement('tr');
    
    Object.values(student).forEach((info) => {
        const tdElement = createTdElement(info);
        tableRowElement.append(tdElement);
    });

    const tdElement = createTdElement('Remove');
    tableRowElement.append(tdElement);

    tdElement.addEventListener('click', () => {
        deleteStudent(student.id);
    });

    return tableRowElement;
}

function createTdElement(text) {
    const tdElement = document.createElement('td');
    tdElement.innerText = text;
    return tdElement;
}

function saveNewStudent(student) {
    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(student)
    });
}

function deleteStudent(id) {
    fetch(`http://localhost:3000/students/${id}`, {
        method: 'DELETE'
    });
}