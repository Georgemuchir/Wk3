// function (){
//     fetch ("http://localhost:3000/")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
function fetchData() {
    fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
