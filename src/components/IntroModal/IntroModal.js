import Modal from '../UI/Modal';
import { useState } from 'react';
import TasksContext from '../../store/tasks-context';
import { useContext } from 'react';
const shoppingLabel = {
  name: 'shopping',
  color: '#04f43f3b',
  id: 'cc2hfnid6ysnzg0rhil',
};
const sportsLabel = {
  name: 'sports',
  color: '#ffeb003b',
  id: 'kv2ydwid5fznzg1rbiw',
};
const codingLabel = {
  name: 'coding',
  color: '#042df43b',
  id: 'fh7usjlt9mqkbiwsek0',
};
const IntroModal = () => {
  const tasksCtx = useContext(TasksContext);
  const [showIntroModal, setShowIntroModal] = useState(true);

  const createDummyContent = () => {
    tasksCtx.addLabel({ ...shoppingLabel });
    tasksCtx.addLabel({ ...sportsLabel });
    tasksCtx.addLabel({ ...codingLabel });
    tasksCtx.add({
      id: '00000001',
      name: 'Buy tomatos',
      description: '2kg from the new store',
      label: { ...shoppingLabel },
    });
    tasksCtx.add({
      id: '00000002',
      name: 'Go for a run',
      description: 'for a 55 minutes atleast!',
      label: { ...sportsLabel },
    });
    tasksCtx.add({
      id: '00000003',
      name: 'Do some push-ups',
      description: 'as much as possible!',
      label: { ...sportsLabel },
    });
    tasksCtx.add({
      id: '00000004',
      name: 'Order sushi',
      description: '2 combinations of veggie rolls',
      label: { ...shoppingLabel },
    });
    tasksCtx.add({
      id: '00000005',
      name: 'learn Redux',
      description: 'from Udemy- react course',
      label: { ...codingLabel },
    });
    tasksCtx.move('00000004');
    tasksCtx.move('00000003');
  };
  return (
    <>
      {showIntroModal &&
        (tasksCtx.allTasks.length > 0 || tasksCtx.labels.length > 1 ? (
          ''
        ) : (
          <Modal
            color="default"
            buttonText="Nope, Fresh start"
            onClose={() => {
              setShowIntroModal(false);
            }}
            onAction={() => {
              createDummyContent();
              setShowIntroModal(false);
            }}
          >
            App has nothing to show!
            <br />
            would you like to load some dummy data into it?
          </Modal>
        ))}
    </>
  );
};

export default IntroModal;
