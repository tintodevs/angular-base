import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector:'alone-page',
  standalone:true,
  templateUrl: './alonepage.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  // host: { class: 'contents' },
  imports: [CommonModule],
})
export class AlonepageComponent {
  // @HostBinding('class') protected readonly class = 'contents'; // Makes component host as if it was not there, can offer less css headaches. Assumes .contents{display:contents} css class exits
  // constructor() {}
}
