console.log('***** Music Collection *****');

////////////////////////////////////////////////////////////////////////////////////
//          Global Variables                                                      //
////////////////////////////////////////////////////////////////////////////////////

let collection = [];
let title;
let artist;
let yearPublished;
let counter = 1;

////////////////////////////////////////////////////////////////////////////////////
//          Basic Functions                                                       //
////////////////////////////////////////////////////////////////////////////////////

function addToCollection(title, artist, yearPublished){
    let albumInputs = {
        title,
        artist,
        yearPublished
    }
    collection.push(albumInputs);
    return albumInputs;
}   //  end addToCollection function

function showCollection(array){
    //  Produces a list of the album inputs created in addToCollection function
    console.log('');
    console.log(`Catalog List Includes ${array.length} Data Set(s):`);
    for(let i=0; i<array.length; i++){
        console.log(`${i+1}. ${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }   //  end for loop
    return '';
}   //  end showCollection function

function findByArtist(artist){  //  Searches for data sets by artist
    let byArtist = [];
    console.log(`Catalog Sets by ${artist}:`)
    for(let i=0; i<collection.length; i++){
        if(artist === collection[i].artist){
            byArtist.push(collection[i]);
            //console.log(`${counter}. ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
            counter ++;
        }   //  end if
    }   //  end for loop
    return byArtist;
}   //  end findByArtist function

////////////////////////////////////////////////////////////////////////////////////
//          Extra Special Functions                                               //
////////////////////////////////////////////////////////////////////////////////////

function yourChoice(){
    let choice = prompt(`Catalog Genius 7.0\n\nPlease Choose Program Path:\n------------------------------\n[ end ] - For Required Features\n[ stretch ] - For Stretch Goals + Some`);
    if(choice === 'end'){
        console.log(' ');
        console.log('*** Thank you for using Catalog Genius 7.0 ***');
        return '';
    }   //  end if - redirects to the basics
    else if(choice === 'stretch'){
        console.clear();
        console.log(' ██████╗ █████╗ ████████╗ █████╗ ██╗      ██████╗  ██████╗           ');
        console.log('██╔════╝██╔══██╗╚══██╔══╝██╔══██╗██║     ██╔═══██╗██╔════╝           ');
        console.log('██║     ███████║   ██║   ███████║██║     ██║   ██║██║  ███╗          ');
        console.log('██║     ██╔══██║   ██║   ██╔══██║██║     ██║   ██║██║   ██║          ');
        console.log('╚██████╗██║  ██║   ██║   ██║  ██║███████╗╚██████╔╝╚██████╔╝          ');
        console.log(' ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝           ');
        console.log('                                                                     ');
        console.log(' ██████╗ ███████╗███╗   ██╗██╗██╗   ██╗███████╗    ███████╗  ██████╗ ');
        console.log('██╔════╝ ██╔════╝████╗  ██║██║██║   ██║██╔════╝    ╚════██║ ██╔═████╗');
        console.log('██║  ███╗█████╗  ██╔██╗ ██║██║██║   ██║███████╗        ██╔╝ ██║██╔██║');
        console.log('██║   ██║██╔══╝  ██║╚██╗██║██║██║   ██║╚════██║       ██╔╝  ████╔╝██║');
        console.log('╚██████╔╝███████╗██║ ╚████║██║╚██████╔╝███████║       ██║██╗╚██████╔╝');
        console.log(' ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚══════╝       ╚═╝╚═╝ ╚═════╝ ');
        startingPromptExtra();
    }   //  end else if - redirects to the extra stuff
    else{
        console.log('*** Invalid Entry ***');
        yourChoice();
    }   //  end else
}   //  end yourChoice function

function startingPromptExtra(){
    //  I want this to prompt an input to add and entry, list all entrys or end the function
    //  I would also like the prompt window to show the current catalog, but that is tricky
    //  Scratch the catalog in prompt window idea, prompt window is limited size (with current knowledge set)
    let answer = prompt(`Catalog Genius 7.0\n\nInput For Desired Function:\n----------------------------\n[ add ] - To add entry to catalog.\n[ list ] - To show catalog list.\n[ end ] - To close catalog program.`);
    //  If the prompt input is 'add' I want to be redirected to the addToCollection
    //  function where I can input the desired values for the growing object literal            --  I think it works..
    if(answer === 'add'){
        console.log(' ');
        console.log(addToCollectionExtra(title, artist, yearPublished));
        return '';
    }   //  end if  for adding to the catalog
    //  If the prompt input is 'list' I want to console.log the current entrys                  --  incomplete
    else if(answer === 'list'){
        console.log(' ');
        showCollectionExtra(collection);
    }   //  end else if for showing list
    //  If the prompt input is 'end' I want to terminate all process.                           --  WORKS
    else if(answer === 'end'){
        console.log(' ');
        console.log('*** Thank you for using Catalog Genius 7.0 ***');
        return '';
    }   // end else if for ending program
    //  Basically any other inputs state invalid entry and restart the starting prompt          --  WORKS
    else{
        console.log('*** Invalid Entry ***');
        startingPromptExtra();
    }   //   end else for inputs not designated
}   //  end startingPrompt function

//--------------------------------------------------------------------------------//

function addToCollectionExtra(title, artist, yearPublished){
    let albumInputs = {
        title: prompt('\nPlease Enter Album Title:\n'),
        artist: prompt('\nPlease Enter Album Artist:\n'),
        yearPublished: prompt('\nPlease Enter Album Year Published:\n')
    }   //  end albumInputs Object Literal
    console.log('New entry added to catalog:');
    console.log(`Album: ${albumInputs.title}\nArtist: ${albumInputs.artist}\nYear Published: ${albumInputs.yearPublished}\n`);
    collection.push(albumInputs);
    startingPromptExtra();
    return '';
}   //  end addToCollection function

//--------------------------------------------------------------------------------//

function showCollectionExtra(collection){
    //  I want this function to list out all album inputs from the addToCollection function
    console.log(`Catalog List Includes ${collection.length} Data Set(s):`);
    for(let i=0; i<collection.length; i++){
        console.log(`${i+1}. ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }   //  end for loop
    startingPromptExtra();
    return '';
}   //  end showCollection function

//--------------------------------------------------------------------------------//

////////////////////////////////////////////////////////////////////////////////////
//          Main Code                                                             //
////////////////////////////////////////////////////////////////////////////////////

//  Adds data sets to the collection
console.log(addToCollection('American Beauty', 'Grateful Dead', 1970));
console.log(addToCollection('Terrapin Station', 'Grateful Dead', 1977));
console.log(addToCollection('Abbey Road', 'The Beatles', 1969));
console.log(addToCollection('Let It Be', 'The Beatles', 1970));
console.log(addToCollection('Shepherd Moons', 'Enya', 1991));
console.log(addToCollection('The Long Black Veil', 'The Chieftains', 1995));
console.log(addToCollection('The Purple Album', 'Lukas Graham', 2018));
console.log(collection);
//  Shows a listing of all data sets in the collection
console.log(showCollection(collection));
//  Shows a listing of all data sets by given artist
console.log(findByArtist('The Beatles'));
console.log(findByArtist('Phish'));

yourChoice();
