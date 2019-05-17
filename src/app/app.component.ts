import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' le site à moi ';
  isAuth = false;
  lastUpdate = new Promise( (resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  } );

  posts = [
    {
      title: 'Premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lo',
      loveIts: 0,
    },
    {
      title: 'Deuxieme post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lo',
      loveIts: 0,
    },
    {
      title: 'Troisieme post',
      content: 'LorLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lo',
      loveIts: 0,
    }
  ];


  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout');

    for (const appareil of this.appareils) {
      if (appareil.status === 'éteint') {
        appareil.status = 'allumé';
      } else {
        appareil.status = 'éteint';
      }
    }
  }
}
