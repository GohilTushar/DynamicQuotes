let realData="";
let quoteData="";

const q=window.document.getElementById("quotes");
const a=window.document.getElementById("author");
const b=window.document.getElementById("btn");
const t=window.document.getElementById("tweet");

const doTweet =()=>{
    let windowTweet=`https://twitter.com/intent/tweet?text=${quoteData.text}`;
    window.open(windowTweet);
}

const getNewQuotes =()=>{
    let rnum=Math.floor(Math.random()*1643);
    // console.log(realData[rnum].author);
    quoteData=realData[rnum];
    q.innerText=`${quoteData.text}`;
    quoteData.author == null ? (a.innerText = "Unknown") : (a.innerText = `${quoteData.author}`);
    
};

const getQuotes = async()=>{
    const api="https://type.fit/api/quotes";
    try {
        let data= await fetch(api);
        realData=await data.json();
        console.log(realData.length);
        getNewQuotes();
    } catch (error) {
        
    }
};

getQuotes();
b.addEventListener("click",getNewQuotes);
t.addEventListener("click",doTweet);