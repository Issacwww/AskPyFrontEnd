import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services'
import { Post } from 'src/app/entity/post';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  question: Post;
  answers: Post[];
  ansTitle: string;
  constructor(
    public route: ActivatedRoute,
    public data: DataService,
    public router: Router) { }

  ngOnInit() {
    window.scrollTo({top:0});
    this.data.Detail.subscribe(
      (detail)=>{
        
        this.question = detail.question;
        this.answers = detail.answers;
        let num = this.answers.length;
        switch(num){
          case 0:{
            this.ansTitle = 'No Answer';
            break;
          }
          case 1:{
            this.ansTitle = '1 Answer';
            break;
          }
          default:{
            this.ansTitle = num + ' Answers';
            break;
          }
        }},
        error=>{
          return
        }
    );
    this.data.getDetailFromStorage().subscribe(detail=>{
      this.question = detail['question'];
        this.answers = detail['answers'];
        let num = this.answers.length;
        switch(num){
          case 0:{
            this.ansTitle = 'No Answer';
            break;
          }
          case 1:{
            this.ansTitle = '1 Answer';
            break;
          }
          default:{
            this.ansTitle = num + ' Answers';
            break;
          }
        }
    });
  }
}
