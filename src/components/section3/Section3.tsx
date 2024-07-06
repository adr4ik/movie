import React from "react";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Section3() {
  return (
    <div>
      <div className="section__3__title">
        <h1>Trending</h1>
        <a href="#">View All {<ArrowForwardIcon />}</a>
      </div>
      <section className="section__3">
        <div className="card_box container bounce">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/355px-Banksy-ps.jpg"
              alt=""
            />
          </div>
          <div className="card_box_info">
            <div>
              <p>Meddelin</p>
            </div>
            <div className="card_box_info_direction">
              <p>Action</p>
              <p>Comedy</p>
              <p>Thriler</p>
            </div>
          </div>
        </div>
        <div className="card_box container">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/355px-Banksy-ps.jpg"
              alt=""
            />
          </div>
          <div className="card_box_info">
            <div>
              <p>Meddelin</p>
            </div>
            <div className="card_box_info_direction">
              <p>Action</p>
              <p>Comedy</p>
              <p>Thriler</p>
            </div>
          </div>
        </div>
        <div className="card_box container">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/355px-Banksy-ps.jpg"
              alt=""
            />
          </div>
          <div className="card_box_info">
            <div>
              <p>Meddelin</p>
            </div>
            <div className="card_box_info_direction">
              <p>Action</p>
              <p>Comedy</p>
              <p>Thriler</p>
            </div>
          </div>
        </div>
        <div className="card_box container">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/355px-Banksy-ps.jpg"
              alt=""
            />
          </div>
          <div className="card_box_info">
            <div>
              <p>Meddelin</p>
            </div>
            <div className="card_box_info_direction">
              <p>Action</p>
              <p>Comedy</p>
              <p>Thriler</p>
            </div>
          </div>
        </div>
        <div className="card_box container">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/355px-Banksy-ps.jpg"
              alt=""
            />
          </div>
          <div className="card_box_info">
            <div>
              <p>Meddelin</p>
            </div>
            <div className="card_box_info_direction">
              <p>Action</p>
              <p>Comedy</p>
              <p>Thriler</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
