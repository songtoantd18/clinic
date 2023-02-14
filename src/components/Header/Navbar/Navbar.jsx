import React from "react";
import { NAVBAR_DATA } from "../../../constants/Constants";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Search from "../../../Search/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log("NAVBAR_DATA:", NAVBAR_DATA);

  const handleClickNav = (id) => {
    console.log("id:", id);
  };
  return (
    <div className="header-container">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAMAAAAuj2TTAAAArlBMVEUAAAAfIngfIngfIngfIngfIngfIngfIngfIngfIngfIngfIngfInhWWs8fIngfInhWWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs9WWs8fInhWWs////94e9l0d9eRlODU1fOcn+N7ftr29v3P0PLu7/ro6fnCw+6ytOmusOjDxO7Bw+0+ogQhAAAAKHRSTlMAdyK7Zu7dmUQRM6rM3YhV+gWl9crAj07kVEYcENO0lYM+NAHwJX5WUYMitAAAAz9JREFUaN7dmdl2mzAQQEdgMALvW2Nn31oNjres7f//WGUUMwqKMdiksXofcoQ4R8yV0AxW4D+kO+41O2jSafbGXbCHyTlup/kDLOH2J+ZzdQtWcIW7uAIbmOBubHi7bs9xN00LdvwPLMIvOHp6WIQeHD1NLEITjp4+ZniI4wezMsKXUPOEqHOoBMwTIeArqIk1rq0idbHGkS1XqOa3idTMiQzEmj1FfGFwoMhUMovj2VSyS0TUQMMtLZKOE0H1IrHGThGf6z2lRTabvcW/W0Qw6vH3ECG+99XSg2HiIBGW4Kocpi7+1WZXRKDgXlak3VJBcUigPo9xEnE+LCzTrtKbAWeNNK8EzEuGCKoWEQHNsS4SNsQGissVCq9RRoRRggxdscENKxbx6ZGaSCA06qpPT7ElRBSuMaoIqhOhx7ofRRxP6DBKz3uLmKN6To4IUVjE4wBtkaLHHDGfQg4268PKi0QsolEbrEFyFYqI1nvy9FORUD2Qg1JUoUXUWS8n4nKgUUVAkxJWJtJSAbHEg6UiTMuurc3ceVqnX0bE48ZNalckovZvI4mxTSJ1kcEH4GpBgOyKikQfik+orU69OpFA240kEoksm6BcCrigCF1G2pI6VYtQzA581YqwUisS57NVxKFaQSLMyPMH7BHzJrUrFAGWbkiWyVp+YuLUQ5BQ1lLNPUTMrJUtJJ1DRLi/eRgz6ojHmC//SpP96whd7q4jdzLKVa7HChHvPhVRLZ+iMCp7ahIJorxIfmWn46DnXJFnOg7KiKiJamdEIPTMTxTuHygCgad7BJDlQob5mCsyR8ThpyIEidCXrqINCp72uWVFzFFdBwxGMsy3XJE3RBwVFlGEzFefSdnfI6IV1sqL5P8eobPfaa7I1I7j+LP+jnfrUd7vn8Hx05OBLnJEFnacYQNco+TPVo8XlFyDDQxzd8kyyVlWcLMu7rMtHjOU3IAdjHCryQIlI7CE7kAzMddjYME/EN85baJk+ZLR+L1Eyckp2MN9YoKLeUzMF5h43INNnA4wYfk6f1rFq6f561J1nNu0Hmu6I/yMS3v2R8rNwNAY2FEIDSYXHSQ6FxOwlrPx5fCkj/2T4eXYhu9ExV91duU34JI3WwAAAABJRU5ErkJggg=="
          className="menu-logo a"
          alt="Norway"
        ></img>
      </div>
      <ul className="header-main-menu">
        {NAVBAR_DATA.map((navItem) => {
          console.log("navItem:", navItem);
          return (
            <li
              key={navItem.id}
              className="menu-link"
              onClick={() => handleClickNav(navItem.id)}
            >
              <div className="link-title">
                <Link to={navItem.path}>
                  {navItem.name}
                  {navItem.dropdownData ? <MdAdd /> : ""}
                </Link>
              </div>
            </li>
          );
        })}
        <div>
          <BsFillTelephoneFill />
          <span>(+01)999 888 777</span>
        </div>
        <Search />
      </ul>
    </div>
  );
};

export default Navbar;
