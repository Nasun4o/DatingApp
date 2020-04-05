import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-photos-management',
  templateUrl: './photos-management.component.html',
  styleUrls: ['./photos-management.component.css']
})
export class PhotosManagementComponent implements OnInit {
photos: any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.adminService.getPhotosForApproval().subscribe((photos) => {
      this.photos = photos;
    },error => {
      console.log(error);
    });
  }

  approvePhoto(photoId) {
    this.adminService.approvePhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId),1);
    },error => {
      console.log(error);
    });
  }
  
  rejectPhoto(photoId) {
    this.adminService.rejectPhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId),1);
    },error => {
      console.log(error);
    });
  }

}
