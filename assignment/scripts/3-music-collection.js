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
let numTracks;

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
console.log(addToCollection('Abbey Road', 'The Beatles', 1969, [{track: 'Come Together', duration: '4:19'},{track: 'Something', duration: '3:03'},{track: 'Maxwell`s Silver Hammer', duration: '3:27'},{track: 'Oh! Darling', duration: '3:27'},{track: 'Octopus`s Garden', duration: '2:51'},{track: 'I Want You (She`s So Heavy)', duration: '7:47'},{track: 'Here Comes the Sun', duration: '3:06'},{track: 'Because', duration: '2:46'},{track: 'You Never Give Me Your Money', duration: '4:02'},{track: 'Sun King', duration: '2:26'},{track: 'Mean Mr. Mustard', duration: '1:06'},{track: 'Polythene Pam', duration: '1:13'},{track: 'She Came In Through the Bathroom Window', duration: '1:58'},{track: 'Golden Slumbers', duration: '1:32'},{track: 'Carry That Weight', duration: '1:37'},{track: 'The End', duration: '2:20'},{track: 'Her Majesty', duration: '0:23'}]));
console.log(addToCollection('Let It Be', 'The Beatles', 1970, [{track: 'Two Of Us', duration: '3:37'},{track: 'Dig A Pony', duration: '3:55'},{track: 'Across The Universe', duration: '3:48'},{track: 'I Me Mine', duration: '2:26'},{track: 'Dig It', duration: '0:51'},{track: 'Let It Be', duration: '4:03'},{track: 'Maggie Mae', duration: '0:40'},{track: 'I`ve Got A Feeling', duration: '3:38'},{track: 'One After 909', duration: '2:54'},{track: 'The Long And Winding Road', duration: '3:38'},{track: 'For You Blue', duration: '2:32'},{track: 'Get Back', duration: '3:10'}]));
console.log(addToCollection('Shepherd Moons', 'Enya', 1991, [{track: 'Shepards Moons', duration: '3:43'},{track: 'Caribbean Blue', duration: '3:59'},{track: 'How Can I Keep From Singing', duration: '4:25'},{track: 'Ebudæ', duration: '1:56'},{track: 'Angels', duration: '4:01'},{track: 'No Holly For Miss Quinn', duration: '2:43'},{track: 'Book of Days', duration: '2:56'},{track: 'Evacuee', duration: '3:51'},{track: 'Lothlórien', duration: '2:08'},{track: 'Marble Halls', duration: '3:55'},{track: 'After Ventus', duration: '4:06'},{track: 'Smaointe', duration: '6:08'}]));
console.log(addToCollection('The Long Black Veil', 'The Chieftains', 1995, [{track: 'Mo Ghile Mear (Our Hero)', duration: '3:22'},{track: 'The Long Black Veil', duration: '3:37'},{track: 'The Foggy Dew', duration: '5:21'},{track: 'Have I told You Lately That I Love You?', duration: '4:40'},{track: 'Changing Your Demeanour', duration: '3:16'},{track: 'The Lily of the West', duration: '5:10'},{track: 'Coast of Malabar', duration: '6:01'},{track: 'Dunmore Lassies', duration: '5:14'},{track: 'Love is Teasin`', duration: '4:36'},{track: 'He Moved Through the Fair', duration: '4:55'},{track: 'Ferny Hill', duration: '3:43'},{track: 'Tennessee Waltz/Tennessee Mazurka', duration: '3:58'},{track: 'Rocky Road to Dublin', duration: '5:03'}]));
console.log(addToCollection('The Purple Album', 'Lukas Graham', 2018, [{track: 'Not a Damn Thing Changed', duration: '3:14'},{track: 'Lullaby', duration: '3:12'},{track: 'You`re Not the Only One (Redemption Song)', duration: '3:04'},{track: 'Love Someone', duration: '3:26'},{track: 'Promise', duration: '3:14'},{track: 'Stick Around', duration: '3:13'},{track: 'Unhappy', duration: '3:16'},{track: 'Everything That Isn`t Me', duration: '3:18'},{track: 'Hold My Hand', duration: '3:48'},{track: 'Say Yes (Church Ballad', duration: '3:34'}]));
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

//----------------------------------------------------------------------------------//
//          Function to focus on required functions or stretch goals/extras         //
//----------------------------------------------------------------------------------//

function yourChoice(){
    let choice = prompt(`Catalog Genius 7.0\n\nPlease Choose Program Path:\n------------------------------\n[ end ] - For Required Features\n[ stretch ] - For Stretch Goals + Some`);
    if(choice === 'end'){
        console.log(' ');
        console.log('*** Thank you for using Catalog Genius 7.0 ***');
        return '';
    }   //  end if - redirects to the basics
    else if(choice === 'stretch'){
        console.clear();
        fancyName();
        mainMenu();
    }   //  end else if - redirects to the extra stuff
    else{
        console.log('*** Invalid Entry ***');
        yourChoice();
    }   //  end else
}   //  end yourChoice function

//----------------------------------------------------------------------------------//
//          Function to serve as main menu for selecting other functions            //
//----------------------------------------------------------------------------------//

function mainMenu(){
    //  The main menu is where you can add data, search for data, or end the program
    let answer = prompt(`Catalog Genius 7.0\nInput For Desired Function:\n----------------------------\n[ add album ] - To add a new album.\n[ album list ] - To show a list of albums.\n[ album tracks ] - To show a list of albums with tracks.\n[ end ] - To close catalog program.`);
    if(answer === 'add album'){  //  lets you add a new album (title, artist, yearPublished)     --  WORKS
        console.log(' ');
        console.log(addToCollectionAlbums(title, artist, yearPublished));
        return '';
    }   //  end if for adding to the catalog
    else if(answer === 'album list'){   //  shows a numbered list of all albums in the collection   --  WORKS
        console.log(' ');
        showCollectionAlbums(collection);
    }   //  end else if for showing list
    else if(answer === 'album tracks'){   //  shows a numbered list of all albums in the collection   --  WORKS
        console.log(' ');
        showCollectionTracks(collection, tracks);
    }   //  end else if for showing list
    else if(answer === 'end'){  //  terminates the program                                      --  WORKS
        console.log(' ');
        console.log('*** Thank you for using ***');
        fancyName();
        return '';
    }   // end else if for ending program
    else{   //  lets you know if you entered anything other than a designated prompt            --  WORKS
        console.log('*** Invalid Entry ***');
        mainMenu();
    }   //   end else for inputs not designated
}   //  end startingPrompt function

//----------------------------------------------------------------------------------//
//          Function to add albums                                                  //
//----------------------------------------------------------------------------------//

function addToCollectionAlbums(title, artist, yearPublished, tracks){
    let albumInputs = {                                                             //  all of the prompt inputs together create a new album added to the collection        --  WORKS
        title: prompt('\nPlease Enter Album Title:\n'),
        artist: prompt('\nPlease Enter Album Artist:\n'),
        yearPublished: prompt('\nPlease Enter Album Year Published:\n'),
        tracks: trackInsert()
    }   //  end albumInputs Object Literal
    console.log('New entry added to catalog:');                                     //  console log of the new album added to the collection
    console.log(`Album: ${albumInputs.title}\nArtist: ${albumInputs.artist}\nYear Published: ${albumInputs.yearPublished}\nNumber of Tracks: ${numTracks}`);
    console.log(`${albumInputs.tracks}`);
    collection.push(albumInputs);                                                   //  actually adds the album to the collection               --  WORKS
    mainMenu();
    return albumInputs;
}   //  end addToCollection function

////////////////////////////////////  ----    WORK ZONE   ----    ////////////////////////////////////
function trackInsert(){   
    numTracks = prompt('\nHow many tracks does this album have?\n')
    tracks = [];
    for(let i=0; i<numTracks; i++){
        tracks.push([{track: prompt(`Please Enter Track ${i+1} Name:\n`), duration: prompt(`Please Enter Track ${i+1} Duration:\n`)}]);
    }   //  end for loop
    console.log(tracks) //  currently writing:  [object Object],[object Object] 
    return tracks;
}   //  end of trackInsert funcion

//  When I run my Album + Track list function I shows the newly added album with correct # of tracks, but tracks show 
//  as undefined: undefined versus the wanted 'track': 'duration'  ..  getting there though.. 

////////////////////////////////////  ----    WORK ZONE   ----    ////////////////////////////////////  [{track: 'Box of Rain', duration: '5:19'},


//----------------------------------------------------------------------------------//
//          Function to show a list of albums                                       //
//----------------------------------------------------------------------------------//

function showCollectionAlbums(collection){
    //  I want this function to list out all album inputs from the addToCollection function
    console.log(`Catalog List Includes ${collection.length} Albums:`);
    console.log('');
    for(let i=0; i<collection.length; i++){
        console.log(`⦿ ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}:`);
    }   //  end for loop
    mainMenu();
    return '';
}   //  end showCollectionAlbums function

//----------------------------------------------------------------------------------//
//          Function to show a list of albums with tracks                           //
//----------------------------------------------------------------------------------//

function showCollectionTracks(collection){
    console.log(`Catalog List Includes ${collection.length} Albums:`);
    for(let i=0; i<collection.length; i++){
        console.log('');
        console.log(`⦿ ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}:`);
        for(let j=0; j<collection[i].tracks.length; j++){
            console.log(`   ${j+1}. ${collection[i].tracks[j].track}: ${collection[i].tracks[j].duration}`);
        }   //  end for loop
    }   //  end for loop
    mainMenu();
    return '';
}   //  end showCollectionTracks function

//----------------------------------------------------------------------------------//
//          Function to post fancy program name                                     //
//----------------------------------------------------------------------------------//

function fancyName(){   //  Totally used an ASCII art generator for this -> https://patorjk.com/software/taag/
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
    return;
}