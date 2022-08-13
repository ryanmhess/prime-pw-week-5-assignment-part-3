console.log('***** Music Collection *****');

////////////////////////////////////////////////////////////////////////////////////
//          Global Variables                                                      //
////////////////////////////////////////////////////////////////////////////////////

let collection = [];
let title;
let artist;
let yearPublished;
let tracks = [];
let track;
let duration;
let counter = 1;

////////////////////////////////////////////////////////////////////////////////////
//          Required Functions                                                    //
////////////////////////////////////////////////////////////////////////////////////

function addToCollection(title, artist, yearPublished, tracks){
    let albumInputs = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(albumInputs);
    return albumInputs;
}   //  end addToCollection function

//--------------------------------------------------------------------------------//

function showCollection(array){
    //  Produces a list of the album inputs created in addToCollection function
    console.log('');
    console.log(`Catalog List Includes ${array.length} Data Set(s):`);
    for(let i=0; i<array.length; i++){
        console.log(`⦿ ${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }   //  end for loop
    return '';
}   //  end showCollection function

//--------------------------------------------------------------------------------//

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
//          Main Code                                                             //
////////////////////////////////////////////////////////////////////////////////////

//  Adds data sets to the collection
console.log(addToCollection('American Beauty', 'Grateful Dead', 1970, [{track: 'Box of Rain', duration: '5:19'},{track: 'Friend of the Devil', duration: '3:23'},{track: 'Sugar Magnolia', duration: '3:19'},{track: 'Operator', duration: '2:26'},{track: 'Candyman', duration: '6:14'},{track: 'Ripple', duration: '4:10'},{track: 'Brokedown Palace', duration: '4:09'},{track: 'Till the Morning Comes', duration: '3:09'},{track: 'Attics of My Life', duration: '5:13'},{track: 'Truckin`', duration: '5:07'}]));
console.log(addToCollection('Terrapin Station', 'Grateful Dead', 1977, [{track: 'Estimated Prophet', duration: '5:37'},{track: 'Dancin` in the Streets', duration: '3:17'},{track: 'Passenger', duration: '2:48'},{track: 'Samson and Delilah', duration: '3:29'},{track: 'Sunrise', duration: '4:04'},{track: 'Terrapin Staion, Part 1', duration: '16:18'}]));
console.log(addToCollection('Abbey Road', 'The Beatles', 1969, [{track: 'Come Together', duration: '4:19'},{track: 'Something', duration: '3:03'},{track: 'Maxwell`s Silver Hammer', duration: '3:27'},{track: 'Oh! Darling', duration: '3:27'},{track: 'Octopus`s Garden', duration: '2:51'},{track: 'I Want You (She`s So Heavy)', duration: '7:47'},{track: 'Here Comes the Sun', duration: '3:06'},{track: 'Because', duration: '2:46'},{track: 'You Never Give Me Your Money', duration: '4:02'},{track: 'Sun King', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''}]));
console.log(addToCollection('Let It Be', 'The Beatles', 1970, [{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''}]));
console.log(addToCollection('Shepherd Moons', 'Enya', 1991, [{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''}]));
console.log(addToCollection('The Long Black Veil', 'The Chieftains', 1995, [{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''}]));
console.log(addToCollection('The Purple Album', 'Lukas Graham', 2018, [{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''},{track: '', duration: ''}]));
console.log(collection);

//  Shows a listing of all data sets in the collection
console.log(showCollection(collection));

//  Shows a listing of all data sets by given artist
console.log(findByArtist('The Beatles'));
console.log(findByArtist('Phish'));

//  yourChoice function Lets you see the outputs for the  
//  Required Features or takes you to the extra special stuff
yourChoice();   


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
//          Stretch Goals                                                         //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function search(){

}   //  end search function




////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
//          Extra Special Functions                                               //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function yourChoice(){
    let choice = prompt(`Catalog Genius 7.0\n\nPlease Choose Program Path:\n------------------------------\n[ end ] - For Required Features\n[ stretch ] - For Stretch Goals + Some`);
    if(choice === 'end'){
        console.log(' ');
        console.log('*** Thank you for using Catalog Genius 7.0 ***');
        return '';
    }   //  end if - redirects to the basics
    else if(choice === 'stretch'){
        console.clear();    //  Totally used an ASCII art generator for this -> https://patorjk.com/software/taag/
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
        mainMenu();
    }   //  end else if - redirects to the extra stuff
    else{
        console.log('*** Invalid Entry ***');
        yourChoice();
    }   //  end else
}   //  end yourChoice function

//--------------------------------------------------------------------------------//

function mainMenu(){
    //  The main menu is where you can add data, search for data, or end the program
    let answer = prompt(`Catalog Genius 7.0\nInput For Desired Function:\n----------------------------\n[ addAlbum ] - To add entry to catalog.\n[ albums ] - To show catalog list.\n[ tracks ] - To show catalog list with tracks.\n[ end ] - To close catalog program.`);
    if(answer === 'addAlbum'){  //  lets you add a new album (title, artist, yearPublished)     --  WORKS
        console.log(' ');
        console.log(addToCollectionAlbums(title, artist, yearPublished));
        return '';
    }   //  end if for adding to the catalog
    else if(answer === 'albums'){   //  shows a numbered list of all albums in the collection   --  WORKS
        console.log(' ');
        showCollectionAlbums(collection);
    }   //  end else if for showing list
    else if(answer === 'tracks'){   //  shows a numbered list of all albums in the collection   --  WORKS
        console.log(' ');
        showCollectionTracks(collection, tracks);
    }   //  end else if for showing list
    else if(answer === 'end'){  //  terminates the program                                      --  WORKS
        console.log(' ');
        console.log('*** Thank you for using Catalog Genius 7.0 ***');
        return '';
    }   // end else if for ending program
    else{   //  lets you know if you entered anything other than a designated prompt            --  WORKS
        console.log('*** Invalid Entry ***');
        mainMenu();
    }   //   end else for inputs not designated
}   //  end startingPrompt function

//----------------------------------------------------------------------------------//

function addToCollectionAlbums(title, artist, yearPublished){
    let albumInputs = {                                                             //  all of the prompt inputs together create a new album added to the collection        --  WORKS
        title: prompt('\nPlease Enter Album Title:\n'),
        artist: prompt('\nPlease Enter Album Artist:\n'),
        yearPublished: prompt('\nPlease Enter Album Year Published:\n')
    }   //  end albumInputs Object Literal
    console.log('New entry added to catalog:');                                     //  console log of the new album added to the collection
    console.log(`Album: ${albumInputs.title}\nArtist: ${albumInputs.artist}\nYear Published: ${albumInputs.yearPublished}\n`);
    collection.push(albumInputs);                                                   //  actually adds the album to the collection               --  WORKS
    mainMenu();
    return '';
}   //  end addToCollection function

//----------------------------------------------------------------------------------//

function showCollectionAlbums(collection){
    //  I want this function to list out all album inputs from the addToCollection function
    console.log(`Catalog List Includes ${collection.length} Albums:`);
    for(let i=0; i<collection.length; i++){
        console.log(`⦿ ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }   //  end for loop
    mainMenu();
    return '';
}   //  end showCollectionAlbums function

//----------------------------------------------------------------------------------//

function showCollectionTracks(collection){
    console.log(`Catalog List Includes ${collection.length} Albums:`);
    for(let i=0; i<collection.length; i++){
        console.log('');
        console.log(`⦿ ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
        for(let j=0; j<collection[i].tracks.length; j++){
            console.log(`   ${j+1}. ${collection[i].tracks[j].track}: ${collection[i].tracks[j].duration}`);
        }   //  end for loop
    }   //  end for loop
    mainMenu();
    return '';
}   //  end showCollectionTracks function

//--------------------------------------------------------------------------------//