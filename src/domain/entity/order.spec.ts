import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("Should throw error when id is empty", () => {

        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("Id is required")
    });

    it("Should throw error when customerId is empty", () => {

        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("CustomerId is required")
    });

    it("Should throw error when Items is empty", () => {

        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrowError("Items are required")
    });

    it("Should calculete total", () => {

        const item = new OrderItem("i1","p1", "Item 1", 100, 2);
        const item2 = new OrderItem("i2", "p2", "Item 2", 200, 2);
        const order = new Order("o1", "c1", [item]);
        
        let total = order.total();

        expect(total).toBe(200);

        const order2 = new Order("o1", "c1", [item, item2]);

        total = order2.total();

        expect(total).toBe(600);
    });

    it("Should throw error if the item qte is less or equal zero", () => {

        expect(() => {
            const item = new OrderItem("i1", "p1", "Item 1", 100, 0);
            const order = new Order("o1", "c1", [item]);
        }).toThrowError("Quantity must be greater than 0")
        
    });
    
});