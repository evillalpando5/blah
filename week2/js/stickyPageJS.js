// let myVar = "happy"

function orderThis( id ){
    let res = document.getElementById('results')
    res.innerHTML = `id=${id}`;
    let x="BlackJack";

    if( x === "BlackJack"){
        console.log(x)
    }

}
function orderThat(id){
    let myVar = "Beanhead"
    // myVar += "4";
    // myVar = 22;
    // myVar = 3.14;
    // myVar += 1;

    let res = document.getElementById('results');
    res.innerHTML = `id=${id} myVar: ${myVar}`;

}
function orderThatV2(id ){
    const myList = ['planes', 'train', 'automobiles','classic cars']
    myList.push('bikes')
    let oStr = "";
    let c = '';
    for (let i = 0; i< myList.length; i++){
        oStr += c + myList[i];
        c = ', '
        // outStr += `${c} `;
    }
    console.log("FLAG1: " + oStr);
    console.log(oStr, id);
    console.log(myList.map (i => "item: " + i ));
    let newList = myList.map(i => "item:" + i);
    console.log("FLAG2: " + newList)
    console.log("--------")
    console.log(myList)
    console.log(newList)
}
function orderThatV3(id){
    let myString = 'Applese';
    myString ='Bananas'
    let myNum = 4;
    let myList = [];
    let myOb ={}
    let student = { //Object literal let name = {}
        name: 'Jack',
        age: 22,
        gpa: 3.55,
        courses: ['CSC1700', 'CSC2200']
    }
    let studentV2 = [ //array with  3 object literals as the items let name = [{},{},{}]
        {
            name: 'Jack',
            age: 22,
            gpa: 3.55,
            courses: ['CSC1700', 'CSC2200']
        },
         {
            name: 'Jill',
            age: 21,
            gpa: 3.95,
            courses: ['CSC1700', 'CSC2200','CSC3700']
        },
        {
            name:'Jane',
            age: 23,
            gpa: 3.75,
            courses: ['CSC4500']
        }
    ]
    console.log(`name: ${student.name}`)
    console.log(`age: ${student.age}`)
    console.log(`course1: ${student.courses[0]}`)
    console.log(`numCourses: ${student.courses.length}`)
    console.log("____example 2_____")
    console.log(`name: ${studentV2[1].name}`)
    console.log(`age: ${studentV2[1].age}`)
    console.log(`course1: ${studentV2[1].courses[0]}`)
    console.log(`num of students: ${studentV2.length}`)
    console.log(`num of courses: ${studentV2[1].courses.length}`)
    let count= 0
    for(let i = 0 ; i < studentV2.length; i++){
        alert(`Name: ${studentV2[i].name}`);
        console.log(`Courses taken: ${studentV2[i].courses.length}`)
        count += studentV2[i].courses.length;
    }
    console.log(count)
    orderThatV4()
}
function orderThatV4(){
    let myVar;
    let myVar2 = "";
    let myVar3 = null;
    console.log(myVar)
    console.log(myVar2)
    console.log(myVar3)
    if (myVar3 == null) {
        alert("null")
    }
}

//