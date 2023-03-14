import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-recursive-list',
  templateUrl: './recursive-list.component.html',
  styleUrls: ['./recursive-list.component.scss']
})
export class RecursiveListComponent {
  @Input() list: any[] | undefined;
  @Input() opened: string[] = [];
  @Input() selected = "";
  @Output() open = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>();

  public activate(item: any) {
    if (item.children != null && item.children.length > 0) {
      this.open.emit(item.id);
    } else {
      this.select.emit(item.id);
    }
  }
}
