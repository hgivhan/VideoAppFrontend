import { Component, OnInit } from '@angular/core';
import {MockVideos} from '../mock-videos';
import { Video } from '../video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  // videos = MockVideos;
  videos!: Video[];

  // @ts-ignore
  // selectedVideo = Video;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe((videos: Video[]) => this.videos = videos);
  }

  // public onSelect(video: Video): void {
  //   this.selectedVideo = video;
  // }

}
