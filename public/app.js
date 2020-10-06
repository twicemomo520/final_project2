const studentsTable = document.querySelector('#stu-table');
const form = document.querySelector("#add-students-form");
// create element & render 
function renderStudents(doc){
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().name;
    td2.textContent = doc.data().student_ID;
    td3.textContent = doc.data().object;
    td4.textContent = doc.data().object_ID;
    td5.textContent = doc.data().day;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    
    // delete 
    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('CSLAB').doc(id).delete();
    });
    //

    studentsTable.appendChild(tr);
}

// getting data 
db.collection('CSLAB').get().then(data => {
    data.docs.forEach(doc => {
        renderStudents(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('CSLAB').doc(form.name.value + form.object_ID.value).set({
        name: form.name.value,
        student_ID: form.student_ID.value,
        object: form.object.value,
        object_ID: form.object_ID.value,
        day: form.day.value
    });
    form.name.value = '';
    form.student_ID.value = '';
    form.object.value = '';
    form.obeject_ID.value = '';
    form.day.value = '';
});
