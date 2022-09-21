import { bookModel } from "src/books.component"; 



export interface purchase {
    PurchaseId: number,
    EmailId : string,
    BookId : number,
    PaymentMode : string
    //IsRefunded : string
}