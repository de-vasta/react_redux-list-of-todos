import React from 'react';
import { Loader } from '../Loader';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentTodo } from '../../features/currentTodo';

export const TodoModal: React.FC = () => {
  const { currentTodo } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {/* <Loader /> */}

      <div className="modal-card">
        <header className="modal-card-head">
          <div
            className="modal-card-title has-text-weight-medium"
            data-cy="modal-header"
          >
            Todo #{currentTodo?.id}
          </div>

          <button
            type="button"
            className="delete"
            data-cy="modal-close"
            onClick={() => dispatch(setCurrentTodo(null))}
          />
        </header>

        <div className="modal-card-body">
          <p className="block" data-cy="modal-title">
            {currentTodo?.title}
          </p>

          <p className="block" data-cy="modal-user">
            {currentTodo?.completed ? (
              <strong className="has-text-success">Done</strong>
            ) : (
              <strong className="has-text-danger">Planned</strong>
            )}
            {' by '}
            <a href="mailto:Sincere@april.biz">Leanne Graham</a>
          </p>
        </div>
      </div>
    </div>
  );
};
