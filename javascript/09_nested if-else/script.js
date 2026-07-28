const username= prompt("enter your name") ||"suraj"
const userSalary = parseInt(prompt("enter your salary")) ||2000000000

console.log(`name:- ${username}`);
console.log(`salary:-${userSalary}`);

if (userSalary>=0 && userSalary<=25000)
{
    console.log(`${username} is a junior employee `);
    console.log(`and he/she only earns ${userSalary} per month.`);
}else if (userSalary>25000 && userSalary<=50000)
{
    console.log(`${username} is a senior employee `);
    console.log(`and he/she only earns ${userSalary} per month.`);
    if (userSalary<=30000){
        console.log('he has just got promotion');
    }
    else{
        console.log('he has been promoted many years ago');
    }
}else if (userSalary>50000)
{
    console.log(`${username} is a manager `);
    console.log(`and he/she only earns ${userSalary} per month.`);
}else{
    console.log('enter valid salary');
}
console.log('the program has ended');