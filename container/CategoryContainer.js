import { useRouter } from "next/router";

const CategoryContainer = ({ n }) => {
  const router = useRouter();
  const category = router.query.category;

  return (
    <div
      className={`category ${category === n.contentType ? "active" : null}`}
      key={n.id}
      onClick={() => router.push(`/category/${n.contentType}`)}
    >
      <img
        src="https://cdn.shopify.com/s/files/1/2309/6853/products/Artboard_3_1200x1200.jpg?v=1578499695"
        alt={n.contentType}
      />
      <div className="body">
        <i className={`fa-solid ${n.i}`}></i>
        <h2>{n.contentType}</h2>
      </div>
    </div>
  );
};

export default CategoryContainer;
