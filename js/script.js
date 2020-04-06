var car = {
    make: 'BMW',
    type: 'Fast',
    color: 'blue',
    isTurnedOn: true,
    numberOfWheels: 4,
    seats: ['seat 1','seat 2','seat 3','seat 4'],
    
    trunOn: function (){
        this.isTurnedOn = true;
    },

    turnOff: function(){
        this.isTurnedOn = false;
    },

    fly: function(){
        alert('I love you Sonya');
    }


};


console.log('hello there freiends'); 