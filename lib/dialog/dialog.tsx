import React, {ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from "../icon/icon";
import {scopedClassMaker} from "../helpers/classes";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
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
        {
          props.buttons && props.buttons.length>0 &&
          <footer className={sc('footer')}>
            {/* 直接给key是不允许的，需要clone */}
            {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
          </footer>
        }
      </div>
    </>
    : null;

  return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = (
    <Dialog
      visible={true} onClose={onNo}
      buttons={[
        <button onClick={onYes}>yes</button>
        , <button onClick={onNo}>no</button>]}
    >
      {content}
    </Dialog>);
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);//事件销毁 垃圾回收的一些工作
    div.remove();
  };
  const component = <Dialog
    visible={true}
    onClose={onClose}
    buttons={[<button onClick={onClose}>ok</button>]}
  >{content}</Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};


const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);//事件销毁 垃圾回收的一些工作
    div.remove();
  };
  const component = (
    <Dialog
      onClose={onClose}
      visible={true}>
      {content}
    </Dialog>
  );

  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);

  return onClose;
};

export {alert, confirm, modal};

export default Dialog;
