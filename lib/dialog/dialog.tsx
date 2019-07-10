import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from "../icon/icon";
import {scopedClassMaker} from "../helpers/classes";

interface Props {
  visible:boolean;
  buttons:Array<ReactElement>;
  onClose:React.MouseEventHandler;
  closeOnClickMask?:boolean;
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;

const Dialog:React.FunctionComponent<Props> = (props) => {
  const onClickClose:React.MouseEventHandler = (e) => {
    props.onClose(e)
  };

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  };

  const x = props.visible ?
    <>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc()} onClick={onClickClose}>
        <div className={sc('close')}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {/* 直接给key是不允许的，需要clone */}
          {props.buttons.map((button,index)=>React.cloneElement(button,{key:index}))}
        </footer>
      </div>
    </>
    : null

  return ReactDOM.createPortal(x,document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default Dialog;
