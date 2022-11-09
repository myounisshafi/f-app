import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./FindProducts.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { FilterLabelBenefitsTitles } from "../../shared/mocks/consts";
import { useAppSelector } from "../../app/hooks";

type ProductItemProps = { item: any; index: number,rating:any };

const ProductItem = ({ item }) => {


  return (
    <li className={`mb-2 d-flex  align-items-center`} key={item.id}>
      <span className="text-truncate flex-grow-1">
        {FilterLabelBenefitsTitles[item.label] ?? item.label}
      </span>
      <span className={`fw-bold mx-1`}>{item.reviews}</span>
      <ArrowForwardIosIcon
        className={`${styles.product_card_feature_review_arrow} mx-2`}
      />
    </li>
  );
};
const Product = ({ item, index,rating }: ProductItemProps) => {

  return (
    <Grid item xs={12} sm={12} md={6} lg={3} key={item._id}>
      <Card className={`${styles.product_card} mx-2 mt-2 mb-2`}>
        <Image
          src={item.img_link}
          alt="Product Picture"
          width={150}
          height={150}
          objectFit={"contain"}
          placeholder={"blur"}
          blurDataURL={"/logo.png"}
          
        />

        <Card.Body>
          <Card.Title className={`${styles.product_card_title} mb-0`}>
            {item.prod_name}
          </Card.Title>
          <Card.Text className={`mb-2 mt-1`}> {item.brand_name}</Card.Text>
          <Card.Text className={`${styles.product_card_reviews}`}>
            <StarIcon className={`${styles.product_card_reviews_star}`} />
            {rating?.v ?? "0.0"} ({item.total_reviews ?? "0"} reviews)
          </Card.Text>
          <ul className={`${styles.product_card_product_features}`}>
            {item?.filtered_labels?.map((item, index) => {
              return <ProductItem item={item} key={index} />;
            })}

            {item?.reviews_labels?.map((item,index) => {
              return <ProductItem item={item} key={index} />;
            })}
          </ul>
          <Card.Text
            className={`${styles.product_card_product_price} text-center fw-bold`}
          >
            ${item.price ?? "0"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default Product;
