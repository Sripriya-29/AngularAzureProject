import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bookModel } from 'src/books.component';
import { BooksService } from '../bookservice.component';
import { UserModel } from '../users.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  users:UserModel[] = [];
  user : UserModel = {
    userId :0,
  userName :'',
  emailId :'',
  password :'',
  roleId :'',
  firstName :'',
  lastName :'',
  active : true
  }
  bookID:any;
  books:bookModel[] = [];
  book : bookModel = {
    bookId : 0,
    bookName :'',
    categoryId  :'',
    price  :'',
    publisher  :'',
    userId:0,
    publishedDate : new Date(),
    content :'',
    active :true,
    userModel :this.user
  
  }
  constructor(private route:Router,private activeroute:ActivatedRoute,private bookservice: BooksService) { }

  ngOnInit(): void {
debugger;
    this.activeroute.queryParams.subscribe(params => {
  this.bookID = params['bookID'];
});
      this.getBookInfo(this.bookID) 
  }
  getBookInfo(ID:any) {
    debugger;
    this.bookservice.getBookInfo(ID)
    .subscribe(
      response => { this.book=response}
    );
  }
  Update(book:bookModel){
   
 
}

}
