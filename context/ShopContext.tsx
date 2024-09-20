"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

// types
interface IShopContext {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

// create context
const ShopContext = createContext<IShopContext>({
  color: "",
  setColor: () => { },
  images: [],
  setImages: () => { },
});

const ShopProvider = ({ children }: { readonly children: ReactNode }) => {
  // states
  const [images, setImages] = useState<string[]>([]);
  const [color, setColor] = useState<string>("");


  return (
    <ShopContext.Provider
      value={{
        images,
        setImages,
        color,
        setColor,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

// custom hook to use context
export const useShopContext = () => {
  return useContext(ShopContext);
};
