import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component'; // Import du composant ArticleComponent
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, LoginFormComponent],  // Ajout d'ArticleComponent dans les imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Mumu !';
}
