import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CnpjService } from '../services/cnpj.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-cnpj-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './cnpj-search.component.html',
  styleUrls: ['./cnpj-search.component.css'],
})
export class CnpjSearchComponent {
  cnpj: string = '';
  empresa: any = null;
  errorMessage: string = '';

  constructor(private cnpjService: CnpjService) { }

  buscarCnpj() {
    this.errorMessage = '';
    this.empresa = null;

    const cnpjLimpo = this.cnpj.replace(/\D/g, '');

    this.cnpjService.buscarCnpj(cnpjLimpo).subscribe({
      next: (data) => {
        if (data.status === 'ERROR') {
          this.errorMessage = data.message;
        } else {
          this.empresa = data;
        }
      },
      error: (err) => {
        this.errorMessage = 'Erro ao consultar API.';
        console.error(err);
      },
    });
  }
}