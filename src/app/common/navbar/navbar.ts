import { Component, inject } from "@angular/core";
import { Router, NavigationEnd, RouterLink } from "@angular/router";
import { filter } from "rxjs/operators";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: "navbar",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
    private router = inject(Router);

    currentUrl = toSignal(
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )
    );


    isHome(): boolean {
        return this.router.url === '/' || this.router.url === '/home';
    }
}