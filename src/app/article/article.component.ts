import { Component } from '@angular/core';
import { Article} from "./article.model";
import { FormsModule } from "@angular/forms";
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  article: Article = {
    title: "Skatepark Zoo",
    author: "Muriel",
    content: "Les femmes sont-elles les bienvenues au skatepark ? Au vu de la difficulté à trouver sur le Net une image d'illustration pour cet article, il semble légitime de se poser la question ;)",
    image: "https://images.unsplash.com/photo-1471457704840-607b55bf1172?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPublished: true,
    comment: ""
  };

  comments: string[] = []; // Tableau pour stocker les commentaires

  addComment(): void {
    if (this.article.comment.trim()) {
      this.comments.push(this.article.comment); // Ajoute le commentaire au tableau
      this.article.comment = ''; // Réinitialise le champ après l'ajout
    }
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
