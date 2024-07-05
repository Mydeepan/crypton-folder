const Transactions = [
    {
        id:1,
        name:"Aokiji",
        money:"+$13.00",
        res:"Rececive"
    },
    {
        id:3,
        name:"Kizaru",
        money:"-$9.00",
        res:"Outgoing"
    },
    {
        id:3,
        name:"Akainu",
        money:"+$20.00",
        res:"Rececive"
    },

]
const Transaction =Transactions.map(item => item);
console.log(Transaction);
const nameTag = document.querySelectorAll(".subBox >.name h3");
const moneyTag= document.querySelectorAll(".subBox2 >.money");
const ParaTag= document.querySelectorAll(".subBox2 >.res");
const DateTag =document.querySelectorAll(".subBox > .name .date")
console.log(moneyTag);
for (let i = 0; i < nameTag.length; i++) {
    const element = nameTag[i];
    element.innerHTML=Transactions[i].name
}
for (let i = 0; i < moneyTag.length; i++) {
    const element = moneyTag[i];
    element.innerHTML=Transaction[i].money
}
for (let i = 0; i < ParaTag.length; i++) {
    const element = ParaTag[i];
    element.innerHTML=Transaction[i].res
}

const addZero = (e) =>{
    return e <10 ? "0"+e: e
}

const time =(e)=>{
    return e > 12 ? e-12 :e
}

const addAMPM =(e)=>{
    return e > 12 ? "PM" : "AM";
}
const months=["Jan","feb",'Mar',"apirl","may","jun","jluy",'aug',"sep","oct","nov","dec"];

const date = new Date();
const month=date.getMonth()-1
const CurrentMonth = `${addZero(date.getDate())} ${months[month]} ${date.getFullYear()} . ${addZero(time(date.getHours()))}:${addZero(date.getMinutes()) } ${addAMPM(date.getHours())}`;

for (let i = 0; i <DateTag.length; i++) {
    const element =DateTag[i];
    element.innerHTML=CurrentMonth;
}

console.log()