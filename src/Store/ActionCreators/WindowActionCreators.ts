import { WebviewWindow } from "@tauri-apps/api/window";
import {
  ChangeWindowTitleFailure, ChangeWindowTitleRequest, ChangeWindowTitleSuccess,
  CreateNewWindowFailure, CreateNewWindowRequest, CreateNewWindowSuccess,
  ListenWindowCloseFailure, ListenWindowCloseRequest, ListenWindowCloseSuccess,
  SetDecorationsFailure, SetDecorationsRequest, SetDecorationsSuccess
} from "../../Typings/Store/window";

export const listenWindowCloseRequest = (): ListenWindowCloseRequest => ({
  type: 'LISTEN_WINDOW_CLOSE',
  status: 'REQUEST'
});

export const listenWindowCloseSuccess = (): ListenWindowCloseSuccess => ({
  type: 'LISTEN_WINDOW_CLOSE',
  status: 'SUCCESS'
});

export const listenWindowCloseFailure = (message: string): ListenWindowCloseFailure => ({
  type: 'LISTEN_WINDOW_CLOSE',
  status: 'FAILURE',
  message
});

export const createNewWindowRequest = (): CreateNewWindowRequest => ({
  type: 'CREATE_WINDOW',
  status: 'REQUEST'
});

export const createNewWindowSuccess = (window: WebviewWindow): CreateNewWindowSuccess => ({
  type: 'CREATE_WINDOW',
  status: 'SUCCESS',
  window
});

export const createNewWindowFailure = (message: string): CreateNewWindowFailure => ({
  type: 'CREATE_WINDOW',
  status: 'FAILURE',
  message
});

export const changeWindowTitleRequest = (title: string): ChangeWindowTitleRequest => ({
  type: 'CHANGE_WINDOW_TITLE',
  status: 'REQUEST',
  title
});

export const changeWindowTitleSuccess = (): ChangeWindowTitleSuccess => ({
  type: 'CHANGE_WINDOW_TITLE',
  status: 'SUCCESS'
});

export const changeWindowTitleFailure = (message: string): ChangeWindowTitleFailure => ({
  type: 'CHANGE_WINDOW_TITLE',
  status: 'FAILURE',
  message
});

export const setDecorationsRequest = (decorations: boolean): SetDecorationsRequest => ({
  type: 'SET_DECORATIONS',
  status: 'REQUEST',
  decorations
});

export const setDecorationsSuccess = (): SetDecorationsSuccess => ({
  type: 'SET_DECORATIONS',
  status: 'SUCCESS'
});

export const setDecorationsFailure = (message: string): SetDecorationsFailure => ({
  type: 'SET_DECORATIONS',
  status: 'FAILURE',
  message
});