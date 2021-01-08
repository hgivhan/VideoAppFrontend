import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videosUrl = 'http://localhost:8080/storage/video/allvideos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET videos from the server */
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }

  /** POST: add a new video to the server (storage) */
  // addVideo(video: Video): Observable<Video> {
  //   return this.http.post<Video>(this.videosUrl, video, this.httpOptions);
  // }
  // addVideo(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }

  /** POST: add video details

/** DELETE: delete the video from the server */
  // deleteVideo(video: Video | number): Observable<Video> {
  //   const id = typeof video === 'number' ? video : video.id;
  //   const url = `${this.videosUrl}/${id}`;
  //
  //   return this.http.delete<Video>(url, this.httpOptions);
  // }

  /** PUT: update the video on the server */
  // updateVideo(video: Video): Observable<any> {
  //   return this.http.put(this.videosUrl, video, this.httpOptions);
  // }

}
