import { Component, OnInit } from '@angular/core';
import {FileService} from '../../service/file.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css'],
  providers: [FileService]
})
export class FileManagerComponent implements OnInit {
  data: {type: string, name: string, size?: number};
  path = '';

  constructor(public fileService: FileService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams['path']) {
      this.path = this.route.snapshot.queryParams['path'];
    }
    this.fileService.get(this.path)
      .subscribe(data => this.data = data);
  }

  goToInFolder(folder) {
   const newPath = this.path +  folder + '/';
   this.get(newPath);
  }

  goToOutFolder() {
    let idx = this.path.lastIndexOf('/', this.path.length - 2);
    if (idx === -1) {
      idx = -1;
    }
    const newPath = this.path.slice(0, idx + 1);
    this.get(newPath);
  }

  get(path) {
    this.router.navigate([], {queryParams: {path: path}});
    this.fileService.get(path)
     .subscribe(data => {
       this.data = data;
       this.path = path;
     });
  }

}
