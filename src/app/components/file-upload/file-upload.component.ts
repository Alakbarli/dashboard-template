import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  getFileName(filePath?:string){
    if(!filePath){
      return "";
    }
    else{
      const index=filePath.lastIndexOf('\\')+1;
      return filePath.substring(index);
    }
  }
}
