import React from "react";
import { tablabels } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";
const Tabs = ({ activeTabName, onClickTab }) => {
  const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tablabels;
  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );
  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            <img src="https://img.icons8.com/?size=50&id=20175&format=png"></img>
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName ===WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName ===PICK_YOUR_PRICE,
            "fas fa-tags-alt fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName===CANCEL_AT_ANY_TIME && (<section className="tab-content">
        <div className="container">
            <div id="tab-1-content" className={`tab-content-item ${activeTabName===CANCEL_AT_ANY_TIME && "show"}`}>
                <div className="tab-1-content-inner">
                    <div>
                        <p className="text-lg">
                            If you decide Netfkix isn't for you - no problem.no
                            commitment.Cancel online anytime
                        </p>
                        <Link to="/main" className="btn btn-lg">
                            Watch Free For 30 days
                        </Link>
                        </div>
                        <img src="https://th.bing.com/th/id/OIP.-rJbw3hnB2ahDh7DdxKUXgHaFQ?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""></img>
                </div>
            </div>
        </div>
      </section>)}
      {activeTabName===WATCH_ANYWHERE &&(
        <section className="tab-content">
            <div className="container">
                <div id="tab-2-content"
                className={`tab-content-item ${activeTabName===WATCH_ANYWHERE && "show"}`}>
                    <div className="tab-2-content-top">
                        <p class="text-lg">
                            Watch Tv shows and movies anytime,anyWhere - personaliszed for you.
                        </p>
                        <Link to="/main" className="btn btn-lg">Watch Free For 30 Days</Link>
                    </div>
                    <div className="tab-2-content-bottom">
                        <div>
                            <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt=""/>
                            <p className="text-md">Watch on Your Tv</p>
                            <p className="text-dark">
                                Smart TVs,PlayStation,Xbox,Chromecast,Apple TV,Blu-ray
                                Players and more
                            </p>
                        </div>
                        <div>

                            <img
                            src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt=""
                            />
                            <p className="text-md">
                            Watch instantly or download for later
                            </p>
                            <p className="text-dark"></p>
                            Available on phone and tablet, wherever you go.
                            </div>
                            <div>
                                <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt=""/>
                                <p className="text-md">Use any computer</p>
                                <p className="text-dark">Watch right on Netflix.com</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
      )}
      {activeTabName===PICK_YOUR_PRICE &&(
         <section className="tab-content">
         <div className="container">
             <div id="tab-2-content"
             className={`tab-content-item ${activeTabName===WATCH_ANYWHERE && "show"}`}>
                <div className="text-center">
                    <p className="text-lg">
                        Choose one plan and watch everything on Netflix
                    </p>
                    <Link to="/main" className="btn btn-lg">
                        Watch Free For 30 Days
                    </Link>
                </div>
            </div>
            <table className="table">
                <tbody>
                    <tr>
                        <td></td>
                        <td id="row1">BASIC</td>
                        <td id="row1">STANDARD</td>
                        <td id="row1">PREMIUM</td>
                    </tr>
                    <tr>
                        <td>Monthly Price after free month ends on 6/12/2023</td>
                        <td>$6.99</td>
                        <td>$11.99</td>
                        <td>$15.99</td>
                    </tr>
                    <tr>
                        <td>HD Available</td>
                        <td><i className="fas fa-times">x</i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                    </tr>
                    <tr>
                        <td>Ultra HD Available</td>
                        <td><i className="fas fa-times">x</i></td>
                        <td><i className="fas fa-times">x</i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                    </tr>
                    <tr>
                        <td>Screens you can watch on at the same time</td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Watch on your laptop,Tv,phone and tablet</td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                    </tr>
                    <tr>
                        <td>Unlimited movies and Tv shows</td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                    </tr>
                    <tr>
                        <td>Cancel anytime</td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                    </tr>
                    <tr>
                        <td>First month free</td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                        <td><i className="fas fa-check"><img id="tickmark" src="https://th.bing.com/th?q=Black+Tick+Mark&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
      )}
    </>
  );
};

export default Tabs;
