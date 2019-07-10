import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    //函数返回操作内部变量的api
    const close = modal(<h1>你好
      <button onClick={() => close()}>close</button>
    </h1>);
  };

  return (
    <>
      <div style={{
        position: 'relative',
        zIndex: 10,
        border: '1px solid red',
        color: 'red'
      }}> {/* TODO 点第二个example的button的时候，这个div会浮起来 */}
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={[
          <button onClick={() => setX(false)}>1</button>
          , <button onClick={() => setX(false)}>2</button>
        ]}
                onClose={() => setX(false)}
        >
          <strong>hi</strong>
        </Dialog>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 9,
        border: '1px solid blue',
        color: 'blue'
      }}> {/* TODO 并且这个Dialog的父比上面那个的z-index还低，那么不管怎么提高Dialog的层级也没用 */}
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} buttons={[
          <button onClick={() => setY(false)}>1</button>
          , <button onClick={() => setY(false)}>2</button>
        ]}
                onClose={() => setY(false)}
                closeOnClickMask={true}
        >
          <strong>hi</strong>
        </Dialog>
      </div>

      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1', () => {
          console.log('yes')
        }, () => {
          console.log('no')
        })}>confirm
        </button>
      </div>


      <div>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </>
  )
}

//TODO 使用传送门
