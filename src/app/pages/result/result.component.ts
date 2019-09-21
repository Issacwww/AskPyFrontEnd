import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService, RequestService, PagerService } from '../../services'
import { Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  searchQuery = new FormControl('');
  
  constructor(
    public data: DataService,
    public req: RequestService,
    public router: Router
  ) { 
    
  }

  ngOnInit() {
    this.data.Message.subscribe(data => this.searchQuery.setValue(data));
  }
  onSubmit(){
    if(!this.searchQuery.valid) return;
    this.data.set('query',this.searchQuery.value);
    this.data.changeMessage(this.searchQuery.value);
    this.data.changePage(1);
    this.req.httpGet(this.searchQuery.value).subscribe((response)=>{
      this.data.changeReserve(response.posts);
      this.data.set('posts',response.posts);
      // this.data.changeFlag(response.length>0);
    }); 
    this.router.navigate(['/query/list']);
  }

  home(){
    this.router.navigate(['**']);
    this.data.clear();
  }
}
