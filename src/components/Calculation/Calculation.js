import "./Calculation.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calculation = () => {
  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        <p>Selected Items:</p>
        <p>Total Price: $</p>
        <p>Total Shipping Charge: $</p>
        <p>Tax: $</p>
        <h4>Grand Total: $</h4>
      </div>
      <div>
        <button>
          Clear Cart <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button>
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Calculation;
