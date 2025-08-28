import { Component, signal } from '@angular/core';
import { Navbar } from './components/Home/navbar/navbar';
import { Section } from "./components/Home/section/section";
import { Footer } from "./components/Home/footer/footer";


@Component({
  selector: 'app-root',
  imports: [Navbar, Section, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cofat-playground');
}
