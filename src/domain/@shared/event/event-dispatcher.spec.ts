import CustomerChangedAddressEvent from "../../customer/event/customer-changed-address.event";
import CustomerCreatedEvent from "../../customer/event/customer-created.event";
import SendConsoleLogWhenCustomerAddressIsChangedHandler from "../../customer/event/handler/send-console-log-when-customer-address-is-changed.handler";
import SendConsoleLogWhenCostumerIsCreatedHandler from "../../customer/event/handler/send-console-log-when-customer-is-created.handler";
import SendConsoleLog2WhenCostumerIsCreatedHandler from "../../customer/event/handler/send-console-log2-when-customer-is-created.handler";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain event tests", () => {

    it("should register an event handler Product", () => {

        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(
            eventDispatcher.getEventHandlers["ProductCreatedEvent"]
        ).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
    })

    it("should unregister an event handler Product", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);

    } )

    it("should unregister all event handler Product", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();

    } )

    it("should notify all event handlers Product", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const spyEventhandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        const productCreatedEvent = new ProductCreatedEvent({
            name: "Product 1",
            description: "Product 1 description",
            price: 10.0,
        });

        eventDispatcher.notify(productCreatedEvent)

        expect(spyEventhandler).toHaveBeenCalled();
        
    } )


    it("should register an event handler Customer", () => {

        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogWhenCostumerIsCreatedHandler();
        const eventHandler2 = new SendConsoleLog2WhenCostumerIsCreatedHandler();
        const eventHandler3 = new SendConsoleLogWhenCustomerAddressIsChangedHandler();

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler3);

        expect(
            eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
        ).toBeDefined();
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(3);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][2]).toMatchObject(eventHandler3);
    })

    it("should unregister an event handler Customer", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogWhenCostumerIsCreatedHandler();
        const eventHandler2 = new SendConsoleLog2WhenCostumerIsCreatedHandler();
        const eventHandler3 = new SendConsoleLogWhenCustomerAddressIsChangedHandler();

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler3);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][2]).toMatchObject(eventHandler3);

        eventDispatcher.unregister("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.unregister("CustomerCreatedEvent", eventHandler2);
        eventDispatcher.unregister("CustomerCreatedEvent", eventHandler3);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeDefined();

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(0);

    } )

    it("should unregister all event handler Customer", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogWhenCostumerIsCreatedHandler();
        const eventHandler2 = new SendConsoleLog2WhenCostumerIsCreatedHandler();
        const eventHandler3 = new SendConsoleLogWhenCustomerAddressIsChangedHandler();

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler3);

       expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
       expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
       expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][2]).toMatchObject(eventHandler3);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeUndefined();

    } )

    it("should notify all event handlers Customer", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogWhenCostumerIsCreatedHandler();
        const eventHandler2 = new SendConsoleLog2WhenCostumerIsCreatedHandler();
        const eventHandler3 = new SendConsoleLogWhenCustomerAddressIsChangedHandler();
        const spyEventhandler1 = jest.spyOn(eventHandler1, "handle");
        const spyEventhandler2 = jest.spyOn(eventHandler2, "handle");
        const spyEventhandler3 = jest.spyOn(eventHandler3, "handle");

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
        eventDispatcher.register("CustomerChangedAddressEvent", eventHandler3);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
        expect(eventDispatcher.getEventHandlers["CustomerChangedAddressEvent"][0]).toMatchObject(eventHandler3);

        const customerCreatedEvent = new CustomerCreatedEvent({
            id: "1",
            nome: "Customer 1",            
            address: {
                street: "Rua One",
                number: "1",
                zip: "1",
                city: "City 1",
            }
        });

        const customerAddressChangedEvent = new CustomerChangedAddressEvent({
            id: "1",
            nome: "Customer 1",            
            address: {
                street: "Rua Two",
                number: "2",
                zip: "2",
                city: "City 2",
            }
        });

        eventDispatcher.notify(customerCreatedEvent);
        eventDispatcher.notify(customerAddressChangedEvent);

        expect(spyEventhandler1).toHaveBeenCalled();
        expect(spyEventhandler2).toHaveBeenCalled();
        expect(spyEventhandler3).toHaveBeenCalled();
        
    } )
})