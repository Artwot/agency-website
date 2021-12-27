import styles from "../../styles/Product.module.css";
import { data } from "../../data";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLg}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              alt="Product"
              width="100%"
              height="100%"
              objectFit="cover"
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className={styles.cardSm}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return { paths, fallback: false };
};

// Fetch the data
export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
