import { Component, OnInit } from '@angular/core';
import { ModelServiceService } from 'src/app/service/model-service.service';

@Component({
  selector: 'app-model-up',
  templateUrl: './model-up.component.html',
  styleUrls: ['./model-up.component.css'],
  providers: [ModelServiceService]
})
export class ModelUpComponent implements OnInit {

  constructor(private modelService: ModelServiceService) { }

  ngOnInit(): void {

    
  }

}
