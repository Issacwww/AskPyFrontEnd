import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataService, RequestService} from '../../services';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private api = "/api/query/";
  searchQuery;
  constructor(
    private router: Router,
    public req: RequestService,
    public data: DataService
  ) { }

  ngOnInit() {
    this.searchQuery = new FormControl('');
  }

  onSubmit() {
    if (!this.searchQuery.valid) {return;}
    this.data.set('query',this.searchQuery.value);
    this.data.changeMessage(this.searchQuery.value);
    this.data.changePage(1);
    this.req.httpGet(this.searchQuery.value).subscribe((response)=>{
      this.data.changeReserve(response.posts);
      this.data.set('posts',response.posts);
    });
    this.router.navigate(['query']);
  }
}
