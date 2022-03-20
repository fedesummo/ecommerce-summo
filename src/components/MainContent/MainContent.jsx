// Importing project components.
import ItemsListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const MainContent = () => {
  return (
    <main className="pt-5 d-flex justify-content-center">
      {/* <ItemsListContainer /> */}
      <ItemDetailContainer/>
    </main>
  );
};

export default MainContent;
