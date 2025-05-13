import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // ✅ Importando HttpClientModule
import { CnpjSearchComponent } from './cnpj-search/cnpj-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CnpjSearchComponent, HttpClientModule],  // ✅ Adicionando HttpClientModule no AppComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cnpj-lookup';
}
