import { Action, createReducer, on } from '@ngrx/store';
import { Member } from '~/app/model/member.model';
import { storeMember } from './members.action';

export const initialState: Member[] = [];

const _memberReducer = createReducer(initialState,
  on(storeMember, (state,payload) => {
    const members = payload['props'];
    return[...members];
  }),
);

export function memberReducer(state: any, action: Action) {
  return _memberReducer(state, action);
}
