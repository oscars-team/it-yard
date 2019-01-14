import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { VgAPI } from 'videogular2/core';
@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    @Input() video: String = ''
    @Output() playing: EventEmitter<VideoComponent> = new EventEmitter();
    @ViewChild('vgPlayer') player
    constructor() { }

    api: VgAPI
    isPlaying = false;
    ngOnInit() {
    }

    stop() {
        this.api.pause();
    }

    play() {
        this.api.play();
    }

    tooglePlay() {
        this.isPlaying ? this.stop() : this.play();
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
    }

    onPlaying(event) {
        if (this.playing) {
            this.isPlaying = true;
            this.playing.emit(this);
        }
    }

    onPause(event) {
        this.isPlaying = false;
    }

}
