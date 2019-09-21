import { Component, OnInit, Input,  OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { RequestService, DataService,PagerService } from '../../services'
import { Post } from 'src/app/entity/post';
import { Router} from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  // @Input() postsTest:Post[];
  hasRes=true;
  posts: Post[];
  curP: number;
  msg: string;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(
    public data: DataService,
    public req: RequestService,
    public pagerService: PagerService,
    public router: Router) { 
  }

  ngOnInit() {
    
    // this.posts = this.storage.get('posts');
    this.data.Message.subscribe(message => this.msg = message);
    // this.msg = this.storage.get('query');
  
    this.data.Page.subscribe(p => this.curP = p);
    // console.log(this.curP);
    
    this.data.Source.subscribe(data => {
      this.posts = data;
      this.hasRes = data.length > 0;
      // console.log(this.posts);
      this.setPage(this.curP);
    });
    this.data.getQueryFromStorage().subscribe(query => this.msg = query);
    this.data.getPostsFromStorage().subscribe((posts)=>{
      this.posts = posts;
      this.hasRes = posts.length > 0;
      this.setPage(this.curP);
    });
    // this.data.Flag.subscribe(flag=> this.hasRes = flag);
    // this.hasRes = this.posts.length > 0;
  }

  pass(id,key) {
    this.req.queryById(id).subscribe(
      (detail)=>{
        this.data.changeDetail(detail);
        this.data.set('detail',detail);
        // console.log(detail);
        this.router.navigate(['query/detail/'+key]);
    });
    // 
  }

  setPage(page: number) {
    this.data.changePage(page);
    // console.log(page);
    
    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);
    // get current page of items
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    window.scrollTo({top:0});
  }

}
