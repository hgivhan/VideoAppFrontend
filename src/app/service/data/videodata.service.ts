import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../app.constants';
import {AVideo} from '../../video';

@Injectable({
  providedIn: 'root'
})
export class VideodataService {

  constructor(private http: HttpClient) { }

  getAllVideos = () => this.http.get<AVideo[]>(
    `${API_URL}/users/videos`
  )
  getUserVideos = (username: any) => this.http.get<AVideo[]>(
    `${API_URL}/users/${username}/videos`
  )
  deleteVideo = (username: any, id: any) => this.http.delete(
    `${API_URL}/users/${username}/videos/${id}`
  )
  editVideo = (username: any, id: any, video: any) => this.http.put<AVideo>(
    `${API_URL}/users/${username}/videos/${id}`, video
  )
  postVideo = (username: any, video: any) => this.http.post<AVideo>(
    `${API_URL}/users/${username}/videos/`, video
  )
}
