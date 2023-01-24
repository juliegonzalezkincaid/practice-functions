function readyForRoadTripA(){
    console.log( 'in readyForRoadTripA' );
    if( enoughSeatsA() &&  tankFullA ){
       return true;
    }// end all good
    else{
       return false;
    } // not ready
 }// end readyForRoadTripA
 
 getInCarA( 'You' );
 getInCarA( 'Austin');
 getInCarA( 'Me' );
 getInCarA( 'Roro' );
 
 console.log( 'enough seats:' , enoughSeatsA() );
 
 console.log( 'are we ready for the trip?', readyForRoadTripA() );