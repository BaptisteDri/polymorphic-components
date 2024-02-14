type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, "as"> & {
    as?: Element;
  };

type Props = {};

const defaultElement = "button";

export const Button = <
  Element extends React.ElementType = typeof defaultElement
>(
  props: PolymorphicProps<Element, Props>
) => {
  const { as: Component = defaultElement, ...rest } = props;
  return <Component {...rest} />;
};
