import { AfterViewInit, Component, ViewChild,Inject } from '@angular/core';
import { Tool } from '@app/tool.model';
import { ToolsService } from '@app/tools.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-diagrams',
  template: '<canvas id="myCanvas"></canvas>',
  styleUrls: ['./diagrams.component.css']
})

export class DiagramsComponent implements AfterViewInit {
  constructor(private toolsService: ToolsService) { }
  tools: Tool[] = [];
  tool!: Tool; 
  ngOnInit() {
    this.toolsService.getTools().subscribe((tools) => {
      this.tools = tools;
      this.tool = tools[0];
      console.log(this.tools);
    });
  }

  canvas : HTMLCanvasElement | undefined;
  ctx : any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d');
      const myChart = new Chart(this.ctx,
          {
          type: 'pie',
          data: {
            labels: ['count', 'cposmax', 'cposmin', 'time', 'uposmax', 'uposmin'],
            datasets: [{
              label: '#',
              data: [this.tool['count'], this.tool['cposmax'], this.tool['cposmin'], this.tool['time'], this.tool['uposmax'], this.tool['uposmin']],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'chartArea',
              },
              title: {
                display: true,
                text: 'My Pie Chart'
              },
            }
          }
        });
    },3000);
  }
}
