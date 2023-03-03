import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../tools.service';
import { Tool } from '../tool.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tools: Tool[]=[];
  displayedColumns: string[] = ['tool_id', 'count', 'time', 'first', 'last', 'cposmin', 'cposmax', 'uposmin', 'uposmax'];
  
  constructor(private toolsService: ToolsService) { }
  ngOnInit() {
    this.toolsService.getTools().subscribe((tools) => {
      this.tools = tools;
      console.log(this.tools);
    });
  }

}
