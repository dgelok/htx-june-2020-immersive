

class Button {
    constructor() {
        this.count = 0;  //instance variable
    }

    count_met() {

        this.count++;
        console.log(this.count);
        // comment here    
    }


}


// create button objects

let button1 = new Button();
let button2 = new Button();

button1.count_met();
button1.count_met();
button1.count_met();
button1.count_met();
button2.count_met();
button2.count_met();
button1.count_met();