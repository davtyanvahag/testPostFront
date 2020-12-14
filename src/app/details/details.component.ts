import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../interfaces/post.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post: Post;
  constructor(private postsService: PostsService,
              private activetedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activetedRouter.params.subscribe((param) => {
      this.postsService.searchPost(param.id)
        .then((data: Post) => {
          if (data) {
            this.post = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

}
