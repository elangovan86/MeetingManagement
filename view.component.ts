import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../meeting';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  post: Meeting;
   
  constructor(
    public postService: MeetingService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
      
    this.postService.find(this.id).subscribe((data: Meeting)=>{
      this.post = data;
    });
  }

}
