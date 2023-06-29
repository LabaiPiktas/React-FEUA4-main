import React from "react";
import "./App.css";
import "./components/Product.css";
import Product from "./components/Product";
import GolfCalendar from "./GolfCalendar.jpg";
import CircumIcon from "@klarr-agency/circum-icons-react";

function App() {
  return (
    <div>
      <Product
        image={GolfCalendar}
        title={
          <>
            Volkswagen GOLF MK2
            <span className="icon-left">
              <CircumIcon name="square_chev_left" />
            </span>
            <span className="icon-right">
              <CircumIcon name="square_chev_right" />
            </span>
            <br />
            2022 Calendar
          </>
        }
        price="10.00€"
        description={
          <div>
            12 unique designs. <br />
            <br />
            All pieces are printed on heavyweight 200 gsm <br />
            art paper. <br />
            <br />
            Limited to 50 pieces. <br />
            <br />
            One size: 11.7x16.5 inch/(297x420mm)
          </div>
        }
        availability="Availability: 10 in stock"
        category="Category: Calendars"
      />
    </div>
  );
}

export default App;
