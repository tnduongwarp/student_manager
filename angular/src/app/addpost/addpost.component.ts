import { Component } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  $(function() {
    $(".bcontent").wysihtml5({
      toolbar: {
        "image": false
      }
    });
  })
}
