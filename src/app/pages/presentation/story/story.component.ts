import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {

  iconImage: string = "../../../../assets/icons/icons8-ideas-64.png";
  imgImage: string = "../../../../assets/img/caterpillar-5586357.jpg";
  defaultImage:string  = "https://www.placecage.com/1000/1000";
}
