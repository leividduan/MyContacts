import { useEffect } from 'react';
import { Container } from './styles';

import { toastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';
import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItems,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [...prevState, { id: Math.random(), type, text, duration }]);
    }
    toastEventManager.on('addtoast', handleAddToast);
    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
      <ToastMessage
        key={message.id}
        message={message}
        onRemoveMessage={handleRemoveItems}
        isLeaving={isLeaving}
        animatedRef={animatedRef}
      />
    ))}
    </Container>
  );
}
