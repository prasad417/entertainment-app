import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../../models/language.interface';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.scss']
})
export class LanguageDetailComponent implements OnInit {
  @Input()
  detail: Language;

  constructor() {}

  ngOnInit() {}

}
