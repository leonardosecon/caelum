import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import {  CadastroComponent} from "./cadastro/cadastro.component";

const rotasApp:Routes = [
    {path:'', component: ListagemComponent},//path empty is root
    {path:'cadastro',component: CadastroComponent},
    {path:'**',redirectTo:''}//always last
]

export const roteamento = RouterModule.forRoot(rotasApp)