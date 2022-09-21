import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailablebooksComponent } from './availablebooks/availablebooks.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PublishbookComponent } from './publishbook/publishbook.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReaderComponent } from './reader/reader.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateComponent } from './update/update.component';
import { ViewcontentComponent } from './viewcontent/viewcontent.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{path:'home',component:HomePageComponent},
{path:'Register',component:SignUpComponent},
{path:'Logout',component:HomePageComponent},
 {path:'Publish',component:PublishbookComponent},
{path:'Login',component:LoginComponent},
{path:'AvailableBooks',component:AvailablebooksComponent},
{path:'Reader',component:ReaderComponent},
{path:'ViewContent/:bookId',component:ViewcontentComponent},
{path:'purchase',component:PurchaseComponent},
{path:'purchase/:id',component:PurchaseComponent},
{path:"Logout",component:LoginComponent},
{path:"Update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
