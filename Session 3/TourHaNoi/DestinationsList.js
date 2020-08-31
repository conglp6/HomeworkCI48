import { Destination } from "./Destination.js";
import { Park } from "./Park.js";
import { Museum } from "./Museum.js";
import { Restaurant } from "./Restaurant.js";

class DestinationsList {
    constructor() {
        this.destinations = [];
        this.dateModified = new Date().toISOString();
        console.log(this.destinations);
    }

    set newDestination(destination) {
        if (destination instanceof Destination) this.destinations.push(destination);
        else return;
        // hỏi thêm nếu truyền instance của Park, Museum, Restaurant thì có được không? Vì sao?
        // Trả lời là: Được vì 3 class Park, Museum, Restaurant kế thừa từ Destination.
    }

    findDestination(name) {
        for (let destination of this.destinations) {
            if (destination.name == name) {
                console.log(destination)
            }
        }
    }

    get totalPrice() {
        let totalPrice = 0;
        for (let destination of this.destinations) {
            if (destination instanceof Park) {
                totalPrice += destination.ticketPrice;
            } else if (destination instanceof Museum) {
                totalPrice += destination.ticketPrice;
            } else if (destination instanceof Restaurant) {
                totalPrice += destination.buffetPrice;
            }
        }
        return totalPrice;
    }
}

let newDestinationsList = new DestinationsList();
//thêm Museum
let museumHn = new Museum("Bảo tàng Hà Nội", 300000);
museumHn.newImage = "https://upload.wikimedia.org/wikipedia/commons/2/22/Hanoi_Museum.jpg";
museumHn.info;
newDestinationsList.newDestination = museumHn;
// thêm Park
let parkHn = new Park("Công viên Cầu Giấy - Hà Nội", 100000);
parkHn.newImage = "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/Cong-vien-Cau-Giay-1-e1505889806491.jpg";
parkHn.info;
newDestinationsList.newDestination = parkHn;
// thêm Restaurant
let restaurantHn = new Restaurant("Buffet Hà Nội", 800000)
restaurantHn.newImage = "https://www.butterfield.com/blog/wp-content/uploads/2015/07/Hanoi-Restaurants-FB.jpg";
restaurantHn.info;
newDestinationsList.newDestination = restaurantHn;

newDestinationsList.findDestination("Hà Nội");

console.log('Tổng thiệt hại cho Tour Hà Nội này là : '+ newDestinationsList.totalPrice);
