import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  postDate = new Promise( (resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 0
    );
  } );

  constructor() {
  }

  like() {
    this.postLoveIts++;
    console.log(this.postLoveIts);
  }

  dislike() {
    this.postLoveIts--;
    console.log(this.postLoveIts);
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts === 0 ) {
      return 'black';
    } else {
      return 'red';
    }
  }

  ngOnInit() {
  }

}
