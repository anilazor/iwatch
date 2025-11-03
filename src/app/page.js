import Products from "./components/Products";
import Quote from "./components/Quote";
import Button from "./components/Button";
import Options from "./components/Options";

export default function Home() {
  return (
    <section>
      <Quote />
      <Products />
      {/* <Options /> */}
      <Button />
    </section>
  );
}
