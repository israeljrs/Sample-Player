import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare let videojs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'sample-player';
  vidObj: any;
  poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
  video = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
  @ViewChild('myvid') vid: ElementRef;

  ngAfterViewInit() {
    const options = {
      controls: true,
      autoplay: true,
      preload: 'auto',
      techOrder: ['html5', 'flash']
    };

    this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
      videojs.log('Your player is ready!');
    });
  }
}
