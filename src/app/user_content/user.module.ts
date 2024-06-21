import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { UserInterceptorService } from './user-interceptor.service';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    TableComponent,
    DetailsComponent,
    FormComponent,
    EditComponent,
    RegistroComponent,
],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [TableComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptorService,
      multi: true,
    },
  ],
})
export class UserModule {}