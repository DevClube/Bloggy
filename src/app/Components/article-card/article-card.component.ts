import { Component, Input } from '@angular/core';
import {Article} from '../../Model/Article';
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {

  @Input()
  article!: Article;

}
