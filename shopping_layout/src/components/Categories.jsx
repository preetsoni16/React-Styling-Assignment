
import React from "react";

export default function Categories() {
    return (
        <div>
            <div className="featured-categories">
                <h2 className="feature">
                    Featured Categories
                    <a href="">cake & Milk</a>
                    <a href="">Coffee & Tea</a>
                    <a href="">Pet Foods</a>
                    <a href="">Vegetables</a>
                </h2>
                <hr />
                <div  className="container-fluid">
                    <div className="categories">
                        <div className="category-card">
                            <img src="images/cake.jpg" className="cate" alt="cack" />
                            <p>Cake &amp; Milk</p>
                            <span>26 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/Kiwi.jpg" className="cate" alt="kiwi" />
                            <p>Organic Kiwi</p>
                            <span>28 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/peach.jpg" className="cate" alt="Peach" />
                            <p>Peach</p>
                            <span>14 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/apple.jpg" className="cate" alt="Red Apple" />
                            <p>Red Apple</p>
                            <span>54 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/snacks.jpg" className="cate" alt="Snack" />
                            <p>Snack</p>
                            <span>56 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/vegitables.jpg" className="cate" alt="Vegetables" />
                            <p>Vegetables</p>
                            <span>72 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/strawberry.jpg" className="cate" alt="Strawberry" />
                            <p>Strawberry</p>
                            <span>36 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/black_plum.jpg" className="cate" alt="Black plum" />
                            <p>Black plum</p>
                            <span>123 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/custard_apple.jpg" className="cate" alt="custard" />
                            <p>Custard Apple</p>
                            <span>34 items</span>
                        </div>
                        <div className="category-card">
                            <img src="images/coffee.jpg" className="cate" alt="Coffee & Tea" />
                            <p>Coffee &amp; Tea</p>
                            <span>87 items</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
