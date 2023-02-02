import PropTypes from 'prop-types';
import { TextMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return <TextMessage>{message}</TextMessage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
