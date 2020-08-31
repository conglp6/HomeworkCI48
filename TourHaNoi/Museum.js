import{Destination} from "./Destination.js";

 export class Museum extends Destination{
    ticketPrice;
    constructor(name, ticketPrice){
        super(name);
        this.ticketPrice = ticketPrice;
    }
}
