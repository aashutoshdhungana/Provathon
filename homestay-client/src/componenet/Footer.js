import react from "react";

import { MdEmail, MdPermPhoneMsg, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div class="container-fluid mt-3 bg-dark text-white mt-4">
        <div class="container">
          <div class="row py-4">
            <div class="col-sm-6">
              <h5 class="pb-3">
                <MdLocationOn class="mr-3 " />
                Thamel <br />
                Kathmandu, Nepal
              </h5>
              <h5 class="pb-3">+977 9861282203</h5>
              <h5>homestay@gmail.com</h5>
            </div>
            <div class="col-sm-6">
              <h4>About the company</h4>
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ac lacinia tortor. Nulla quam ex, malesuada id mollis sit amet,
                tristique ut nibh. Nullam pharetra, ipsum ac malesuada pretium,
                velit leo tristique urna, quis porta diam nisl eget ante. Mauris
                eleifend iaculis efficitur.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
