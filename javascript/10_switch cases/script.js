const dayNumber=6;
switch(dayNumber)
{
    case 0:
        console.log('the day is sunday');
        break


    case 1:
        console.log('the day is monday');
        break


    case 2:
        console.log('the day is tuesday');
        break
        

    case 3:
        console.log('the day is wednesday');
        break


    case 4:
        console.log('the day is thursday');
        break
    case 5:
        console.log('the day is friday');
        break
    case 6:
        console.log('the day is saturday');
        break
     default:
            console.log('enter a valid daynumber');

}
console.log('program has ended');



const username= "suraj"
const userSalary =26000

console.log(`name:- ${username}`);
console.log(`salary:-${userSalary}`);
switch(true){
case (userSalary>=0 && userSalary<=25000):
{
    console.log(`${username} is a junior employee `);
    break
}
case  (userSalary>25000 && userSalary<=50000):
{
    console.log(`${username} is a senior employee `);
    console.log(`and he/she only earns ${userSalary} per month.`);
    break
}
case(userSalary>50000):
{
    console.log(`${username} is a manager `);
    console.log(`and he/she only earns ${userSalary} per month.`);
    break
}
1
default:{
    console.log('enter valid salary');
}
}
