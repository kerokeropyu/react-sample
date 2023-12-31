import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import reportWebVitals from './reportWebVitals';
import Parent from './components/ContainerSample';
import Parent2 from './components/ContainerSample2';
import Page from './components/ContextSample';
import Counter from './components/Counter';
import Reducer from './components/Reducer';
import { Clock } from './components/Clock';
import ImageUploader from './components/ImageUploader';
import { Input } from './components/Input';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name/>
    <Message/>
    <Parent/>
    <Parent2/>
    <Page/>
    <Counter initialValue={0}/>
    <Reducer initialValue={0}/>
    <Clock/>
    <ImageUploader/>
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
