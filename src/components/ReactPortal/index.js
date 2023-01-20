import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function ReactPortal({ children, containerId }) {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  containerId: PropTypes.string,
};

ReactPortal.defaultProps = {
  containerId: 'portal-root',
};
