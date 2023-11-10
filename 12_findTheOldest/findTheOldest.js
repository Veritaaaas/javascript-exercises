const findTheOldest = function(people) 
{

    for (let i = 0; i < people.length; i++)
    {
        if (people[i].yearOfDeath == undefined)
        {
            people[i].yearOfDeath = new Date().getFullYear();
        }

        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        people[i].age = age;
    }

    people.sort((a, b) => b.age - a.age);
    
    return people[0];
};

// Do not edit below this   
module.exports = findTheOldest;
