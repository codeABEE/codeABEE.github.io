
let questionBank = [
    {
        questionTitle:"1. What is SafeMoon?",
        questionBody:"SafeMoon is one of the newest and fast growing cryptocurrencies that is taking over the coin world. SafeMoon is an altcoin: a blockchain-based digital currency broadly similar to Bitcoin.",
        id:1,
    },
    {
        questionTitle:"2. What Exchanges is SafeMoon on?",
        questionBody:"SafeMoon is currently trading on four exchanges: + <b>PancakeSwap</b>,<b> BitMart</b>,<b> Whitebit</b>, and <b> Gate.io</b>. <br> PancakeSwap, however, is the most popular platform for buying SafeMoon.",
        id:2,
    },
    {
        questionTitle:"3. Where can I buy SafeMoon?",
        questionBody:"You can buy safemoon from TRUST WALLET using Pancake Swap -- <br> Users can buy SafeMoon by setting up a crypto wallet on the Binance Chain Network and add Binance (BNB) coins to your account. From here, users can essentially swap BNB for SafeMoon tokens using Trust Wallet.",
        id:3,
    },
    {
        questionTitle:"4. What is PancakeSwap?",
        questionBody:"PancakeSwap is a decentralized exchange built on Binance Smart Chain, PancakeSwap enables users to swap between cryptocurrency assets by tapping into user-generated liquidity pools which is what basically enables you to buy SafeMoon.",
        id:4,
    },
    {
        questionTitle:"5. What is Slippage on PancakeSwap?",
        questionBody:"Slippage is 11-13% -- Set it to <b>12%</b> to buy safemoon via PancakeSwap using Trust Wallet.",
        id:5,
    },
    {
        questionTitle:"6. Who is the CEO of SafeMoon?",
        questionBody:"John Karony - Capt Hodl -- <a href='https://twitter.com/CptHodl?s=20' target='blank' class = 'twitterLink'><b>Follow him on Twitter</b> </a>",
        id:6,
    },

    {
        questionTitle:"7. When was the SafeMoon protocol launched?",
        questionBody:"SafeMoon was launched in March, 2021",
        id:7,
    },
    {
        questionTitle:"8. What is TRUST WALLET?",
        questionBody:"TRUST WALLET is a safe place to store all  crypto-currencies including SafeMoon. Trust Wallet gives you a simple mobile application for managing your tokens and coins and allows you to be in full control of your private keys at the same time It's safe and free from hacker's attack. <a href = 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp' target: 'blank'>Get is for Andriod and iOS Here</a>",
        id:8,
    },
    {
        questionTitle:"9. Were can I get reliable information about SafeMoon?",
        questionBody:'You can find reliable veriafiable info at SafeMoon website - ' + "<a href='https://safemoon.net/' target:'blank' class = 'siteLink'>Click Here to Learn More</a>",
        id:9,
    },
    {
        questionTitle:"10. What is SAFEMOON Roadmap for 2021?",
        questionBody: "Find out about SAFEMOON roadmap in 2021 on their webiste <a href = 'https://safemoon.net/' >HERE.</a>",
       
        id:10,
    },
    {
        questionTitle:"11. What is HODL?",
        questionBody: "It stand for <b>Hold On to Dear Life</b> -- HODL means to hold onto a coin even if it's crashing, hoping for a rise market in the future.",
        id:11,
    },
    {
        questionTitle:"12. Difference between BULLISH and BEARISH markets?",
        questionBody: "a BULLISH market means to rise or (moon in SafeMoon sense) -- coin rise, while a BEARISH market means to drop -- coin dip.",
        id:12,
    },
    {
        questionTitle:"13. Is there a penalty for not holding SafeMoon?",
        questionBody:"Yes. 10% tax for selling and 5% will be redistributed to all current holders.",
        id:13,
    },
    {
        questionTitle:"14. How can I help the SafeMoon community's growth?",
        questionBody:"Here's the link to the 5 daily taks to boost SAFEMOON:" +'<br>'+ 
        "<a href ='https://safemoon.net/' target:'blank'>1.safemoon.net</a>" + '<br>' +
        "<a href = 'https://www.youtube.com/results?search_query=Safemoon'target:'blank>2.Subscribe,like and follow on youtube.com</a>" + '<br>' +
        "<a href = 'https://coinmarketcap.com/currencies/safemoon/'target:'blank>3.coinmarket.com</a>" + '<br>' +
        "<a href = 'https://www.coingecko.com/en/coins/safemoon' target:'blank>4.coingecko.com</a>" + '<br>' +
        "<a href = 'https://twitter.com/hashtag/SAFEMOON'target:'blank>5.Follow,Like and Share Posts on twitter</a>"  ,
        
        id:14,
    },
    {questionTitle: "15. Should I sell or Hold SafeMoon?",
    questionBody: "Holding SafeMoon is the best line of action at the moment, plus selling it attarcts a penalty of 10% tax.",
    id: 15

}



    
];

let mainSection = document.querySelector(".main-section");

document.addEventListener("DOMContentLoaded",function(){
let populateScreen = questionBank.map(function(item){


    return `<article class="article">
    <div class="question-section">
        <div class="question-title">
            <h3>${item.questionTitle}</h3>
          
            <button class="question-toggle">
                <span class="plus-icon">
                    <i class="far fa-plus-square"></i>
                  </span>
                  <span class="minus-icon">
                    <i class="far fa-minus-square"></i>
                  </span>
            </button>
            
        </div>
        <div class="question-body">
            <p>${item.questionBody}
            </p>
        </div>
    </div>
</article>`
});

// dynamically populate screen once DOM is loaded

populateScreen = populateScreen.join(" ");
mainSection.innerHTML = populateScreen;

let toggleBtn = document.querySelectorAll(".question-toggle")
toggleBtn.forEach(function(btn){

    btn.addEventListener("click",function(e){
    let showText = ( e.currentTarget.parentElement.parentElement);
    showText.classList.toggle("show-text")
})

})

});
