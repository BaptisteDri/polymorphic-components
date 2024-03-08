import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

// Récupérer les types dynamiquement selon l'élément en retirant le as par défaut
type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, "as"> & {
    as?: Element;
  };

// Ajouter du style au bouton
const button = cva(["font-medium", "py-2.5", "px-3.5", "rounded-md"], {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white"],
      secondary: ["bg-black", "text-white"],
      ghost: ["text-blue-500"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

// Récupérer les variants grâce à CVA, en l'occurence l'intent
type Props = VariantProps<typeof button>;

// Définir l'élément par défaut si as n'est pas renseigné
const defaultElement = "button";

// Composant Button correctement typé et stylisé
export const Button = <
  Element extends React.ElementType = typeof defaultElement
>(
  props: PolymorphicProps<Element, Props>
) => {
  const { as: Component = defaultElement, className, intent, ...rest } = props;
  return (
    <Component className={twMerge(button({ className, intent }))} {...rest} />
  );
};
