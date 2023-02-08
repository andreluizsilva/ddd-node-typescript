import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerChangedAddressEvent from "../customer-changed-address.event";

export default class SendConsoleLogWhenCustomerAddressIsChangedHandler implements EventHandlerInterface<CustomerChangedAddressEvent> {
    handle(event: CustomerChangedAddressEvent): void {
        const id = event.eventData.id;
        const nome = event.eventData.nome;
        const endereco = event.eventData.address.street;
        const numero = event.eventData.address.number;
        const cidade = event.eventData.address.city;
        const zip = event.eventData.address.zip;

        console.log(`Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}, ${numero} - ${cidade} - ${zip}`)
    }
    
}