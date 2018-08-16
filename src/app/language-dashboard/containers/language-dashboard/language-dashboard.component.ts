import { Component, OnInit } from '@angular/core';

import { Language } from '../../models/language.interface';

import { LanguageDashboardService } from '../../language-dashboard.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-language-dashboard',
  templateUrl: './../language-dashboard/language-dashboard.component.html',
  styleUrls: ['./../language-dashboard/language-dashboard.component.scss']
})
export class LanguageDashboardComponent implements OnInit {
  languages: Language[];

  public errorMsg;

  constructor(private languageService: LanguageDashboardService) { }

  ngOnInit() {
    this.languageService
      .getLanguages()
      .subscribe((data: Language[]) => this.languages = data.sort(
        (a: Language, b: Language) => (a.name < b.name ? -1 : 1)
      ));
      // (error: any) => this.errorMsg = error);
  }

}
