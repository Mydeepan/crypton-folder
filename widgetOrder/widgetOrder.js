const datas =[
    {
        id:1,
        name:"Revenue",
        per:"10%",
        amount:2.047
    },
    {
        id:2,
        name:"Order",
        per:"20%",
        amount:365
    },
    {
        id:3,
        name:"Dine in",
        per:'10%',
        amount:200
    },
    {
        id:4,
        name:"Take away",
        per:'5%',
        amount:135
    }
]
const headTag = document.querySelectorAll('h2');
const per = document.querySelectorAll('.i-tag>p');
const amount =document.querySelectorAll('.img-tag > p')
const data=datas.map(item => item);


for (let i = 0; i < headTag.length; i++) {
    const element = headTag[i];
    element.innerHTML=data[i].name;
}
for (let i = 0; i < per.length; i++) {
    const element = per[i];
    element.innerHTML=` ${data[i].per}`
}
for (let i = 0; i < amount.length; i++) {
    const element = amount[i];
    element.innerHTML=` ${data[i].amount}`
}