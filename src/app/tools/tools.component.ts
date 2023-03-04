import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort,MatSortHeader } from '@angular/material/sort';
import { ToolsService } from '../tools.service';
import { Tool } from '../tool.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tools: Tool[] = [];
  displayedColumns: string[] = ['tool_id', 'count', 'time', 'first', 'last', 'cposmin', 'cposmax', 'uposmin', 'uposmax'];
  @ViewChild(MatSort) sort: MatSort=new MatSort;
  
  constructor(private toolsService: ToolsService) { }
  ngOnInit() {
    this.toolsService.getTools().subscribe((tools) => {
      this.tools = tools;
      console.log(this.tools);
    });
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    const sortDirection = this.sort.direction;
    const sortColumn = this.sort.active;
    this.toolsService.getSortedTools(sortColumn).subscribe((tools) => {
      this.tools = tools;
    });
  }
}
