import React from "react";
import "./Profile.css";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import {FaTrash,FaEdit,FaPlusSquare,FaTools,FaArrowRight,FaEnvelope,FaPhone} from "react-icons/fa"
import profilePhoto from "../../assets/pic4.jpeg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="profile_wrapper">
        <div className="profile_col_1">
          <div className="profile_col_1_sub_1">
            <img src={profilePhoto} alt="User" />
          </div>
          <div className="profile_col_1_sub_2">Big Berry</div>
          <div className="profile_col_1_sub_3">29/03/2023 &bull; 02:22</div>
          <div className="profile_col_1_sub_4">
            <Link to="/profile/settings">
              <FaTools />
              settings
            </Link>
            <Link to="/profile/logout">
              <FaArrowRight />
              logout
            </Link>
          </div>
        </div>

        <div className="profile_col_2">
          <div className="profile_col_2_sub_1">
            <form action="" method="get">
              <div className="search_box">
                <input type="search" name="" id="" placeholder="Find Contact" />
              </div>
            </form>

            <div className="number_of_contact_box">108 Contacts</div>
            <div className="add_contact_box">
              <Link to="/profile/contact/add">
                <FaPlusSquare /> Add Contact
              </Link>
            </div>
          </div>

          <div className="profile_col_2_sub_2">
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_box_item">Big Berry</div>
              <div className="contact_box_item">
                <a href="mailto:bigberry@gmail.com">
                    <FaEnvelope/>
                  Send Email
                </a>{" "}
              </div>
              <div className="contact_box_item">
                <FaPhone/>07061534233</div>
              <div className="contact_box_action_grp">
                <button className="edit_btn">
                  <FaEdit />
                  Edit
                </button>
                <button className="delete_btn">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
           
            
            
            
           
          
           
          
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
