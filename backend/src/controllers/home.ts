import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
    res.render("home", {
        title: "Home"
    });
};

export const index2 = async (req: Request, res: Response) => {
    // Setup:
    const wooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

    const wooCommerce = new wooCommerceRestApi({
        url: "http://localhost:8000", // Your store URL
        consumerKey: "ck_1eb757f1c371336398094bdec100028c3169502f", // Your consumer key
        consumerSecret: "cs_d6d64b2f44d6fa017645432052116c81fd84a219", // Your consumer secret
        version: "wc/v2" // WooCommerce WP REST API version
    });

    const data = {
        name: "Premium Quality",
        type: "simple",
        regular_price: "21.99",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        categories: [
            {
                id: 9
            },
            {
                id: 14
            }
        ],
        images: [
            {
                src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
                position: 0
            },
            {
                src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
                position: 1
            }
        ]
    };

    const t = await wooCommerce.post("products", data);
    console.log(t);

    res.json({
        "t": t.id
    });
};

