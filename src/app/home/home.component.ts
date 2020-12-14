import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../interfaces/post.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  errorId: boolean;
  errorIdMessage: string;
  responseError: boolean;
  responseErrorMessage: string;
  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.setIdValidation();
    this.setResponsError();
  }

  setIdValidation(): void {
    this.errorId = false;
    this.errorIdMessage = '';
  }

  setResponsError(): void {
    this.responseError = false;
    this.responseErrorMessage = '';
  }

  search(): any {
    if (!this.id || this.id <= 0) {
      this.errorId = true;
      this.errorIdMessage = 'Error!! ID can`t be an empty or <= 0';
      return false;
    }
    this.setIdValidation();
    this.setResponsError();
    this.postsService.searchPost(this.id)
      .then((data: Post) => {
        if (data) {
          console.log('home', data);
          this.router.navigate(['details', data.id]);
        }
      })
      .catch((err) => {
        console.log('home', err);
        this.responseError = true;
        this.responseErrorMessage = err.message;
      });
  }
}
