import React, { useRef, useState } from 'react';
import './draganddrop.css';

export default function DrapAndDrop() {
  const parentRef = useRef(null);
  const [parentPos, setParentPos] = useState({ top: 100, left: 100 });
  const [childPos, setChildPos] = useState({ top: 50, left: 50 });
  const [dragging, setDragging] = useState(null);

  const handleMouseDown = (e, type) => {
    e.stopPropagation(); 
    const offsetX = e.clientX;
    const offsetY = e.clientY;
    setDragging({ type, offsetX, offsetY });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const { type, offsetX, offsetY } = dragging;
    if (type === 'parent') {
      const newLeft = e.clientX - offsetX + parentPos.left;
      const newTop = e.clientY - offsetY + parentPos.top;
      setParentPos({ top: newTop, left: newLeft });
      setDragging({ type, offsetX: e.clientX, offsetY: e.clientY });
    } else if (type === 'child') {
      const parentRect = parentRef.current.getBoundingClientRect();
      const newLeft = e.clientX - offsetX + childPos.left;
      const newTop = e.clientY - offsetY + childPos.top;
      setChildPos({
        left: Math.max(0, Math.min(newLeft, parentRect.width - 100)),
        top: Math.max(0, Math.min(newTop, parentRect.height - 100)),
      });
      setDragging({ type, offsetX: e.clientX, offsetY: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div
      className='App'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        ref={parentRef}
        className='parentDiv'
        style={{
          top: parentPos.top,
          left: parentPos.left,
          position: 'absolute',
        }}
        onMouseDown={(e) => handleMouseDown(e, 'parent')}
      >
        <div
          className='childDiv'
          style={{
            top: childPos.top,
            left: childPos.left,
            position: 'absolute',
          }}
          onMouseDown={(e) => handleMouseDown(e, 'child')}
        ></div>
      </div>
    </div>
  );
}
