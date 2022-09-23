import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignService } from 'src/app/services/design.service';
import { Idesign } from 'src/app/shared/interfaces/models/idesign';

@Component({
  selector: 'app-designs-home',
  templateUrl: './designs-home.component.html',
  styleUrls: ['./designs-home.component.scss'],
})
export class DesignsHomeComponent implements OnInit {
  designs$: Observable<Idesign[]>;
  constructor(private designService: DesignService) {
    this.designs$ = this.designService.getDesigns();
  }
  ngOnInit(): void {}
}
