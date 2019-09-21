import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from "rxjs";
import { Post } from '../entity/post';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    private hasRes = new BehaviorSubject<boolean>(true);

    private curPage = new BehaviorSubject<number>(1);

    private detail = new BehaviorSubject<any>('');

    private message = new BehaviorSubject<string>('');

    private reserveSource = new BehaviorSubject<Post[]>([]);

    constructor() {}

    get Source(){
        return this.reserveSource.asObservable();
    }
    get Message(){
        return this.message.asObservable();
    }
    get Detail(){
        return this.detail.asObservable();
    }
    get Page(){
        return this.curPage.asObservable();
    }
    get Flag(){
        return this.hasRes.asObservable();
    }
    changeReserve(reserve: Post[]) {
        this.reserveSource.next(reserve);
    }
    changeMessage(msg: string){
        this.message.next(msg);
    }
    changeDetail(detail:JSON){
        this.detail.next(detail);
    }
    changePage(page:number){
        this.curPage.next(page);
    }
    changeFlag(flag:boolean){
        this.hasRes.next(flag);
    }
    getPostsFromStorage() {
    // return JSON.parse(localStorage.getItem(key));
        return new Observable<Post[]>((observer)=>{
            observer.next(JSON.parse(sessionStorage.getItem('posts')));
        })
    }
    getDetailFromStorage(){
        return new Observable<JSON>((observer)=>{
            observer.next(JSON.parse(sessionStorage.getItem('detail')));
        })
    }
    getQueryFromStorage(){
        return new Observable<string>((observer)=>{
            observer.next(JSON.parse(sessionStorage.getItem('query')));
        })
    }
      
    get( key: string ) {
    return JSON.parse(sessionStorage.getItem(key));
    }
    
    set( key: string, value: any ) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    
    clear(){
        sessionStorage.clear();
    }
}

