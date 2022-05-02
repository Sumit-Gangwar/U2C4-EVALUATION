// write js code here corresponding to matches.html

var storearr=JSON.parse(localStorage.getItem("schedule"));

showData(storearr);


function showData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
        var tr=document.createElement("tr");
        var mNum=document.createElement("td");
        var tA=document.createElement("td");
        var tB=document.createElement("td");
        var date=document.createElement("td");
        var venue=document.createElement("td");
        var fav=document.createElement("h6");
        var tbody=document.querySelector("tbody");
        tbody.append(tr);
        tr.appendChild(mNum);
        tr.appendChild(tA);
        tr.appendChild(tB);
        tr.appendChild(date);
        tr.appendChild(venue);
        tr.appendChild(fav);
        mNum.innerText=elem.matchNumber;
        tA.innerText=elem.teamA;
        tB.innerText=elem.teamB;
        date.innerText=elem.date;
        venue.innerText=elem.venue;
        fav.innerText="Add to Favourites";
        fav.style.color="green";

        fav.addEventListener("click",function(){
            favdata(elem);
        })
    })
}
var favarr=JSON.parse(localStorage.getItem("favourites")) || [];
function favdata(elem){
    favarr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favarr));
}
document.querySelector("#filterVenue").addEventListener("change",showFilter);
function showFilter(){
    var dot=document.querySelector("#filterVenue").value;
        var k= storearr.filter(function(element){
            if(dot=="none"){
                return element;
            }
            else{
                return element.venue==dot; 
            }   
        });
        showData(k);
    }