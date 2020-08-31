import{Destination} from "./Destination.js";

export class Restaurant extends Destination{
    ticketPrice;
    constructor(name, buffetPrice){
        super(name);
        this.buffetPrice = buffetPrice;
    }
}
