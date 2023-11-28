import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [description, setDescription] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            description,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            description,
            cat,
            img: file ? imgUrl : "",
            created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      
    } catch (err) {
      console.log(err);
    }
    
    navigate("/");
  }

  return (
    <div className='add'>
      <div className="content">

        <input 
          type='text' 
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="editorContainer">
          <ReactQuill 
            className="editor" 
            theme="snow" 
            value={description} 
            onChange={setDescription}
          />
        </div>

      </div>

      <div className="menu">
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
            <div className="cat">
              <input
                className='input'
                type="radio"
                checked={cat === "flowers"}
                name="cat"
                value="flowers"
                id="flowers"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="flowers">HOA TƯƠI</label>
            </div>
            <div className="cat">
              <input
                className='input'
                type="radio"
                checked={cat === "trap"}
                name="cat"
                value="trap"
                id="trap"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="trap">TRÁP CƯỚI</label>
            </div>
            {/* <div className="cat">
              <input
                className='input'
                type="radio"
                checked={cat === "design"}
                name="cat"
                value="design"
                id="design"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="design">Design</label>
            </div> */}
            {/* <div className="cat">
              <input
                className='input'
                type="radio"
                checked={cat === "food"}
                name="cat"
                value="food"
                id="food"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="food">Food</label>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Write