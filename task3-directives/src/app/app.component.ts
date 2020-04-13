import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3-directives'
  isShownInfo = false
  clickLog = []

  onDisplayDetails() {
    this.isShownInfo = !this.isShownInfo
    const date = Date.now().toString()
    this.clickLog.push(date + ' clicked!')
  }
}
