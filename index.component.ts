import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Meeting[] = [];
  constructor(public postService: MeetingService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Meeting[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
  
  deletePost(id){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
