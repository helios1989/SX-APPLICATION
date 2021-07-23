import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { Member } from '@app/model/member.model';

export const storeMember = createAction('storeMember', props<{ props: Member[] }>());
