/* eslint no-param-reassign:
["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, { payload }) => {
      state.comments.push(payload);
    },
    addAllComments: (state, { payload }) => {
      state.comments = payload;
    },
  },
});

export const { addCommentAction, addAllCommentsAction } = commentsSlice.actions;
export default commentsSlice.reducer;
