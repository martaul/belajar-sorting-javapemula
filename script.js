person =[
    {
        "nama" : "rani",
        "usia" : 19,
        "wanita" : true
    },
    {
        "nama" : "ranto",
        "usia" : 20,
        "wanita" : false
    },
    {
        "nama" : "lili",
        "usia" : 9,
        "wanita" : true
    },
    {
        "nama" : "budi",
        "usia" : 40,
        "wanita" : false
    }
]

function filtergender(person){
    var hasil = [];
    for (let i = 0; i < person.length; i++) {
        if (person[i].wanita == true) {
            hasil.push(person[i]);
        }
        
    }
    return hasil;

}

//pake bubble sorting
var cek = filtergender(person);
console.log(cek);

function sortusiaterkecil(person){
    var result= [...person];
    for (let i = 0; i < person.length; i++) {
        for (let j = 0; j < person.length-1; j++) {
            if (result[j].usia > result[j + 1].usia) {     
                temp = result[j]                          
                result[j] = result[j + 1]                     
                result[j + 1] = temp                         
            }
        }
        
    }
    return result;
    
}

var cek = sortusiaterkecil(person);
console.log(cek);



// pake insertion sort
// person.sort(sortusiaterbesar);
function sortusiaterbesar(person){
    // return b.usia - a.usia;
    var hadiah= [...person];
    for (let i = 0; i < person.length; i++) {
        for (let j = 1; j < person.length-1; j++) {
            for (let k = j; k >0 ; k--) {
                if (hadiah[k - 1].usia < hadiah[k].usia) {     
                    temp = hadiah[k - 1]                          
                    hadiah[k - 1] = hadiah[k]                     
                    hadiah[k] = temp                         
                }   
            }
        }
        
    }
    return hadiah;

}
var cek = sortusiaterbesar(person);
console.log(cek);
// console.log(person);

