import Address from "./domain/customer/value-object/address";
import Customer from "./domain/customer/entity/customer";
import Order from "./domain/checkout/entity/order";
import OrderItem from "./domain/checkout/entity/order_item";

let custumer = new Customer("123", "Andre Silva");
let address = new Address("Rua um", 2, "12345-678", "Sao Paulo");
custumer.Address = address;
custumer.activate();

const item1 = new OrderItem("1", "p1", "Item 1", 10, 1);
const item2 = new OrderItem("2", "p2", "Item 2", 15, 1);
const order = new Order("1", "123", [item1, item2]);