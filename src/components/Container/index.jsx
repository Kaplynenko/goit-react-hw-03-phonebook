
import PropTypes from 'prop-types';
import {useStyles}from './styles'

function Container({ children }) {
  const styles = useStyles()
  return <div className={styles.container}>{children}</div>;
}
Container.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Container;