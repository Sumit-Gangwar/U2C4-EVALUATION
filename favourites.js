// write js code here corresponding to favourites.html

var favarr=JSON.parse(localStorage.getItem("favourites"));

showData(favarr);

function showData(data){
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
        fav.innerText="Remove as Favourite";
        fav.style.color="red";
        fav.addEventListener("click",removefav);
            
        function removefav(){
            fav.parentNode.remove();
            localStorage.removeItem("favourites");
        }
    })
}