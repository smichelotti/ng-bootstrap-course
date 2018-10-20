import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-performance-targets-modal',
  templateUrl: './performance-targets-modal.component.html',
  styleUrls: ['./performance-targets-modal.component.css']
})
export class PerformanceTargetsModalComponent implements OnInit {
  public perfTargets: any = {};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  save() {
    this.activeModal.close(this.perfTargets);
  }

}
