import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./FindProducts.module.css";
import Grid from "@mui/material/Grid";

export default ({ index }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={3} key={index} spacing={2}>
      <Card
        className={`${styles.product_card} mx-2 mt-2 mb-2  align-items-center`}
      >
        <div style={{ backgroundColor: "#eee", height: 150, width: 150 }} />

        <div className="w-100">
          <Card.Title
            className={`${styles.product_card_title} mb-0 mt-3`}
            style={{ backgroundColor: "#eee", height: 30, width: "100%" }}
          />
          <Card.Title
            className={`${styles.product_card_title} mb-0 mt-3`}
            style={{ backgroundColor: "#eee", height: 20, width: "60%" }}
          />
          <Card.Title
            className={`${styles.product_card_title} mb-0 mt-1`}
            style={{ backgroundColor: "#eee", height: 15, width: "40%" }}
          />
          <Card.Title
            className={`${styles.product_card_title} mb-0 mt-3`}
            style={{ backgroundColor: "#eee", height: 20, width: "100%" }}
          />
          <Card.Title
            className={`${styles.product_card_title} mb-0 mt-3`}
            style={{ backgroundColor: "#eee", height: 20, width: "100%" }}
          />
        
          <div
            className={`${styles.product_card_product_price}  d-flex fw-bold mt-3 mb-3 p-2 mx-3 align-items-center justify-content-center`}
          >
            <div
              className={`${styles.product_card_title} mb-0`}
              style={{ backgroundColor: "#eee", height: 20, width: "30%" }}
            />
          </div>
        </div>
       
      </Card>
    </Grid>
  );
};
