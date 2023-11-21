import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component';

import { ListTriviaComponent } from './components/activities/questions/list-trivia/list-trivia.component';
import { CreateQuestionComponent } from './components/activities/questions/create-question/create-question.component';
import { UpdateQuestionComponent } from './components/activities/questions/update-question/update-question.component';
import { TriviaGameComponent } from './components/activities/questions/trivia-game/trivia-game.component';
import { QuestionsModalComponent } from './components/activities/questions/questions-modal/questions-modal.component'

import { PlayerJoinComponent } from './components/player/player-join/player-join.component';
import { PlayerWaitComponent } from './components/player/player-wait/player-wait.component';
import { PlayerActivityComponent } from './components/player/player-activity/player-activity.component';
import { PlayerCommonComponent } from './components/player/player-common/player-common.component';

import { WordsListComponent } from './components/activities/hangman/words-list/words-list.component';
import { CreateWordComponent } from './components/activities/hangman/create-word/create-word.component';
import { UpdateWordsComponent } from './components/activities/hangman/update-words/update-words.component';
import { HangmanGameComponent } from './components/activities/hangman/hangman-game/hangman-game.component';

import { ProposalsComponent } from './components/proposals/proposals/proposals.component';
import { ProposalDetailsComponent } from './components/proposals/proposal-details/proposal-details.component';
import { NewRoomComponent } from './components/screen/new-room/new-room.component';
import { CreateProposalComponent } from './components/proposals/create-proposal/create-proposal.component';
import { WaitingRoomComponent } from './components/screen/waiting-room/waiting-room.component';

import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ 
    { path: 'player-activity', component: PlayerActivityComponent },
    { path: 'player-join', component: PlayerJoinComponent },
    { path: 'player-wait', component: PlayerWaitComponent },
    { path: 'player-room/:room', component: PlayerCommonComponent},

    { path: 'list-activities', component: ListActivitiesComponent },

    { path: 'list-trivia', component: ListTriviaComponent },
    { path: 'create-question', component: CreateQuestionComponent },

    { path: 'trivia-game', component: CreateQuestionComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'login', component: LoginComponent },

    { path: 'edit-question/:id', component: UpdateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: 'question-modal', component: QuestionsModalComponent },
    
    { path: 'words-list', component: WordsListComponent },
    { path: 'create-word', component: CreateWordComponent },
    { path: 'edit-word/:id', component: UpdateWordsComponent },
    { path: 'hangman-game', component: HangmanGameComponent },

    { path: 'list-proposal', component: ProposalsComponent},

    { path: 'proposals/:id', component: ProposalDetailsComponent },
    { path: 'new-room', component: NewRoomComponent},
    { path: 'create-proposal', component: CreateProposalComponent},
    { path: 'waiting-room/:codeNumber', component: WaitingRoomComponent },
    
    { path: '**', redirectTo: 'player-join', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
