import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { GameBoardComponent } from './app/game-board/game-board.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter([{ path: '', component: GameBoardComponent }])],
}).catch((err) => console.error(err));
