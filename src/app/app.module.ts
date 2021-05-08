import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component'

//importando as classes para uso da biblioteca de rotas do angular
//estas rotas serão utilizadas para navegação da SPA - Single Page Application
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

//importando o módulo para configuração do Ng2SearchFilter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// importando o modulo de configuração da mascara
import {NgxMaskModule, IConfig} from 'ngx-mask';

import {ChartModule} from 'angular-highcharts';


//mapear uma rota (URL) para cada componente do projeto..
const routes : Routes = [
  { path : 'cadastro-clientes', component : CadastroClientesComponent },
  { path : 'consulta-clientes', component : ConsultaClientesComponent },
  { path : '', component : PainelPrincipalComponent }
];

//configuração para inicialização do NgxMask
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent,
    PainelPrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgxMaskModule.forRoot(), //registrando biblioteca NgxMask
    ChartModule, //registrando ChartModule
    RouterModule.forRoot(routes), //registrando a configuração de rotas!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
