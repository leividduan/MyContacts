import PropTypes from 'prop-types';

import sad from '../../../../assets/images/sad.svg';
import Button from '../../../../components/Button';
import { Container } from './styles';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="sad" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button type="button" onClick={onTryAgain}>
          Tente novamente
        </Button>
      </div>
    </Container>
  )
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
}
