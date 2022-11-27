let favColor = 'blue';
let myFavColors =['blue', 'red', 'green'];
let numOffavColors = 3;
let hasGotFavColors = false;

let richObject = {
    firdtName: 'Rich',
    lastName: 'Amstrong',
    favColor: ['blue', 'red', 'green'],
    yearsAlive: 103,
    isMale: true,
}

let whatIsMyFavoriteColor = function(){

}

let afiseazaMesaj = function(){

}

//obiect complex cu functii
let car = {
    make: 'VW',
    type: 'Passat',
    color: 'gray',
    isTurnedOn: false,
    numbersOffWells: 4,
    seats: [
            'seat1',
            'seat2',
            'seat3',
            'seat4'
            ],
    turnOn: function(){
        this.isTurnedOn = true;
    },
    switchCar: function(isON){
        console.log('Tha car is on? ' + isON);
        if(isON == true){
            this.isTurnedOn=true;
        }else{
            this.isTurnedOn=false;
        }
    },
    fly: function(){
        alert('Fly');
    }
}

let doCoolStuff = function(){
    if (document.getElementById('cool').className === 'cool'){
        document.getElementById('cool').className ='cool red';
    }else {
        document.getElementById('cool').className ='cool';
    }
    
}