import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../subject-model.model';
import { SubjectService } from '../subject-service.service';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css'],
})
export class AddSubjectComponent implements OnInit {

  progress: number = 0;
  interval: any = -1;
  searchedFileName:string="";
  videoName:string="";
  model: SubjectModel = {
    file: [],
    fileName: "DefaultFile"
  };

  ngOnInit(): void {
    // this.subjectService.getAllVideoNames("http://localhost:8080/video/names")
    //   .subscribe(data => {
    //     console.log("data: ....", data)
    //   }, error => {
    //     console.log("error: ....", error)
    //   })
  }

  constructor(private subjectService: SubjectService) { }

  onUpload(ev: any) {
    const data: FormData = new FormData();
    data.append('file', this.model.file);
    data.append('name', this.model.fileName);
    this.progress = 0;
    this.interval = setInterval(() => {
      if(this.progress <= 98)
        ++this.progress;
      else clearInterval(this.interval);
      console.log("progress count: ", this.progress);
    }, 100);
    this.subjectService.saveVideo("http://localhost:8080/video", data, {})
      .subscribe(data => {
        this.progress = 100;
        clearInterval(this.interval);
        console.log("Save Success: ", data);
      }, err => {
        console.log("Save error: ", err);
      })
  }

  onFilechange(ev: any) {
    ev.preventDefault();
    this.model.file = ev.target.files[0]
    console.log("data::::", this.model);

  }

  onSearch(ev:any){
   
    this.videoName = this.searchedFileName;
    console.log("searchedFileName::",this.videoName);
  }

}
