const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifty Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931, 
    cost: 40948900, 
    owner: "Empire State Realty Trust", 
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb, & Harmon" 
}
console.log(`Stories is ${empireStateBuilding.stories}`)
console.log(`Height is ${empireStateBuilding.height}`)
console.log(`Address is ${empireStateBuilding.address}`)
console.log(`Square Feet is ${empireStateBuilding.squarefeet}`)
console.log(`Construction Date was ${empireStateBuilding.constructionDate}`)
console.log(`Cost was ${empireStateBuilding["cost"]}`)
console.log(`Owner is ${empireStateBuilding["owner"]}`)
console.log(`East West Length is ${empireStateBuilding["eastWestLength"]}`)
console.log(`North South Length is ${empireStateBuilding["northSouthLength"]}`)
console.log(`Architect is ${empireStateBuilding["architect"]}`)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(`Part-time instructors are ${nashvilleSoftwareSchool.instructors.partTime[0]} and ${nashvilleSoftwareSchool.instructors.partTime[1]}`)
console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])