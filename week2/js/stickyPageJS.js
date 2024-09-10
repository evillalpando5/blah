let myVar = "happy"

function orderThis( id ){
    let res = document.getElementById('results')
    res.innerHTML = `id=${id}`;
    let x="BlackJack";

    if( x === "BlackJack"){
        console.log(x)
    }
}
function orderThat(id){
    let res = document.getElementById('results');
    res.innerHTML = `id=${id} myVar: ${myVar}`;

}
