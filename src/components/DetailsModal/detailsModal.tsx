import './detailsModal.css';

import { useState } from 'react';

import { initializeGame ,BackDrop} from '../../store/actions/gameActions';
import { useAppDispatch } from '../../store/hooks';

const DetailsModal = () => {
  const dispatch = useAppDispatch();
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [canSubmitForm, setcanSubmitForm] = useState(false);

  const fieldOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.type);
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case 'player1-name':
        setPlayer1Name(value.trim());
        break;
      case 'player2-name':
        setPlayer2Name(value.trim());
        break;
    }
  };

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
    setcanSubmitForm(false);
    if (player1Name === player2Name) {
      setcanSubmitForm(true);
      return false;
    }
    if (player1Name !== '' && player2Name !== '') {
      dispatch(BackDrop())
      dispatch(initializeGame({
        player1: player1Name,
        player2: player2Name,
      }));
    
    }
  };

  return (
    <>
      <div className='m01OuterContainer'>
        <div className='m01Container'>
          {canSubmitForm && <h2 className='details-modal-error'> Same Names !!!! </h2>}
          <h3 className='m01Heading'>
            Game Menu
          </h3>
          <form onSubmit={formOnSubmit} className="details-modal-form">
            <div className='dm01FContainer'>
              <label
                htmlFor='player1-name'
                className={`dm01TextFLabel ${player1Name === '' ? '' : ' value-filled'}`}
              >
                Player 1
              </label>
              <input
                type='text'
                id='player1-name'
                name='player1-name'
                value={player1Name}
                placeholder="Enter Name..."
                onChange={fieldOnchange} autoFocus
              />
            </div>
            <div className='dm01FContainer'>
              <label
                htmlFor='player2-name'
                className={`dm01TextFLabel ${player2Name === '' ? '' : ' value-filled'}`}
              >
                Player 2
              </label>
              <input
                type='text'
                id='player2-name'
                name='player2-name'
                value={player2Name}
                placeholder="Enter Name..."
                onChange={fieldOnchange}
              />
            </div>
            <div className='dm01FContainer'>
              <input
                type='submit'
                className='primary-button dm01SubmitButton'
                aria-label='Play'
                value="Start"
                disabled={player1Name === '' || player2Name === ''}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default DetailsModal;
