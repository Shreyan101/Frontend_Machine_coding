import React, { useEffect, useState } from 'react';
import './todolist.css';

interface ToDoListProp {
  id: number;
  text: string;
}

const ToDoList: React.FC = () => {
  const [todoList, setTodoList] = useState<ToDoListProp[]>(() => {
    const savedItems = sessionStorage.getItem('todoItemList');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [newItem, setNewItem] = useState<string>('');

  useEffect(() => {
    sessionStorage.setItem('todoItemList', JSON.stringify(todoList));
  }, [todoList]);

  const addItem = () => {
    if (newItem.trim()) {
      const newObjectItem = {
        id: Date.now(),
        text: newItem.trim(),
      };
      setTodoList([...todoList, newObjectItem]);
      setNewItem('');
    }
  };
  const deleteItem = (id: number) => {
    const filteredList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredList);
  };

  return (
    <div className='mainDiv'>
      <h1>ToDo List</h1>
      <div className='inputBox'>
        <input
          className='input'
          type='text'
          placeholder='Enter your todo here!'
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button className='btn-submit' onClick={addItem}>
          Submit
        </button>
      </div>
      <div className='display'>
        {todoList?.length ? (
          todoList?.map((item, index) => (
            <div key={item?.id} className='todo-box'>
              <div className='todo-text'>{item?.text}</div>
              <button
                className='delete'
                onClick={() => {
                  deleteItem(item?.id);
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className='todo-empty'>No ToDo Added !</div>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
