import { Section } from './../models/sections';
import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { api } from '../constants/api';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-api-docs',
  templateUrl: './api-docs.component.html',
  styleUrls: ['./api-docs.component.css'],
})
export class ApiDocsComponent implements OnInit {
  public sections: Section[] = [];
  public activeNav: any;
  public searchInput = '';
  public zoomLevels: { id: string; zoomLevel: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sections = api.sections.sort((a, b) => {
      const sectionA = a.title.toUpperCase(); // ignore upper and lowercase
      const sectionB = b.title.toUpperCase(); // ignore upper and lowercase
      if (sectionA < sectionB) {
        return -1; //sectionA comes first
      }
      if (sectionA > sectionB) {
        return 1; // sectionB comes first
      }
      return 0; // else section must be equal
    });

    this.sections.forEach((section) => {
      section.topics = section.topics.sort((a, b) => {
        const topicA = a.title.toUpperCase(); // ignore upper and lowercase
        const topicB = b.title.toUpperCase(); // ignore upper and lowercase
        if (topicA < topicB) {
          return -1; // topicA comes first
        }
        if (topicA > topicB) {
          return 1; // topicB comes first
        }
        return 0; // else topic must be equal
      });
    });

    for (
      let sectionIndex = 0;
      sectionIndex < this.sections.length;
      sectionIndex++
    ) {
      const section = this.sections[sectionIndex];

      for (
        let topicIndex = 0;
        topicIndex < section.topics.length;
        topicIndex++
      ) {
        const topic = section.topics[topicIndex];

        for (
          let contentIndex = 0;
          contentIndex < topic.content.length;
          contentIndex++
        ) {
          const content = topic.content[contentIndex];

          for (
            let pointIndex = 0;
            pointIndex < content.points.length;
            pointIndex++
          ) {
            const point = content.points[pointIndex];

            if (point.pdf !== undefined) {
              this.zoomLevels.push({
                id: `${sectionIndex}-${topicIndex}-${contentIndex}-${pointIndex}`,
                zoomLevel: 1,
              });
            }
          }
        }
      }
    }
  }

  changeZoomLevel(id: string, action: '+' | '-') {
    const zoomLevel = this.zoomLevels.find((zl) => zl.id === id);
    if (zoomLevel === undefined) {
      return;
    }

    if (action === '+') {
      zoomLevel.zoomLevel += 0.25;
    } else {
      zoomLevel.zoomLevel -= 0.25;
    }
  }

  public getZoomLevel(id: string) {
    return this.zoomLevels.find((zl) => zl.id === id)?.zoomLevel ?? 1;
  }

  public downloadFile(
    filePath: string,
    fileName: string,
    fileExtension: string
  ) {
    this.http
      .get(filePath, {
        responseType: 'blob',
      })
      .pipe(take(1))
      .subscribe({
        next: (file) => {
          saveAs(file, `${fileName}.${fileExtension}`);
        },
        error: (err) => {
          throw err;
        },
      });
  }
}
