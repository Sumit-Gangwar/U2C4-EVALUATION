// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",store);
var storearr=JSON.parse(localStorage.getItem("schedule")) || [];

function store(){
    event.preventDefault();
    var matchNumber=document.querySelector("#matchNum").value;
    var teamA=document.querySelector("#teamA").value;
    var teamB=document.querySelector("#teamB").value;
    var date=document.querySelector("#date").value;
    var venue=document.querySelector("#venue").value;
    // console.log(matchNumber)
    var storeobj={
        matchNumber:matchNumber,teamA:teamA,teamB:teamB,date:date,venue:venue
    };
    storearr.push(storeobj);
    localStorage.setItem("schedule",JSON.stringify(storearr));
}
