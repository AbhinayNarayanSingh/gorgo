import React, { useState } from "react";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import Select from "../components/Select";
import FileInput from "../components/FileInput";
import TagInput from "../components/TagInput";

const NewArticle = () => {
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();

  const imgContainer = [
    {
      id: 1,
      value: image1,
      setValue: setImage1,
    },
    {
      id: 2,
      value: image2,
      setValue: setImage2,
    },
    {
      id: 3,
      value: image3,
      setValue: setImage3,
    },
    {
      id: 4,
      value: image4,
      setValue: setImage4,
    },
    {
      id: 5,
      value: image5,
      setValue: setImage5,
    },
    {
      id: 6,
      value: image6,
      setValue: setImage6,
    },
  ];

  const submitHandler = () => {
    console.log(tags);
    console.log(title);
    console.log(subTitle);
    console.log(category);
    console.log(content);

    console.log(">>>>> images");

    imgContainer.map((n) => console.log(n.value));
  };

  return (
    <>
      <Navigation />
      <div className="container-fluid " style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container editor-text-container">
          <div className="row justify-content-center ">
            <div className="col-md-8 editor col-12">
              <h2>Add New Article</h2>
              <div className="row">
                {imgContainer.map((n) => {
                  return (
                    <div
                      className="col-md-3 col-xl-2 col-4"
                      key={n.id}
                      style={{ marginBottom: "1rem" }}
                    >
                      <FileInput
                        id={n.id}
                        value={n.value}
                        setValue={n.setValue}
                      />
                    </div>
                  );
                })}
              </div>
              <Textarea label="Title" value={title} setValue={setTitle} />
              <Input
                label="Sub Title"
                value={subTitle}
                setValue={setSubTitle}
              />
              <Select
                label={"Category"}
                id={"Category"}
                option={["Business", "Entertainment"]}
                value={category}
                setValue={setCategory}
              />
              <TextEditor value={content} setValue={setContent} />

              <TagInput label="Tags" value={tags} setValue={setTags} />
              <button className="btn-primary" onClick={() => submitHandler()}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewArticle;
