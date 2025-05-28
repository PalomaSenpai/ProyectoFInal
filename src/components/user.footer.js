

export default function Footer(){
    return (
        <>
            <footer className="footer">
          <div className="footer-top two-columns-on-tablet">
            <div className="row flex">
              <div className="column width-3">
                <div className="widget">
                  <h4 className="widget-title weight-light">Sartre Traveler</h4>
                </div>
              </div>
              <div className="column width-3">
                <div className="widget">
                  <h4 className="widget-title">Trending Offers</h4>
                  <ul>
                    <li>
                      <a href="#">Yosemite, U.S - $229</a>
                    </li>
                    <li>
                      <a href="#">Grand Canyon, U.S - $624</a>
                    </li>
                    <li>
                      <a href="#">Trondheim, Norway - $424</a>
                    </li>
                    <li>
                      <a href="#">Reykjavik, Iceland - $224</a>
                    </li>
                    <li>
                      <a href="#">Nuuk, Greenland - $324</a>
                    </li>
                    <li>
                      <a href="#">Mount Rushmore, U.S - $454</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column width-3">
                <div className="widget">
                  <h4 className="widget-title">More Links</h4>
                  <ul>
                    <li>
                      <a href="#">About Sartre World</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Company Affiliations</a>
                    </li>
                    <li>
                      <a href="#">Award Miles Program</a>
                    </li>
                    <li>
                      <a href="#">Frequently Asked Questions</a>
                    </li>
                    <li>
                      <a href="#">Contact An Agent</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column width-3">
                <div className="widget">
                  <h4 className="widget-title">Get Our App</h4>
                  <p>
                    Get your favourite trips right on your phone. Download our
                    Traveler App&#8482; Today!
                  </p>
                  <p>
                    <a
                      className="button button-info medium rounded bkg-black bkg-hover-theme color-white color-hover-white no-margin-bottom"
                      ><span className="icon-app-store medium left"></span
                      ><span className="button-content"
                        ><small>Download On The</small>AppStore</span
                      ></a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}