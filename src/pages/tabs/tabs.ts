import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { FavoPage } from '../favo/favo';
import { HomePage } from '../home/home';
import { HistPage } from '../hist/hist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = FavoPage;
  tab4Root = HistPage;

  constructor() {

  }
}
