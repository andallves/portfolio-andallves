import P from 'prop-types';

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: P.node.isRequired,
};
