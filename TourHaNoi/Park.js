import{Destination} from "./Destination.js";

 export class Park extends Destination{
    ticketPrice;
    constructor(name, ticketPrice){
        super(name);
        this.ticketPrice = ticketPrice;
    }
}
