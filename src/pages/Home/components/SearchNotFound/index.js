import PropTypes from 'prop-types';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

import { Container } from "./styles";

export default function SearchNotFound({ value }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Magnifier question" />

      <span>
        Nenhum resultado foi encontrado para <strong>"{value}"</strong>
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  value: PropTypes.string.isRequired,
}
