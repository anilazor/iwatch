import Products from "./components/Products";
import Quote from "./components/Quote";
import Button from "./components/Button";

export default function Home() {
  return (
    <section className="col-start-2 col-end-5 row-start-2 row-end-5 grid grid-cols-subgrid grid-rows-subgrid">
      <Quote />
      <Products />
      <Button />
    </section>
  );
}
