import { Component } from '@angular/core';
import { ScoreService } from 'src/app/service/score.service';

@Component({
  selector: 'app-score-statistics',
  templateUrl: './score-statistics.component.html',
  styleUrls: ['./score-statistics.component.css']
})
export class ScoreStatisticsComponent {
  semesterOption = ['2020.1','2021.1'];
  yearOption = ['2020','2021'];
  year: any;
  semester: any;
  tb : any =0;
  kha: any = 0;
  gioi :any = 0;
  xs: any = 0;
  dataForChart :any =[];
  chartOptions: any;

  constructor(private scoreService : ScoreService){}
  onSubmit(){
    this.tb = 0;
    this.kha = 0;
    this.gioi = 0;
    this.xs = 0;
        this.scoreService.getDataFOrChart(this.year,this.semester).subscribe({
        next : (data : any)=>{
          this.dataForChart = data.data;
          for(let i=0;i<this.dataForChart.length;i++){
            if(this.dataForChart[i].gpa <2.5) this.tb++;
            else if(this.dataForChart[i].gpa <3.2) this.kha++;
            else if(this.dataForChart[i].gpa<3.6) this.gioi++;
            else if(this.dataForChart[i].gpa >=3.6) this.xs++
          };
          this.chartOptions = {
            title: {
              text: "Thống kê kết quả học tập của sinh viên",
              fontFamily: "Arial",
              fontSize: 24,
              fontWeight: "bold",
              fontColor: "#333"
            },
            axisY: {
              viewportMinimum: 0, // Giá trị cố định của cột x bắt đầu từ 0
              viewportMaximum: 10, // Giá trị cố định của cột x kết thúc ở 10
              gridThickness: 0
            },
            dataPointWidth: 100,
            data: [{
              type: "column",
              animationEnabled: false,

              dataPoints: [

                { label: "Trung bình"  ,y: this.tb , color: 'red' },
                { label: "Khá", y: this.kha , color : 'orange' },
                { label: "Giỏi", y: this.gioi  },
                { label: "Xuất sắc",  y: this.xs , color : 'green' }
              ],

            }]
          };

        },
        error: (err : any)=>{
          console.log(err);
        }
      })
  }
}
