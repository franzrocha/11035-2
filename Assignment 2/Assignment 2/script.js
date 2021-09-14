let obj =[{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}]

var userchoice = parseInt(prompt("Choose a character\n 1. Male\n 2. Female\n 3. N/A\n 4. Height greater than 150"));

switch (userchoice)
{
    case 1:  
            alert("Male characters: " + maleChoice(...obj));
            break;
    case 2:  alert("Female characters: " + femaleChoice(...obj));
            break;
    case 3: alert("N/A characters:" + genderlessChoice(...obj));
            break;
    case 4: alert("Height greater than 150" + heightChoice(...obj));
            break;
    default: alert("error")
            break;
}


function maleChoice (...obj)   {
    let x = obj.filter (male => male.gender == "male");
    let y = x.map(male => male.name);   
    return(y); 
}

function femaleChoice (...obj)   {
        let x= obj.filter (female => female.gender == "female");
        let y = x.map(female => female.name); 
        return(y);     
}

function  genderlessChoice (...obj)   {
        let x = obj.filter (genderless=> genderless.gender == "n/a");
        let y = x.map (genderless => genderless.name);
        return (y);
}

function heightChoice(...obj)   {
        let x= obj.filter (heights => heights.height>150)
        let y= x.map (heights => heights.name);
        return (y);
}




