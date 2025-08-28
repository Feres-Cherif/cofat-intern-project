import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Section } from '../section/section';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar,Section,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
