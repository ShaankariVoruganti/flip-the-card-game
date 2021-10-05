let cards=[
{
    image:"https://www.bhagwanbhagat.com/wp-content/uploads/2021/02/Chhota-Bheem-HD-Picture-HD-Download-for-Mobile.jpg",
    value:1,
    status:"closed"
},
{
    image:"https://www.bhagwanbhagat.com/wp-content/uploads/2021/02/Chhota-Bheem-HD-Picture-HD-Download-for-Mobile.jpg",
    value:1,
    status:"closed"
},
{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJo8C8TDJF9gt-5UJzfmuAaB_215yo3mpIQ&usqp=CAU",
    value:2,
    status:"closed"
},
{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJo8C8TDJF9gt-5UJzfmuAaB_215yo3mpIQ&usqp=CAU",
    value:2,
    status:"closed"
},
{
    image:"https://img.favpng.com/22/20/24/shinnosuke-nohara-video-crayon-shin-chan-nene-sakurada-television-show-png-favpng-JG6rMUZ83zJ9W5fY9N8Aj8qrt.jpg",
    value:3,
    status:"closed"
},
{
    image:"https://img.favpng.com/22/20/24/shinnosuke-nohara-video-crayon-shin-chan-nene-sakurada-television-show-png-favpng-JG6rMUZ83zJ9W5fY9N8Aj8qrt.jpg",
    value:3,
    status:"closed"
},
{
    image:"https://cdn140.picsart.com/327146900047201.jpg",
    value:4,
    status:"closed"
},
{
    image:"https://cdn140.picsart.com/327146900047201.jpg",
    value:4,
    status:"closed"
},
{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHe7LMdRjfPfWQDyuX9Ex6wKJiMDSWnXviA&usqp=CAU",    value:5,
    status:"closed"
},
{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHe7LMdRjfPfWQDyuX9Ex6wKJiMDSWnXviA&usqp=CAU",    value:5,
    status:"closed"
}
]
let temp;
for(let i=cards.length-1;i>=0;i--)
{
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}
let cardscopy=cards;
console.log(cards);
function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
           <div class="card" style="background-image:url('${card.image}')">
           <div class="overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
           `
    });
    document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);
let val1=null,val2=null;
let cardcount=1;
let score=0;
function openCard(index){
    cards[index].status="opened";
    if(cardcount===1){
        val1=cards[index].value;
        cardcount++;    }
    else if(cardcount===2){
        val2=cards[index].value;
        if(val1===val2){
             score++;
            document.getElementById("score").innerText=score;
            
            val1=null;
            val2=null;
            cardcount=1;
            if(score===5){
                alert("you won the game");
            }
        }

        else{
           setTimeout( function ( ) { alert( "gameover" ); },1);
           location.reload();
        }      
        
    }    
    displayCards(cards);

}
